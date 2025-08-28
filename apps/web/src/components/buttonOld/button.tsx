import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { buttonVariants } from "./constants"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "./types"

const Button = React.forwardRef<
  HTMLButtonElement | HTMLElement, // ref can be either
  ButtonProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp: React.ElementType = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref as any} // <-- cast is safe because Comp is correct at runtime
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }