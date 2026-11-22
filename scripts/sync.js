#!/usr/bin/env node

/**
 * CLI Sync Script:
 * Run `npm run sync <github_username>` or `node scripts/sync.js <github_username>`
 * Fetches ALL repositories from GitHub and writes to src/data/portfolioData.js!
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { fetchGitHubData } from '../server/githubParser.js';
import { updatePortfolioDataFile } from '../server/dataWriter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function main() {
  const args = process.argv.slice(2);
  const username = args[0] || 'vinit-agarwal';

  console.log(`\n=================================================`);
  console.log(`🌴 PORTFOLIO DATA SYNC // GitHub Repositories`);
  console.log(`=================================================`);
  console.log(`[1/3] Connecting to GitHub API for user: "${username}"...`);

  try {
    const ghData = await fetchGitHubData(username, process.env.GITHUB_TOKEN);
    console.log(`[2/3] Found user: ${ghData.profile.name || username}`);
    console.log(`      Total Repositories fetched: ${ghData.projects.length}`);

    // Filter out forks by default for cleaner showcase, or take top 8
    const selectedProjects = ghData.projects.filter(p => !p.isFork).slice(0, 10);

    console.log(`[3/3] Saving ${selectedProjects.length} projects to src/data/portfolioData.js...`);
    await updatePortfolioDataFile({
      profile: {
        avatar: ghData.profile.avatar,
        githubUrl: ghData.profile.githubUrl,
      },
      projects: selectedProjects,
    }, projectRoot);

    console.log(`\n✨ SUCCESS! portfolioData.js updated with ${selectedProjects.length} repositories.`);
    console.log(`   - Selected: ${selectedProjects.map((p) => p.title).join(', ')}`);
    console.log(`\nTip: You can also use the interactive UI import modal (click the ↓ icon in the navbar) to check/uncheck any of your ${ghData.projects.length} repositories with a live search filter!\n`);
  } catch (err) {
    console.error(`\n❌ Error syncing data:`, err.message);
    process.exit(1);
  }
}

main();
