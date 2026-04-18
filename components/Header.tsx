'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { BUSINESS } from "@/lib/constants"

const navLinks = [
  { label: "Services",  href: "#services" },
  { label: "Pricing",   href: "#pricing" },
  { label: "FAQ",       href: "#faq" },
  { label: "Contact",   href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#06111F] text-white text-center py-2 px-4 text-xs font-medium tracking-wide">
        Now open in Cedar Hill, TX — Walk-ins welcome &nbsp;·&nbsp;{" "}
        <a href={`tel:${BUSINESS.phoneRaw}`} className="underline underline-offset-2 hover:text-[#C9A550] transition-colors">
          {BUSINESS.phone}
        </a>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_2px_16px_rgba(11,31,58,0.08)]" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <Image
                src="/logo.png"
                alt="Fur Seasons Dog Wash"
                width={48}
                height={48}
                className="rounded-xl"
                priority
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-xl font-extrabold text-[#0B1F3A] tracking-tight"
                  style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
                >
                  Fur Seasons
                </span>
                <span className="text-[10px] font-bold text-[#C9A550] uppercase tracking-[0.18em]">
                  Dog Wash
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-gray-500 hover:text-[#0B1F3A] transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="hidden lg:flex items-center gap-1.5 text-sm font-bold text-[#0B1F3A] hover:text-[#C9A550] transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {BUSINESS.phone}
              </a>
              <Link href="/booking" className="btn-primary text-sm px-5 py-2.5">
                Book Now
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#0B1F3A] cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden pb-5 border-t border-gray-100">
              <div className="flex flex-col gap-1 pt-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-semibold text-gray-600 hover:text-[#0B1F3A] hover:bg-[#FBF8F2] rounded-xl transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="px-4 py-3 text-sm font-bold text-[#C9A550] cursor-pointer"
                >
                  {BUSINESS.phone}
                </a>
                <Link
                  href="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary mt-2 text-sm text-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
