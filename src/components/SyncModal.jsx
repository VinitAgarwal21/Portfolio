import React, { useState } from 'react';
import { 
  X, 
  Github, 
  Linkedin, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Save, 
  Download, 
  Sparkles, 
  Search, 
  CheckSquare, 
  Square, 
  ExternalLink,
  Star,
  GitFork,
  Filter
} from 'lucide-react';

export default function SyncModal({ isOpen, onClose, onApplyData }) {
  const [activeTab, setActiveTab] = useState('github');
  const [githubUser, setGithubUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  // GitHub Repositories & Selection State
  const [githubData, setGithubData] = useState(null);
  const [selectedRepoIds, setSelectedRepoIds] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [hideForks, setHideForks] = useState(true);

  // LinkedIn State
  const [linkedinText, setLinkedinText] = useState('');
  const [linkedinData, setLinkedinData] = useState(null);

  if (!isOpen) return null;

  // 1. Fetch ALL GitHub Data (Tries backend first, paginates via client fallback if offline)
  const handleFetchGithub = async (e) => {
    e.preventDefault();
    if (!githubUser.trim()) return;

    setLoading(true);
    setError(null);
    setSuccessMsg(null);
    setSearchQuery('');

    try {
      let data = null;

      // Try local backend endpoint first
      try {
        const res = await fetch(`/api/github/${encodeURIComponent(githubUser.trim())}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success) data = json;
        }
      } catch (err) {
        // Backend not running, proceed to client fallback
      }

      // Client-side fallback: fetch user profile & all pages of repositories
      if (!data) {
        const userRes = await fetch(`https://api.github.com/users/${encodeURIComponent(githubUser.trim())}`);
        if (!userRes.ok) throw new Error(`User "${githubUser}" not found on GitHub.`);
        const user = await userRes.json();

        const rawRepos = [];
        let page = 1;
        while (true) {
          const reposRes = await fetch(
            `https://api.github.com/users/${encodeURIComponent(githubUser.trim())}/repos?sort=updated&per_page=100&page=${page}&type=all`
          );
          if (!reposRes.ok) break;
          const pageRepos = await reposRes.json();
          if (!Array.isArray(pageRepos) || pageRepos.length === 0) break;
          rawRepos.push(...pageRepos);
          if (pageRepos.length < 100 || page >= 5) break;
          page++;
        }

        const projects = rawRepos
          .filter((r) => !r.archived)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at))
          .map((r, i) => {
            const tags = [r.language, ...(r.topics || [])].filter(Boolean);
            const cleanTitle = r.name
              .split(/[-_.]/)
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(' ');

            return {
              id: `imported-gh-${r.id || i}`,
              repoName: r.name,
              title: cleanTitle,
              tagline: r.description ? r.description.slice(0, 80) : "Open Source Project",
              description: r.description || "Open source project repository.",
              image: "",
              tags: tags.length ? tags.slice(0, 5) : ["Code"],
              githubUrl: r.html_url,
              liveUrl: r.homepage || "",
              badge: r.stargazers_count > 0 ? `★ ${r.stargazers_count}` : r.language || "GitHub",
              stars: r.stargazers_count || 0,
              forks: r.forks_count || 0,
              language: r.language || "Other",
              isFork: r.fork,
            };
          });

        data = {
          profile: {
            name: user.name || githubUser,
            bio: user.bio || "",
            avatar: user.avatar_url || "",
            githubUrl: user.html_url,
          },
          totalFetched: rawRepos.length,
          projects,
        };
      }

      setGithubData(data);

      // Default: select top 6 projects or all if fewer
      const defaultSelected = new Set(
        data.projects
          .filter((p) => !p.isFork)
          .slice(0, 6)
          .map((p) => p.id)
      );
      // If none selected (e.g. all are forks), select the first few
      if (defaultSelected.size === 0 && data.projects.length > 0) {
        data.projects.slice(0, 4).forEach((p) => defaultSelected.add(p.id));
      }
      setSelectedRepoIds(defaultSelected);

    } catch (err) {
      setError(err.message || "Failed to fetch GitHub data.");
    } finally {
      setLoading(false);
    }
  };

  // Toggle selection of a single repository
  const toggleRepoSelection = (id) => {
    setSelectedRepoIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Select all visible / Deselect all
  const handleSelectAllVisible = (visibleRepos) => {
    setSelectedRepoIds((prev) => {
      const next = new Set(prev);
      const allSelected = visibleRepos.every((r) => next.has(r.id));
      if (allSelected) {
        visibleRepos.forEach((r) => next.delete(r.id));
      } else {
        visibleRepos.forEach((r) => next.add(r.id));
      }
      return next;
    });
  };

  // 2. Parse LinkedIn Data
  const handleParseLinkedin = async (e) => {
    e.preventDefault();
    if (!linkedinText.trim()) return;

    setLoading(true);
    setError(null);

    try {
      let data = null;
      try {
        const res = await fetch('/api/linkedin/parse', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: linkedinText }),
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success) data = json;
        }
      } catch (err) {
        // Fallback
      }

      if (!data) {
        const blocks = linkedinText.split(/\n\s*\n/).filter((b) => b.trim().length > 10);
        const experiences = blocks.map((b, idx) => {
          const lines = b.split('\n').map((l) => l.trim()).filter(Boolean);
          return {
            id: `imported-exp-${idx + 1}`,
            role: lines[0] || "Software Engineer",
            company: lines[1] || "Company",
            location: "Remote",
            period: lines[2] || "2022 - PRESENT",
            type: "Full-Time",
            status: "Current",
            description: lines[3] || `Engineering and software architecture at ${lines[1] || 'Company'}.`,
            bullets: lines.length > 4 ? lines.slice(4, 7) : ["Engineered responsive, accessible web applications and backend APIs."],
            tech: ["TypeScript", "React", "Node.js"],
          };
        });
        data = { experiences };
      }

      setLinkedinData(data);
    } catch (err) {
      setError("Failed to parse LinkedIn text. Try pasting structured experience blocks.");
    } finally {
      setLoading(false);
    }
  };

  // 3. Save chosen repositories & apply to portfolio
  const handleApply = async () => {
    setLoading(true);
    setError(null);

    // Filter projects to only include user-selected repositories
    const chosenProjects = githubData?.projects?.filter((p) => selectedRepoIds.has(p.id)) || [];

    if (githubData && chosenProjects.length === 0) {
      setError("Please select at least one project to display.");
      setLoading(false);
      return;
    }

    const payload = {};
    if (githubData?.profile) payload.profile = githubData.profile;
    if (chosenProjects.length > 0) payload.projects = chosenProjects;
    if (linkedinData?.experiences) payload.experiences = linkedinData.experiences;

    try {
      // Attempt backend persistence to src/data/portfolioData.js
      try {
        await fetch('/api/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        // In static mode, live memory state is used
      }

      if (onApplyData) {
        onApplyData(payload);
      }

      setSuccessMsg(`✓ Successfully imported ${chosenProjects.length} selected projects!`);
      setTimeout(() => {
        setSuccessMsg(null);
        onClose();
      }, 1400);
    } catch (err) {
      setError("Failed to apply data.");
    } finally {
      setLoading(false);
    }
  };

  // Visible filtered repos in modal
  const visibleRepos = (githubData?.projects || []).filter((repo) => {
    if (hideForks && repo.isFork) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      repo.title.toLowerCase().includes(q) ||
      (repo.repoName && repo.repoName.toLowerCase().includes(q)) ||
      (repo.description && repo.description.toLowerCase().includes(q)) ||
      (repo.language && repo.language.toLowerCase().includes(q)) ||
      (repo.tags && repo.tags.some((t) => t.toLowerCase().includes(q)))
    );
  });

  const allVisibleSelected =
    visibleRepos.length > 0 && visibleRepos.every((r) => selectedRepoIds.has(r.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-500 flex items-center justify-center">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">
                Import Portfolio Data
              </h3>
              <p className="font-body text-xs text-slate-500">
                Fetch all repositories from GitHub and choose which projects to feature
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-5 pt-3 gap-2 bg-slate-50/50 dark:bg-slate-950/30">
          <button
            onClick={() => setActiveTab('github')}
            className={`pb-3 px-3 text-xs font-heading font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'github'
                ? 'border-rose-500 text-rose-500'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repositories {githubData ? `(${githubData.projects.length})` : ''}</span>
          </button>

          <button
            onClick={() => setActiveTab('linkedin')}
            className={`pb-3 px-3 text-xs font-heading font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'linkedin'
                ? 'border-teal-500 text-teal-500'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Experience</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4">
          
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* GitHub Tab */}
          {activeTab === 'github' && (
            <div className="space-y-4">
              {/* Username Input Form */}
              <form onSubmit={handleFetchGithub} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter your GitHub username (e.g. vinit-agarwal)"
                    value={githubUser}
                    onChange={(e) => setGithubUser(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 font-body"
                  />
                  <Github className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
                <button
                  type="submit"
                  disabled={loading || !githubUser.trim()}
                  className="px-5 py-2.5 rounded-xl bg-rose-500 text-white font-heading text-xs font-semibold hover:bg-rose-600 transition-colors disabled:opacity-50 flex items-center gap-2 shrink-0 shadow-sm"
                >
                  {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                  <span>{loading ? "Fetching All..." : "Fetch All Repos"}</span>
                </button>
              </form>

              {/* Repositories Selection Workspace */}
              {githubData && (
                <div className="space-y-3">
                  
                  {/* User Profile Summary */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {githubData.profile.avatar && (
                        <img
                          src={githubData.profile.avatar}
                          alt="Avatar"
                          className="w-10 h-10 rounded-xl object-cover ring-2 ring-rose-500/30"
                        />
                      )}
                      <div>
                        <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                          {githubData.profile.name}
                        </h4>
                        <p className="text-xs text-slate-400 truncate max-w-xs sm:max-w-md">
                          {githubData.profile.bio || "GitHub Profile"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right font-heading text-xs">
                      <span className="text-rose-500 font-bold block">{githubData.projects.length} Total Repos</span>
                      <span className="text-slate-500">{selectedRepoIds.size} Selected</span>
                    </div>
                  </div>

                  {/* Filter & Search Bar */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1">
                    <div className="relative flex-1">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search repos by name, tech or topic..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none focus:border-rose-500"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <label className="flex items-center gap-1.5 cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white select-none">
                        <input
                          type="checkbox"
                          checked={hideForks}
                          onChange={(e) => setHideForks(e.target.checked)}
                          className="rounded text-rose-500 focus:ring-rose-500"
                        />
                        <span>Hide forks</span>
                      </label>

                      <button
                        type="button"
                        onClick={() => handleSelectAllVisible(visibleRepos)}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-heading font-medium"
                      >
                        {allVisibleSelected ? "Deselect Visible" : "Select All Visible"}
                      </button>
                    </div>
                  </div>

                  {/* Scrollable Repository Selection List */}
                  <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800/80 max-h-80 overflow-y-auto">
                    {visibleRepos.length === 0 ? (
                      <div className="p-8 text-center text-xs text-slate-400">
                        No repositories matching your search.
                      </div>
                    ) : (
                      visibleRepos.map((repo) => {
                        const isSelected = selectedRepoIds.has(repo.id);
                        return (
                          <div
                            key={repo.id}
                            onClick={() => toggleRepoSelection(repo.id)}
                            className={`p-3 transition-colors flex items-start gap-3 cursor-pointer select-none ${
                              isSelected
                                ? 'bg-rose-50/50 dark:bg-rose-950/20'
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                            }`}
                          >
                            {/* Checkbox */}
                            <div className="pt-0.5 shrink-0 text-rose-500">
                              {isSelected ? (
                                <CheckSquare className="w-4 h-4 fill-rose-500/10" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                              )}
                            </div>

                            {/* Repo Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-heading font-bold text-xs text-slate-900 dark:text-white truncate">
                                  {repo.title}
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">
                                  ({repo.repoName})
                                </span>
                                {repo.isFork && (
                                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-400">
                                    fork
                                  </span>
                                )}
                              </div>

                              <p className="font-body text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {repo.description}
                              </p>

                              {/* Tags & Meta */}
                              <div className="flex flex-wrap items-center gap-2 mt-1.5 text-[10px]">
                                {repo.language && (
                                  <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                                    {repo.language}
                                  </span>
                                )}
                                {repo.stars > 0 && (
                                  <span className="flex items-center gap-0.5 text-amber-500 font-semibold">
                                    <Star className="w-3 h-3 fill-current" />
                                    {repo.stars}
                                  </span>
                                )}
                                {repo.forks > 0 && (
                                  <span className="flex items-center gap-0.5 text-slate-400">
                                    <GitFork className="w-3 h-3" />
                                    {repo.forks}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* External link to repo */}
                            <a
                              href={repo.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-white shrink-0"
                              title="View on GitHub"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        );
                      })
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                    <span>
                      Tip: Checked projects will be displayed as cards on your portfolio.
                    </span>
                    <span className="font-heading font-semibold text-rose-500">
                      {selectedRepoIds.size} projects chosen
                    </span>
                  </div>

                </div>
              )}
            </div>
          )}

          {/* LinkedIn Tab */}
          {activeTab === 'linkedin' && (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs text-slate-500 space-y-1">
                <span className="font-heading font-semibold text-teal-500 block">
                  How to Import LinkedIn Experience:
                </span>
                <p>
                  Paste your experience section text (Role, Company, Dates, Bullet points), or paste your LinkedIn Positions export CSV/JSON below.
                </p>
              </div>

              <textarea
                rows="6"
                placeholder={`Senior Full-Stack Engineer\nNeonWave Technologies\n2023 - PRESENT\nArchitected real-time WebSocket dashboard...\nSpearheaded migration to microservices...`}
                value={linkedinText}
                onChange={(e) => setLinkedinText(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 resize-none"
              />

              <button
                onClick={handleParseLinkedin}
                disabled={loading || !linkedinText.trim()}
                className="w-full py-2.5 rounded-xl bg-teal-500 text-white font-heading text-xs font-semibold hover:bg-teal-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                <span>Parse Experience Data</span>
              </button>

              {linkedinData && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <span className="font-heading text-xs font-semibold text-teal-500 block">
                    Parsed Experience Timeline ({linkedinData.experiences.length} roles)
                  </span>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {linkedinData.experiences.map((exp) => (
                      <div key={exp.id} className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs">
                        <div className="flex items-center justify-between font-heading font-semibold">
                          <span className="text-slate-900 dark:text-white">{exp.role}</span>
                          <span className="text-teal-500 text-[11px]">{exp.period}</span>
                        </div>
                        <span className="text-slate-400 text-[11px] block">{exp.company}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <span className="text-xs text-slate-500">
            {githubData
              ? `${selectedRepoIds.size} of ${githubData.projects.length} projects selected.`
              : 'Enter GitHub username to fetch repositories.'}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-heading font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              disabled={loading || (activeTab === 'github' && (!githubData || selectedRepoIds.size === 0))}
              className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-rose-500 dark:hover:bg-rose-500 dark:hover:text-white font-heading text-xs font-semibold transition-all shadow-sm disabled:opacity-50 flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Apply {selectedRepoIds.size > 0 ? `(${selectedRepoIds.size})` : ''} to Portfolio</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
