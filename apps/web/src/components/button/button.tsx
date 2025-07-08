import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./styles";
import type { ButtonProps } from './types'


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "md",
      color = "primary",
      variant = "filled",
      as: Comp = "button",
      loading = false,
      linkStyle = false,
      icon = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Comp
        className={cn(
          buttonVariants({ size, color, variant, linkStyle, icon }),
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
         >
        {loading ? <span className="loader" /> : children}
      </Comp>
    );
  }
);
Button.displayName = "Button";