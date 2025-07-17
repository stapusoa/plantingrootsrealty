import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

import type { BadgeProps } from "./types";
import { badgeVariants } from "./styles";

export function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}
