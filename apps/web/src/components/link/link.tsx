// link.tsx
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { linkBaseStyles } from "./constants";
import type { StyledLinkProps } from "./types";

const StyledLink = React.forwardRef<HTMLAnchorElement, StyledLinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <RouterLink
        ref={ref}
        className={cn(linkBaseStyles, className)}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }
);

StyledLink.displayName = "StyledLink";

export { StyledLink };