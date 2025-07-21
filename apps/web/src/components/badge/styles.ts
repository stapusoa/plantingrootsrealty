import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 tracking-wide font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow]",
  {
    variants: {
      size: {
        sm: "py-1 px-2 font-karla text-xs",
        md: "py-1 px-3 font-karla text-sm",
        lg: "py-1 px-3 font-karla text-base",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        contrast: "",
        critical: "",
        neutral: "",
      },
      variant: {
        filled: "border-none text-white",
        outlined: "border-2",
        ghost: "bg-transparent border-none",
      },
      shape: {
        rounded: "rounded-full",
        square: "rounded-lg",
      },
      pointer: {
        true: "relative after:-z-20 after:content-[''] after:absolute after:left-0 after:bottom-0 after:translate-y-1/2 after:w-0 after:h-0 after:border-y-2 after:border-y-transparent after:border-r-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "filled",
      color: "default",
      size: "md",
      shape: "rounded",
      pointer: false,
    },
    compoundVariants: [
      // Outlined
      { variant: "outlined", color: "primary", class: "text-primary border-primary" },
      { variant: "outlined", color: "secondary", class: "text-secondary border-secondary" },
      { variant: "outlined", color: "critical", class: "text-blush-300 border-blush-300" },
      { variant: "outlined", color: "neutral", class: "text-subtle border-neutral-500" },
      { variant: "outlined", color: "default", class: "text-default border-neutral-800" },
      { variant: "outlined", color: "contrast", class: "text-white border-white" },

      // Ghost
      { variant: "ghost", color: "primary", class: "text-primary border-transparent" },
      { variant: "ghost", color: "secondary", class: "text-secondary border-transparent" },
      { variant: "ghost", color: "critical", class: "text-blush-300 border-transparent" },
      { variant: "ghost", color: "neutral", class: "text-neutral-800 border-transparent" },
      { variant: "ghost", color: "default", class: "text-header border-transparent" },
      { variant: "ghost", color: "contrast", class: "text-neutral-100 border-transparent" },

      // Filled
      { variant: "filled", color: "primary", class: "bg-badge-primary" },
      { variant: "filled", color: "secondary", class: "bg-badge-secondary" },
      { variant: "filled", color: "critical", class: "bg-badge-critical" },
      { variant: "filled", color: "neutral", class: "bg-badge-neutral text-header" },
      { variant: "filled", color: "default", class: "bg-badge-default" },
      { variant: "filled", color: "contrast", class: "bg-badge-contrast text-header" },

      // With Pointer
      { variant: "filled", color: "primary", shape: "square", pointer: true, class: "bg-badge-primary after:border-b-primary-dark after:border-r-primary-dark rounded-bl-none" },
      { variant: "filled", color: "secondary", shape: "square", pointer: true, class: "bg-badge-secondary after:border-b-secondary-dark after:border-r-secondary-dark rounded-bl-none" },
      { variant: "filled", color: "critical", shape: "square", pointer: true, class: "bg-badge-critical after:border-b-critical-dark after:border-r-critical-dark rounded-bl-none" },
      { variant: "filled", color: "neutral", shape: "square", pointer: true, class: "bg-badge-neutral after:border-b-black after:border-r-black rounded-bl-none" },
      { variant: "filled", color: "default", shape: "square", pointer: true, class: "bg-badge-default after:border-b-black after:border-r-black rounded-bl-none" },
      { variant: "filled", color: "contrast", shape: "square", pointer: true, class: "bg-badge-contrast text-header after:border-b-neutral-200 after:border-r-neutral-200 rounded-bl-none" },
    ]
    }
);
