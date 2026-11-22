/**
 * GitHub Profile & Repository Parser
 * Fetches user profile and ALL public repositories from GitHub API (handling pagination)
 * and maps them to the portfolio schema.
 */

export async function fetchGitHubData(username, token = null) {
  const headers = {
    'User-Agent': 'Portfolio-Data-Importer',
    'Accept': 'application/vnd.github.v3+json',
  };

  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  // 1. Fetch user profile
  const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });
  if (!userRes.ok) {
    throw new Error(`GitHub user "${username}" not found or API rate limited (status ${userRes.status})`);
  }
  const user = await userRes.json();

  // 2. Fetch ALL user repositories (paginating until all are retrieved)
  const rawRepos = [];
  let page = 1;

  while (true) {
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&page=${page}&type=all`,
      { headers }
    );

    if (!reposRes.ok) {
      // If first page fails, throw; otherwise break gracefully
      if (page === 1) {
        throw new Error(`Failed to fetch repositories for "${username}" (status ${reposRes.status})`);
      }
      break;
    }

    const pageRepos = await reposRes.json();
    if (!Array.isArray(pageRepos) || pageRepos.length === 0) {
      break;
    }

    rawRepos.push(...pageRepos);

    // If less than 100 returned, we reached the final page
    if (pageRepos.length < 100 || page >= 10) {
      break;
    }
    page++;
  }

  // 3. Filter and parse ALL repositories
  const parsedProjects = rawRepos
    .filter((repo) => !repo.archived) // exclude archived repos
    .sort((a, b) => {
      // Sort by stars first, then latest push date
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.pushed_at || b.updated_at) - new Date(a.pushed_at || a.updated_at);
    })
    .map((repo, index) => {
      // Collect tags from primary language and GitHub topics
      const tags = [];
      if (repo.language) tags.push(repo.language);
      if (Array.isArray(repo.topics)) {
        repo.topics.forEach((topic) => {
          const capitalized = topic.charAt(0).toUpperCase() + topic.slice(1);
          if (!tags.includes(capitalized)) tags.push(capitalized);
        });
      }
      if (tags.length === 0) tags.push("Code");

      // Clean title format: my-cool-project -> My Cool Project
      const cleanTitle = repo.name
        .split(/[-_.]/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

      return {
        id: `github-project-${repo.id || index + 1}`,
        repoName: repo.name,
        title: cleanTitle,
        tagline: repo.description ? repo.description.slice(0, 85) : "Open Source Project",
        description: repo.description || "Open source codebase hosted on GitHub.",
        image: "", // Fallback card will render automatically if empty
        tags: tags.slice(0, 5),
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || "",
        badge: repo.stargazers_count > 0 ? `★ ${repo.stargazers_count} stars` : repo.language || "Open Source",
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        language: repo.language || "Other",
        isFork: repo.fork,
        updatedAt: repo.pushed_at || repo.updated_at,
      };
    });

  return {
    profile: {
      name: user.name || username,
      bio: user.bio || "",
      avatar: user.avatar_url || "",
      location: user.location || "Remote",
      githubUrl: user.html_url,
      publicRepos: user.public_repos || rawRepos.length,
      followers: user.followers || 0,
    },
    totalFetched: rawRepos.length,
    projects: parsedProjects, // ALL parsed repositories
  };
}
