import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "bg-background",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        muted: "bg-muted text-muted-foreground",
        accent: "bg-accent text-accent-foreground",
        light: "bg-[#F9FAFB]",
        dark: "bg-[#111827] text-white",
        transparent: "bg-transparent",
      },
      spacing: {
        default: "py-16 md:py-24",
        sm: "py-8 md:py-12",
        lg: "py-24 md:py-32",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      spacing: "default",
    },
  }
)

export interface SectionProps 
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, spacing, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ variant, spacing }), className)}
      {...props}
    />
  )
)
Section.displayName = "Section"

export { Section } 