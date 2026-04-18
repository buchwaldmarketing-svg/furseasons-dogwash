import { Plus_Jakarta_Sans, Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Fur Seasons Dog Wash | Self-Serve & Full Service Dog Wash in Cedar Hill, TX",
  description: "Cedar Hill's premier dog wash. DIY self-serve bays and full service grooming. Premium products, clean space, simple pricing. Walk-ins welcome.",
  keywords: "dog wash, self serve dog wash, Cedar Hill TX, pet grooming, dog bath, Fur Seasons, full service grooming",
  openGraph: {
    title: "Fur Seasons Dog Wash | Cedar Hill, TX",
    description: "Clean space. Simple pricing. Luxury feel. Self-serve bays + full service grooming.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body
        className="min-h-screen flex flex-col bg-white text-gray-800"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  )
}
