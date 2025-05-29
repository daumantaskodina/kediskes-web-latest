import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "./language-context"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "KEDIŠKĖS - Tikslūs metalo tekinimo CNC staklėmis sprendimai",
  description:
    "Profesionalūs metalo apdirbimo paslaugos naudojant modernius CNC stakles. Garantuojame aukščiausią kokybę ir tikslumą kiekviename projekte.",
  keywords: ["CNC tekinimas", "Metalo apdirbimas", "Frezavimas", "Pramonės sprendimai", "Tikslus metalo apdirbimas"],
  authors: [{ name: "Kediškės" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lt" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
