import Image from "next/image"
import Link from "next/link"
import { BUSINESS } from "@/lib/constants"

const quickLinks = [
  { label: "Services",    href: "#services" },
  { label: "Pricing",     href: "#pricing" },
  { label: "FAQ",         href: "#faq" },
  { label: "Contact",     href: "#contact" },
  { label: "Book Now",    href: "/booking" },
]

const dayOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#06111F] text-white">
      {/* Pre-footer CTA */}
      <div className="bg-[#C9A550]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
            >
              Ready to get your pup fresh?
            </h2>
            <p className="mt-1 text-white/80 text-sm sm:text-base">
              Walk in or book your spot online. No drama, no mess at home.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0B1F3A] font-bold px-7 py-3 rounded-xl hover:bg-[#F0FBF6] transition-colors cursor-pointer text-sm whitespace-nowrap"
            >
              Book Now
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-bold px-7 py-3 rounded-xl hover:bg-white/30 transition-colors cursor-pointer text-sm whitespace-nowrap border border-white/30"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Fur Seasons Dog Wash" width={44} height={44} className="rounded-xl" />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-lg font-extrabold tracking-tight"
                  style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
                >
                  Fur Seasons
                </span>
                <span className="text-[10px] font-bold text-[#C9A550] uppercase tracking-[0.18em]">
                  Dog Wash
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Cedar Hill&apos;s premier dog wash. Clean space, simple pricing, luxury feel.
            </p>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#C9A550]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              {BUSINESS.instagramHandle}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C9A550] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C9A550] mb-5">
              Hours
            </h3>
            <ul className="space-y-2.5">
              {dayOrder.map((day) => (
                <li key={day} className="flex justify-between items-center gap-4 text-sm">
                  <span className="text-white/50 capitalize">{day}</span>
                  <span
                    className={`font-semibold whitespace-nowrap ${
                      BUSINESS.hours[day] === "Closed" ? "text-white/30" : "text-white"
                    }`}
                  >
                    {BUSINESS.hours[day]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C9A550] mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 shrink-0 text-[#C9A550]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 shrink-0 text-[#C9A550]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#C9A550]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {BUSINESS.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">Cedar Hill, TX</p>
        </div>
      </div>
    </footer>
  )
}
