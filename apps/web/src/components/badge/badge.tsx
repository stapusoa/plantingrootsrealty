import { cn } from "@/lib/utils"
import { badgeVariants } from "./styles"
import type { BadgeProps } from "./types"

export function Badge({
  children,
  className,
  color = "default",
  variant = "filled",
  size = "md",
  shape = "rounded",
  withPointer = false,
  ...props
}: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ color, size, shape, variant, pointer: withPointer}),
      className
    )}
    {...props}
    >
      {children}
    </span>
  )
}
