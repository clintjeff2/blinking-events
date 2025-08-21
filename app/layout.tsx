import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Blinking Events | Cameroon's Premier Event Planning Company",
  description:
    "Cameroon's leading events company serving Limbe, Buea & Littoral. Professional event planning, wedding coordination, hostess services, catering & more.",
  keywords:
    "event planner Cameroon, wedding planner Limbe, hostess services Buea, event catering Douala, event security Cameroon, wedding planner Cameroon, event hostesses Cameroon",
  openGraph: {
    title: "Blinking Events | Cameroon's Premier Event Planning Company",
    description: "From concept to applause, we plan, produce, and staff unforgettable events across Cameroon.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blinking Events - Cameroon's Premier Event Planning Company",
      },
    ],
  },
  metadataBase: new URL("https://blinking-events.com"),
  robots: {
    index: true,
    follow: true,
  },
  generator: "Blinking Events",
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        
        {/* Analytics Script Placeholder */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              <!-- Google Tag Manager code would go here -->
            `,
          }}
        />
      </body>
    </html>
  )
}
