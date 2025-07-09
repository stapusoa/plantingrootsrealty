export type PageType = 'home' | 'our-story' | 'listings' | 'resources' | 'blog' | 'contact';

export interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  heroHeight?: number;
}
