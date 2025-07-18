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
        default: "border-neutral-200",
        primary: "border-primary",
        secondary: "border-secondary",
        contrast: "border-white",
        critical: "border-error",
        neutral: "border-neutral-300",
      },
      variant: {
        filled: "text-white",
        outlined: "border-2",
        ghost: "bg-transparent border-none",
      },
      shape: {
        rounded: "rounded-full",
        square: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "filled",
      color: "default",
      size: "md",
      shape: "rounded",
    },
    compoundVariants: [
      // Outlined
      { variant: "outlined", color: "primary", class: "text-primary border-primary" },
      { variant: "outlined", color: "secondary", class: "text-secondary border-secondary" },
      { variant: "outlined", color: "critical", class: "text-critical border-critical" },
      { variant: "outlined", color: "neutral", class: "text-neutral-800 border-neutral-300" },
      { variant: "outlined", color: "default", class: "text-header border-neutral-300" },

      // Ghost
      { variant: "ghost", color: "primary", class: "text-primary border-transparent" },
      { variant: "ghost", color: "secondary", class: "text-secondary border-transparent" },
      { variant: "ghost", color: "critical", class: "text-critical border-transparent" },
      { variant: "ghost", color: "neutral", class: "text-neutral-800 border-transparent" },
      { variant: "ghost", color: "default", class: "text-header border-transparent" },

      // Filled
      { variant: "filled", color: "primary", class: "bg-primary" },
      { variant: "filled", color: "secondary", class: "bg-secondary" },
      { variant: "filled", color: "critical", class: "bg-critical" },
      { variant: "filled", color: "neutral", class: "bg-neutral-500" },
      { variant: "filled", color: "default", class: "bg-neutral-400" },
    ]
    }
);
