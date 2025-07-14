import { useState, useEffect } from 'react';
import { octokit } from '../lib/github';
import type { ContentItem } from '../pages/types';
import { CONTENT_PATH, REPO_OWNER, REPO_NAME, BRANCH, GITHUB_TOKEN } from '../env';
import matter from 'gray-matter';

// Mock data for when GitHub is not available
const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Welcome to your CMS',
    type: 'post',
    status: 'published',
    content: `# Welcome to your Content Management System

This is your new CMS powered by React, GitHub, and Auth0. Here's what you can do:

## Features
- **Content Management**: Create, edit, and delete posts and pages
- **GitHub Integration**: All content is stored in your GitHub repository as markdown files
- **Real-time Preview**: See your content as you write it
- **Auth0 Authentication**: Secure access to your CMS

## Getting Started
1. Set up your environment variables:
   - \`VITE_GITHUB_TOKEN\` - Your GitHub personal access token
   - \`VITE_AUTH0_DOMAIN\` - Your Auth0 domain
   - \`VITE_AUTH0_CLIENT_ID\` - Your Auth0 client ID

2. Start creating content using the sidebar navigation

3. Your content will be automatically saved to your GitHub repository

## Demo Mode
You're currently viewing demo content. Connect your GitHub repository to start managing real content.`,
    excerpt: 'Learn how to use your new CMS and set up GitHub integration.',
    createdAt: '2025-01-14',
    updatedAt: '2025-01-14',
    filename: 'welcome.md',
  },
  {
    id: '2',
    title: 'Getting Started Guide',
    type: 'page',
    status: 'published',
    content: `# Getting Started with Your CMS

## Environment Setup

### Required Environment Variables
Create a \`.env\` file in your project root with:

\`\`\`
VITE_GITHUB_TOKEN=your_github_token_here
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your_client_id_here
\`\`\`

### GitHub Token Setup
1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate a new token with \`repo\` permissions
3. Add the token to your \`.env\` file

### Auth0 Setup
1. Create an Auth0 application
2. Set the callback URL to \`http://localhost:3000\`
3. Add your domain and client ID to the \`.env\` file

## Content Management

### Creating Content
- Use the "+" button in the sidebar to create new posts or pages
- Content is written in Markdown format
- Use the editor to write and preview your content

### Publishing
- Content can be saved as "draft" or "published"
- Published content will be visible in your final site
- All content is stored in your GitHub repository

## Features

### Sidebar Navigation
- **Posts**: Blog posts and articles
- **Pages**: Static pages like About, Contact, etc.
- **Media**: File management (coming soon)
- **Settings**: CMS configuration

### Editor Features
- Real-time preview
- Markdown support
- Metadata management
- Publishing controls`,
    excerpt: 'Complete guide to setting up and using your CMS.',
    createdAt: '2025-01-14',
    updatedAt: '2025-01-14',
    filename: 'getting-started.md',
  },
  {
    id: '3',
    title: 'Sample Blog Post',
    type: 'post',
    status: 'draft',
    content: `# This is a Sample Blog Post

This is a sample blog post to demonstrate how your CMS works. You can edit this content or delete it once you're ready to create your own posts.

## Features Demonstrated

### Markdown Support
You can use all standard Markdown formatting:
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Lists and more

### Content Management
- Edit content in the sidebar
- Switch between preview and edit modes
- Save drafts or publish immediately
- Delete content when no longer needed

### GitHub Integration
When connected to GitHub, all your content changes will be:
- Automatically saved to your repository
- Version controlled with Git
- Backed up in the cloud
- Accessible from anywhere

## Next Steps
1. Connect your GitHub repository
2. Set up Auth0 authentication
3. Start creating your own content
4. Customize the CMS to fit your needs

Happy writing!`,
    excerpt: 'A sample blog post showing the CMS features and capabilities.',
    createdAt: '2025-01-14',
    updatedAt: '2025-01-14',
    filename: 'sample-blog-post.md',
  },
  {
    id: '4',
    title: 'About Page',
    type: 'page',
    status: 'published',
    content: `# About This CMS

This Content Management System was built with modern web technologies to provide a seamless content creation experience.

## Technology Stack
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: Auth0
- **Storage**: GitHub API
- **Content Format**: Markdown with frontmatter

## Key Features
- **Git-based**: All content stored in GitHub
- **Real-time editing**: See changes as you type
- **Responsive design**: Works on desktop and mobile
- **Secure**: Auth0 authentication
- **Version control**: Full Git history of changes

## Content Format
All content is stored as Markdown files with YAML frontmatter:

\`\`\`yaml
---
title: Your Post Title
type: post
status: published
date: 2025-01-14
---

Your content here...
\`\`\`

## Get Started
Ready to start creating? Click the "+" button in the sidebar to create your first post or page.`,
    excerpt: 'Learn about the technology and features powering this CMS.',
    createdAt: '2025-01-14',
    updatedAt: '2025-01-14',
    filename: 'about.md',
  },
];

export function useContent() {
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isGitHubConnected = !!GITHUB_TOKEN;

  const loadContent = async () => {
    setLoading(true);
    setError(null);
    
    if (!isGitHubConnected) {
      // Use mock data when GitHub is not connected
      setTimeout(() => {
        setContents(mockContent);
        setLoading(false);
      }, 800); // Simulate loading time
      return;
    }

    try {
      // Load all content files from the configured CONTENT_PATH
      const allFiles = await octokit.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: CONTENT_PATH,
        ref: BRANCH,
      }).then(res => Array.isArray(res.data) ? res.data : []);
      
      if (allFiles.length === 0) {
        // No content found, use mock data as starting point
        setContents(mockContent);
        setLoading(false);
        return;
      }

      // Load content for each file
      const contentPromises = allFiles.map(async (file) => {
        const rawContent = await octokit.repos.getContent({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path: file.path,
          ref: BRANCH,
        }).then(res => {
          if (!("content" in res.data)) return '';
          return atob(res.data.content || '');
        });
        const parsedContent = (() => {
          const { data, content } = matter(rawContent);
          return {
            id: file.name.replace('.md', ''),
            title: data.title || 'Untitled',
            type: data.type || 'post',
            status: data.status || 'draft',
            excerpt: content.slice(0, 150),
            content,
            createdAt: data.date || new Date().toISOString().split('T')[0],
            updatedAt: data.date || new Date().toISOString().split('T')[0],
            filename: file.name,
          };
        })();
        return {
          ...parsedContent,
          sha: file.sha,
        };
      });

      const loadedContent = await Promise.all(contentPromises);
      setContents(loadedContent);
    } catch (err) {
      setError('Failed to load content from GitHub');
      console.error('Error loading content:', err);
      // Fallback to mock data on error
      setContents(mockContent);
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async (contentItem: ContentItem): Promise<boolean> => {
    if (!isGitHubConnected) {
      // Simulate save for mock data
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      const updated = { ...contentItem, updatedAt: new Date().toISOString().split('T')[0] };
      setContents(prev => {
        const existing = prev.find(c => c.id === contentItem.id);
        if (existing) {
          return prev.map(c => c.id === contentItem.id ? updated : c);
        } else {
          return [updated, ...prev];
        }
      });
      return true;
    }

    try {
      const markdownContent = `---
title: ${contentItem.title}
type: ${contentItem.type}
status: ${contentItem.status}
date: ${contentItem.createdAt}
---

${contentItem.content}`;
      const filename = contentItem.filename || `${contentItem.id}.md`;
      const path = `${CONTENT_PATH}/${filename}`;

      if (contentItem.sha) {
        // Update existing file
        await octokit.repos.createOrUpdateFileContents({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path,
          message: `Update ${contentItem.type}: ${contentItem.title}`,
          content: btoa(markdownContent),
          sha: contentItem.sha,
          branch: BRANCH,
        });
      } else {
        // Create new file
        await octokit.repos.createOrUpdateFileContents({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path,
          message: `Create ${contentItem.type}: ${contentItem.title}`,
          content: btoa(markdownContent),
          branch: BRANCH,
        });
      }

      // Reload content to get updated data
      await loadContent();

      return true;
    } catch (err) {
      console.error('Error saving content:', err);
      return false;
    }
  };

  const deleteContent = async (contentItem: ContentItem): Promise<boolean> => {
    if (!isGitHubConnected) {
      // Simulate delete for mock data
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
      setContents(prev => prev.filter(c => c.id !== contentItem.id));
      return true;
    }

    if (!contentItem.sha || !contentItem.filename) {
      return false;
    }

    try {
      const path = `${CONTENT_PATH}/${contentItem.filename}`;
      
      await octokit.repos.deleteFile({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path,
        message: `Delete ${contentItem.type}: ${contentItem.title}`,
        sha: contentItem.sha,
        branch: BRANCH,
      });

      // Remove from local state
      setContents(prev => prev.filter(c => c.id !== contentItem.id));

      return true;
    } catch (err) {
      console.error('Error deleting content:', err);
      return false;
    }
  };

  const createContent = (type: 'post' | 'page'): ContentItem => {
    const timestamp = Date.now().toString();
    const date = new Date().toISOString().split('T')[0];
    
    return {
      id: timestamp,
      title: `New ${type === 'post' ? 'Post' : 'Page'}`,
      type,
      status: 'draft',
      content: `# New ${type === 'post' ? 'Post' : 'Page'}

Start writing your content here...

${type === 'post' ? 
  'This is a blog post. You can write about anything you want and publish it to your site.' : 
  'This is a page. Pages are typically used for static content like About, Contact, or other important information.'}`,
      excerpt: `A new ${type} ready for your content.`,
      createdAt: date,
      updatedAt: date,
      filename: `${timestamp}.md`,
    };
  };

  useEffect(() => {
    loadContent();
  }, []);

  return {
    contents,
    loading,
    error: isGitHubConnected ? error : null, // Don't show error when using mock data
    loadContent,
    saveContent,
    deleteContent,
    createContent,
    isGitHubConnected,
  };
}