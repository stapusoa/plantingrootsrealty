import type { VariantProps } from "class-variance-authority";
import type { badgeVariants } from "./styles";
import type {
  BadgeColor,
  BadgeSize,
  BadgeVariant,
  BadgeShape,
} from "./constants";

type BadgeCvaProps = VariantProps<typeof badgeVariants>;

export interface BadgeProps extends Omit<BadgeCvaProps, "size" | "color" | "variant" | "shape"> {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;

  size?: BadgeSize;
  color?: BadgeColor;
  variant?: BadgeVariant;
  shape?: BadgeShape;
}