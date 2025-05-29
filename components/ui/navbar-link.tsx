"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
  underlineAnimation?: boolean
}

const NavbarLink = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ className, active, underlineAnimation = true, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "relative inline-flex items-center transition-colors duration-200 font-medium",
          "text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          active && "text-foreground",
          underlineAnimation && [
            "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
            active && "after:w-full"
          ],
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
)
NavbarLink.displayName = "NavbarLink"

export { NavbarLink } 