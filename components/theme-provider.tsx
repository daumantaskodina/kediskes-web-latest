"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Pass through any props as is
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <div className="motion-reduce:transition-none motion-reduce:animate-none">
        {children}
      </div>
    </NextThemesProvider>
  )
} 