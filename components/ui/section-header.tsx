import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionHeaderVariants = cva(
  "flex flex-col text-center mx-auto mb-12 md:mb-16",
  {
    variants: {
      size: {
        default: "max-w-3xl",
        sm: "max-w-lg",
        md: "max-w-2xl",
        lg: "max-w-3xl",
        xl: "max-w-4xl",
        full: "max-w-none",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface SectionHeaderProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionHeaderVariants> {
  eyebrow?: string
  title: string
  description?: string
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, size, eyebrow, title, description, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(sectionHeaderVariants({ size }), className)}
      {...props}
    >
      {eyebrow && (
        <span className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
)
SectionHeader.displayName = "SectionHeader"

export { SectionHeader } 