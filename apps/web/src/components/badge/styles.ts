import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neutral-200 text-neutral-900 [a&]:hover:bg-primary/90",
        primary:
          "border-transparent bg-primary text-white",
        secondary:
          "border-transparent bg-secondary text-white [a&]:hover:bg-secondary/90",
        critical:
          "border-transparent bg-critical text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-primary border-neutral-300 border-2 [a&]:hover:text-primary-dark",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
