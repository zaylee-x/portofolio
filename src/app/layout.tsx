import type { Metadata } from "next"
import { Baloo_2 } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/providers/smooth-scroll"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Sylva-Portofolio | Designing Future Experiences",
    icons: {
    icon: "/rabbit.svg",
  },
  description: "UI/UX Designer • Frontend Dev • AI Product Builder",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${baloo.variable} font-baloo bg-[#121212] text-[#E2F1FF] antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          <main className="relative w-full overflow-hidden">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
