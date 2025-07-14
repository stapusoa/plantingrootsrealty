import { Octokit } from "@octokit/rest";
import { GITHUB_TOKEN } from "../env";

export const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

// Add error handling if no token is provided
if (!GITHUB_TOKEN) {
  console.warn('GitHub token not provided. Create a VITE_GITHUB_TOKEN environment variable for GitHub integration.');
}