import fs from 'fs/promises';
import path from 'path';

/**
 * Updates `src/data/portfolioData.js` with imported GitHub and LinkedIn data.
 */
export async function updatePortfolioDataFile(newData, projectRoot) {
  const dataFilePath = path.join(projectRoot, 'src', 'data', 'portfolioData.js');

  // Read existing file
  let existingContent = await fs.readFile(dataFilePath, 'utf-8');

  // 1. Update personal info (name, bio, avatar, stats) if provided
  if (newData.profile) {
    if (newData.profile.name) {
      existingContent = existingContent.replace(
        /name:\s*["'][^"']+["']/,
        `name: ${JSON.stringify(newData.profile.name)}`
      );
    }
    if (newData.profile.avatar) {
      existingContent = existingContent.replace(
        /avatar:\s*["'][^"']+["']/,
        `avatar: ${JSON.stringify(newData.profile.avatar)}`
      );
    }
    if (newData.profile.bio) {
      existingContent = existingContent.replace(
        /bio:\s*["'][^"']+["']/,
        `bio: ${JSON.stringify(newData.profile.bio)}`
      );
    }
    if (newData.profile.githubUrl) {
      existingContent = existingContent.replace(
        /github:\s*["'][^"']+["']/,
        `github: ${JSON.stringify(newData.profile.githubUrl)}`
      );
    }
  }

  // 2. Update projects if provided
  if (Array.isArray(newData.projects) && newData.projects.length > 0) {
    const projectsFormatted = JSON.stringify(newData.projects, null, 2);
    existingContent = existingContent.replace(
      /export const projects = \[[\s\S]*?\];/,
      `export const projects = ${projectsFormatted};`
    );
  }

  // 3. Update experiences if provided
  if (Array.isArray(newData.experiences) && newData.experiences.length > 0) {
    const experiencesFormatted = JSON.stringify(newData.experiences, null, 2);
    existingContent = existingContent.replace(
      /export const experiences = \[[\s\S]*?\];/,
      `export const experiences = ${experiencesFormatted};`
    );
  }

  // Write updated content back to file
  await fs.writeFile(dataFilePath, existingContent, 'utf-8');
  return { success: true, path: dataFilePath };
}
