import type { OverlayVariant } from "./constants2"

export type Breakpoint = "sm" | "md" | "lg";

export interface BGProps {
  fixed?: boolean;
  images?: Record<Breakpoint, string>; // responsive images
  fallback?: string; // fallback for single image
  alt?: string;
  className?: string;
}

export interface OverlayProps {
  variants?: OverlayVariant | OverlayVariant[];
  className?: string;
}

export interface HeroButton {
  text: string;
  onClick: () => void;
}

export interface GalleryProps {
  images: string[];
  className?: string;
  size?: "sm" | "md" | "lg";
}

export interface HeroContent {
  title: string;
  subheader?: string;
  badge?: string;
  buttons?: HeroButton[];
  gallery?: GalleryProps;
  children?: React.ReactNode;
  className?: string;
}

export type HeroHeight = "screen" | "md" | "sm"; // for fullHeight prop
export type HeroAlignment = "center" | "left" | "right";
export type HeroLayout = "default" | "columns";

export interface HeroProps {
  variant?: "fullscreen" | "section";
  fullHeight?: HeroHeight;
  bg?: BGProps;
  overlays?: OverlayVariant[];
  alignment?: HeroAlignment;
  layout?: HeroLayout;
  content?: HeroContent;
  parallax?: boolean;
  children?: React.ReactNode;
}