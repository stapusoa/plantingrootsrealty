import { Octokit } from "@octokit/rest";
import { GITHUB_TOKEN } from "./env";

// Initialize Octokit with authentication if token is available
export const octokit = new Octokit({
  auth: GITHUB_TOKEN || undefined,
});

// Add warning if no token is provided
if (!GITHUB_TOKEN) {
  console.warn('GitHub token not provided. Create a VITE_GITHUB_TOKEN environment variable for GitHub integration.');
}

// Export GitHub connection status
export const isGitHubEnabled = Boolean(GITHUB_TOKEN);