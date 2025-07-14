export interface ContentItem {
  id: string;
  title: string;
  type: 'post' | 'page';
  status: 'published' | 'draft';
  content: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  filename?: string;
  sha?: string;
}

export interface User {
  name: string;
  email: string;
  picture: string;
}