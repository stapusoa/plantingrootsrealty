import { cn } from "@/lib/utils";
import { badgeVariants } from "./styles";
import type { BadgeProps } from "./types";

export function Badge({
  className,
  color = "default",
  variant = "filled",
  size = "md",
  shape = "rounded",
  children,
}: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ color, size, shape, variant }), className)}
    >
      {children}
    </span>
  );
}