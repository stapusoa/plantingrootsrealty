import { type VariantProps } from "class-variance-authority"
import { buttonVariants } from "./constants"

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }