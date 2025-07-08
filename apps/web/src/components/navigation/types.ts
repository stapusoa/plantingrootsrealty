export type PageType = "home" | "our-story" | "blogs" | "listings" | "contact";

export interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  heroHeight?: number;
}
