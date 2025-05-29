import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const containerVariants = cva(
  "mx-auto px-4 md:px-6 w-full",
  {
    variants: {
      size: {
        default: "max-w-7xl",
        sm: "max-w-3xl",
        md: "max-w-5xl",
        lg: "max-w-7xl",
        xl: "max-w-[1400px]",
        full: "max-w-none",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface ContainerProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(containerVariants({ size }), className)}
      {...props}
    />
  )
)
Container.displayName = "Container"

export { Container } 