import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 ring-offset-background",
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
      color: {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        contrast: "bg-white text-primary border border-primary",
        critical: "bg-red-600 text-white",
        neutral: "bg-gray-200 text-gray-900",
      },
      variant: {
        filled: "",
        outlined: "bg-transparent border-2",
        ghost: "bg-transparent",
      },
      linkStyle: {
        true: "bg-transparent underline text-primary px-0 py-0 h-auto",
        false: "",
      },
      icon: {
        true: "aspect-square p-0 w-10 h-10",
        false: "",
      },
    },
    compoundVariants: [
      // Add any compound variants if needed
    ],
    defaultVariants: {
      size: "md",
      color: "primary",
      variant: "filled",
      linkStyle: false,
      icon: false,
    },
  }
);