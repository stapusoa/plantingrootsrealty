import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-6",
        md: "h-8",
        lg: "h-10",
      },
      color: {
        default:
          "border-transparent text-header bg-neutral-300  :hover:bg-primary/90",
        primary:
          "border-transparent bg-primary text-white",
        secondary:
          "border-transparent bg-secondary text-white [a&]:hover:bg-secondary/90",
        critical:
          "border-transparent bg-critical text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        neutral:
          "text-primary border-neutral-300 border-2 [a&]:hover:text-primary-dark",
      },
      variant: {
        default: "bg-transparent",
        outlined: "border-2",
        ghost: "bg-transparent border-none",
      },
      shape: {
        rounded: "rounded-full",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      color: "default",
      size: "md",
      shape: "rounded",
    },
    compoundVariants: [
      // Outlined
      { variant: "outlined", color: "primary", class: "text-primary border-primary hover:bg-primary/90 hover:border-primary-dark hover:text-primary-dark" },
      { variant: "outlined", color: "secondary", class: "text-secondary border-secondary hover:bg-secondary/90 hover:border-secondary-dark hover:text-secondary-dark" },
      { variant: "outlined", color: "critical", class: "text-critical border-critical hover:bg-critical/90 hover:border-critical-dark hover:text-critical-dark" },
      { variant: "outlined", color: "neutral", class: "text-neutral-800 border-neutral-300 hover:bg-neutral-200 hover:border-neutral-400 hover:text-neutral-900" },
      { variant: "outlined", color: "default", class: "text-header border-neutral-300 hover:bg-neutral-200 hover:border-neutral-400 hover:text-header-dark" },
    ]
    }
);
