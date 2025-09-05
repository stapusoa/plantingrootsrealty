import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-karla font-medium tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 ring-offset-background",
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
      color: {
        primary: "border-primary",
        secondary: "border-secondary",
        contrast: "border-white",
        critical: "border-error",
        neutral: "border-neutral-300",
      },
      variant: {
        filled: "",
        outlined: "bg-transparent border-2",
        ghost: "bg-transparent border-none",
      },
      linkStyle: {
        true: "bg-transparent underline text-primary px-0 py-0 h-auto border-none",
        false: "",
      },
      icon: {
        true: "aspect-square p-0 w-10 h-10",
        false: "",
      },
    },
    compoundVariants: [
      // Outlined
      { variant: "outlined", color: "primary", class: "text-primary border-primary hover:bg-primary-opacity hover:border-primary-dark hover:text-primary-dark" },
      { variant: "outlined", color: "secondary", class: "text-secondary border-secondary hover:bg-secondary-opacity hover:border-secondary-dark hover:text-secondary-dark" },
      { variant: "outlined", color: "contrast", class: "text-white border-white hover:text-primary hover:bg-white " },
      { variant: "outlined", color: "critical", class: "text-error border-error hover:bg-error-opacity hover:border-error-dark hover:text-error-dark" },
      { variant: "outlined", color: "neutral", class: "text-neutral-800 border-neutral-300 hover:bg-neutral-200 hover:border-neutral-400 hover:text-neutral-900" },
      // Ghost
      { variant: "ghost", color: "primary", class: "text-primary px-0 hover:text-primary-dark" },
      { variant: "ghost", color: "secondary", class: "text-secondary px-0 hover:text-secondary-dark" },
      { variant: "ghost", color: "contrast", class: "text-white px-0 hover:text-neutral-200" },
      { variant: "ghost", color: "critical", class: "text-error px-0 hover:text-error-dark" },
      { variant: "ghost", color: "neutral", class: "text-neutral-800 px-0 hover:text-black" },
      // Filled
      { variant: "filled", color: "primary", class: "text-white bg-primary hover:bg-primary-dark" },
      { variant: "filled", color: "secondary", class: "text-white bg-secondary hover:bg-secondary-dark" },
      { variant: "filled", color: "contrast", class: "text-primary bg-white hover:bg-neutral-200" },
      { variant: "filled", color: "critical", class: "text-white bg-error hover:bg-error-dark" },
      { variant: "filled", color: "neutral", icon: false, class: "text-neutral-900 bg-neutral-200 hover:bg-neutral-300" },

      // With Icon
      { variant: "filled", color: "neutral", icon: true, class: "bg-neutral-200 text-default hover:bg-neutral-300" },
    ],
    defaultVariants: {
      size: "md",
      color: "primary",
      variant: "filled",
      linkStyle: false,
      icon: false,
    },
  }
)