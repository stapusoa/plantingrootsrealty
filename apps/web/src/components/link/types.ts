import type { LinkProps } from "react-router-dom"

export interface StyledLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}