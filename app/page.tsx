'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import {
  BUSINESS,
  DIY_PRICING,
  FULL_SERVICE_PRICING,
  FULL_SERVICE_INCLUDES,
  ADD_ONS,
  DIY_INCLUDES,
  GROOMING_EXTRA_CHARGES,
  FAQ,
  TESTIMONIALS,
} from "@/lib/constants"

/* ── Icons ─────────────────────────────────────────────────────── */
function IconCheck() {
  return (
    <svg className="w-4 h-4 shrink-0 text-[#C9A550]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function IconStar() {
  return (
    <svg className="w-4 h-4 text-[#C9A550]" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  )
}

/* ── FAQ Item (controlled) ──────────────────────────────────────── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 ${
        open
          ? "bg-white shadow-[0_4px_24px_rgba(201,165,80,0.12)] ring-1 ring-[#C9A550]/20"
          : "bg-white border border-gray-100 hover:border-[#C9A550]/30"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <h3
          className={`text-sm sm:text-base font-semibold transition-colors ${open ? "text-[#C9A550]" : "text-gray-700"}`}
          style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        >
          {question}
        </h3>
        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${open ? "bg-[#C9A550] rotate-45" : "bg-gray-100"}`}>
          <svg className={`w-4 h-4 ${open ? "text-white" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  )
}

/* ── Pricing Tab ────────────────────────────────────────────────── */
type PricingTab = "diy" | "full"

/* ── PAGE ───────────────────────────────────────────────────────── */
export default function Home() {
  const [pricingTab, setPricingTab] = useState<PricingTab>("diy")

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ═══ HERO ═══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{
          background: "radial-gradient(ellipse at 20% 60%, rgba(201,165,80,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(201,165,80,0.1) 0%, transparent 50%), linear-gradient(150deg, #0B1F3A 0%, #071628 60%, #061018 100%)"
        }}>
          {/* Paw pattern overlay */}
          <div className="paw-pattern pointer-events-none absolute inset-0 opacity-100" aria-hidden="true" />

          {/* Floating orbs */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="float-slow absolute top-16 right-[15%] w-72 h-72 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #C9A550 0%, transparent 70%)" }} />
            <div className="float-delay absolute bottom-10 left-[8%] w-48 h-48 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #D4B460 0%, transparent 70%)" }} />
            <div className="absolute top-1/3 right-[40%] w-2 h-2 rounded-full bg-[#C9A550]/40" />
            <div className="absolute top-1/4 right-[25%] w-1.5 h-1.5 rounded-full bg-[#D4B460]/30" />
            <div className="absolute bottom-1/3 left-[30%] w-1 h-1 rounded-full bg-[#C9A550]/50" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-28 sm:pt-28 sm:pb-36">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

              {/* Text side */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{ background: "rgba(201,165,80,0.15)", color: "#D4B460", border: "1px solid rgba(201,165,80,0.25)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A550] animate-pulse inline-block" />
                  Now open in Cedar Hill, TX
                </div>

                <h1
                  className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-white leading-[1.08] tracking-tight"
                  style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
                >
                  Your dog deserves
                  <br />
                  <span className="gradient-text">a real spa day.</span>
                </h1>

                <p className="mt-6 text-lg text-white/55 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Cedar Hill&apos;s premier dog wash — self-serve bays and full service grooming with premium products, a clean space, and zero mess at home.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/booking" className="btn-primary text-base px-9 py-4">
                    Book a Bay
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <a href="#pricing" className="btn-secondary text-base px-9 py-4">
                    See Pricing
                  </a>
                </div>

                {/* Mini trust row */}
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start">
                  {["Walk-ins welcome", "From $15", "Premium products included"].map((item) => (
                    <span key={item} className="flex items-center gap-1.5 text-sm text-white/40">
                      <svg className="w-3.5 h-3.5 text-[#C9A550]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual side — real photos stacked */}
              <div className="relative shrink-0 flex gap-4 items-end">
                {/* Storefront photo — taller */}
                <div className="relative w-44 sm:w-52 h-64 sm:h-72 rounded-3xl overflow-hidden"
                  style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
                  <Image
                    src="/storefront.png"
                    alt="Fur Seasons Dog Wash storefront"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gold overlay strip at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
                    style={{ background: "linear-gradient(to top, rgba(11,31,58,0.85), transparent)" }}>
                    <p className="text-white text-xs font-bold">Cedar Hill, TX</p>
                  </div>
                </div>

                {/* Interior photo — shorter, offset up */}
                <div className="relative w-36 sm:w-44 h-52 sm:h-60 rounded-3xl overflow-hidden mb-6"
                  style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
                  <Image
                    src="/interior.png"
                    alt="Happy clients at Fur Seasons Dog Wash"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Floating chip — price */}
                <div className="float-slow absolute -bottom-2 -left-5 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #C9A550, #B8913E)", boxShadow: "0 8px 24px rgba(201,165,80,0.5)" }}>
                  <span className="text-white/80 text-xs font-semibold">DIY from</span>
                  <span className="text-xl font-extrabold" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>$15</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom gradient fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #FBF8F2)" }} />
        </section>

        {/* ═══ TRUST BADGES ══════════════════════════════════════ */}
        <section className="bg-[#FBF8F2] pt-6 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: "😊", label: "Dog-Friendly Space",    sub: "Calm, clean, stress-free" },
                { icon: "✓",  label: "No Hidden Fees",        sub: "One flat price by size" },
                { icon: "⭐", label: "Premium Products",      sub: "Pro-grade shampoos included" },
                { icon: "🚪", label: "Walk-Ins Welcome",      sub: "Or reserve your bay online" },
              ].map((badge) => (
                <div key={badge.label}
                  className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-[0_2px_12px_rgba(11,31,58,0.06)]">
                  <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: "linear-gradient(135deg, #FBF5E6, #EDD98A)" }}>
                    {badge.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0B1F3A]"
                      style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                      {badge.label}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PHOTO STRIP ═══════════════════════════════════════ */}
        <section className="bg-[#FBF8F2] pb-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Storefront */}
              <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden group"
                style={{ boxShadow: "0 8px 32px rgba(11,31,58,0.15)" }}>
                <Image
                  src="/storefront.png"
                  alt="Fur Seasons Dog Wash — Cedar Hill TX"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(11,31,58,0.6) 0%, transparent 50%)" }} />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white font-extrabold text-lg" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                    Our Space
                  </p>
                  <p className="text-white/70 text-sm">444 FM 1382, Cedar Hill, TX</p>
                </div>
              </div>

              {/* Interior / happy clients */}
              <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden group"
                style={{ boxShadow: "0 8px 32px rgba(11,31,58,0.15)" }}>
                <Image
                  src="/interior.png"
                  alt="Happy clients at Fur Seasons Dog Wash"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(11,31,58,0.6) 0%, transparent 50%)" }} />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white font-extrabold text-lg" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                    Happy Pups, Happy Families
                  </p>
                  <p className="text-white/70 text-sm">Cedar Hill&apos;s favorite dog wash</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SERVICES ══════════════════════════════════════════ */}
        <section id="services" className="bg-[#FBF8F2] pb-24 sm:pb-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C9A550] mb-3">
                What We Offer
              </span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A]"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
              >
                Two ways to get your pup clean
              </h2>
              <p className="mt-3 text-gray-500 max-w-md mx-auto text-sm sm:text-base">
                DIY or full service — either way, your dog leaves fresh, dry, and happy.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* DIY Card */}
              <div className="card p-8 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #FBF5E6, #EDD98A)" }}>
                  <svg className="w-6 h-6 text-[#C9A550]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c0 0-7.5 8.25-7.5 13.5a7.5 7.5 0 0015 0C19.5 10.5 12 2.25 12 2.25z" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-2"
                  style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                  Self-Serve Dog Wash
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  You wash, we supply everything. Raised tubs, warm water, professional products — all in one flat price by size.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {DIY_INCLUDES.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <IconCheck />{item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Starting at</span>
                    <div className="text-3xl font-extrabold gradient-text mt-0.5"
                      style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                      $15
                    </div>
                  </div>
                  <a href="#pricing" className="btn-primary text-sm px-5 py-2.5">See Pricing</a>
                </div>
              </div>

              {/* Full Service Card */}
              <div className="card p-8 group relative overflow-hidden">
                {/* Gradient top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[20px]"
                  style={{ background: "linear-gradient(90deg, #C9A550, #D4B460)" }} />

                <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                  style={{ background: "linear-gradient(135deg, #C9A550, #D4B460)" }}>
                  Popular
                </div>

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 mt-2 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #FBF5E6, #EDD98A)" }}>
                  <svg className="w-6 h-6 text-[#C9A550]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-2"
                  style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                  Full Service Bath
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  Drop your pup off and we handle the whole thing. Comes out clean, dry, and smelling amazing.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {FULL_SERVICE_INCLUDES.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <IconCheck />{item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Starting at</span>
                    <div className="text-3xl font-extrabold gradient-text-warm mt-0.5"
                      style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                      $40
                    </div>
                  </div>
                  <a href="#pricing" className="btn-primary text-sm px-5 py-2.5">See Pricing</a>
                </div>
              </div>
            </div>

            {/* Add-ons strip */}
            <div className="mt-6 bg-white rounded-2xl px-6 py-5 shadow-[0_2px_12px_rgba(11,31,58,0.06)] flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm font-bold text-[#0B1F3A] shrink-0"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                Premium Add-Ons
              </p>
              <div className="flex flex-wrap gap-2">
                {ADD_ONS.map((addon) => (
                  <span key={addon.name}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-[#C9A550]/20 bg-[#FBF5E6] text-gray-700">
                    {addon.name}
                    <span className="text-[#C9A550] font-bold">+${addon.price}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ══════════════════════════════════════ */}
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A550]">The Process</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0B1F3A]"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                From door to done in four steps
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Walk In or Book Online",  desc: "Reserve a bay or just show up. Walk-ins always welcome." },
                { num: "02", title: "Choose Your Service",     desc: "DIY self-serve or drop off for full service grooming." },
                { num: "03", title: "We Supply Everything",    desc: "Premium shampoos, dryers, towels — all included, no extras." },
                { num: "04", title: "Fresh Pup, Clean Hands",  desc: "Leave with a clean dog and zero mess at home. Every time." },
              ].map((step, i) => (
                <div key={step.num}
                  className="relative rounded-2xl p-7 group cursor-default transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: i % 2 === 0
                      ? "linear-gradient(145deg, #FBF8F2 0%, #FBF5E6 100%)"
                      : "linear-gradient(145deg, #FFFFFF 0%, #FBF8F2 100%)",
                    border: i % 2 === 0 ? "1px solid rgba(201,165,80,0.2)" : "1px solid rgba(11,31,58,0.06)",
                    boxShadow: "0 2px 16px rgba(11,31,58,0.05)"
                  }}>
                  {/* Giant background number */}
                  <span
                    className="absolute top-3 right-4 text-7xl font-extrabold leading-none select-none pointer-events-none"
                    style={{
                      fontFamily: "var(--font-jakarta), sans-serif",
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, rgba(201,165,80,0.12), rgba(201,165,80,0.04))"
                        : "linear-gradient(135deg, rgba(11,31,58,0.06), rgba(11,31,58,0.02))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    {step.num}
                  </span>

                  {/* Small step indicator */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-extrabold mb-5"
                    style={{
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, #C9A550, #B8913E)"
                        : "linear-gradient(135deg, #0B1F3A, #132D52)",
                      color: "#fff",
                      fontFamily: "var(--font-jakarta), sans-serif",
                      boxShadow: i % 2 === 0 ? "0 4px 12px rgba(201,165,80,0.4)" : "0 4px 12px rgba(11,31,58,0.3)"
                    }}>
                    {step.num}
                  </div>

                  <h3 className="text-base font-extrabold text-[#0B1F3A] mb-2 relative"
                    style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed relative">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PRICING ═══════════════════════════════════════════ */}
        <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 70% 50%, rgba(201,165,80,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(201,165,80,0.07) 0%, transparent 50%), linear-gradient(160deg, #0B1F3A 0%, #071628 50%, #06111F 100%)"
          }}>
          {/* Subtle paw pattern */}
          <div className="paw-pattern pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A550]">Pricing</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                Simple, honest pricing
              </h2>
              <p className="mt-3 text-white/50 max-w-md mx-auto">
                One price by size. Everything&apos;s included. No surprises.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex p-1 rounded-xl gap-1"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                {(["diy", "full"] as PricingTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setPricingTab(tab)}
                    className="px-6 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer"
                    style={pricingTab === tab
                      ? { background: "linear-gradient(135deg, #C9A550, #B8913E)", color: "#fff", boxShadow: "0 4px 16px rgba(201,165,80,0.45)" }
                      : { color: "rgba(255,255,255,0.5)" }
                    }
                  >
                    {tab === "diy" ? "DIY Self-Serve" : "Full Service Bath"}
                  </button>
                ))}
              </div>
            </div>

            {/* DIY Pricing */}
            {pricingTab === "diy" && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {DIY_PRICING.map((tier, i) => (
                    <div key={tier.size}
                      className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
                      style={{
                        background: i === 0
                          ? "linear-gradient(145deg, rgba(201,165,80,0.2), rgba(201,165,80,0.08))"
                          : "rgba(255,255,255,0.06)",
                        border: i === 0 ? "1px solid rgba(201,165,80,0.35)" : "1px solid rgba(255,255,255,0.08)",
                        boxShadow: i === 0 ? "0 4px 24px rgba(201,165,80,0.2)" : "none"
                      }}>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C9A550]">{tier.size}</span>
                      <div className="mt-2 text-5xl font-extrabold text-white"
                        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                        ${tier.price}
                      </div>
                      <div className="mt-1 text-xs text-white/40">{tier.weight}</div>
                      <div className="mt-4 text-xs text-white/50 leading-relaxed">{tier.examples}</div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-white/35">
                  All washes include premium shampoo, conditioner & dryer use.
                </p>
              </div>
            )}

            {/* Full Service Pricing */}
            {pricingTab === "full" && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {FULL_SERVICE_PRICING.map((tier, i) => (
                    <div key={tier.size}
                      className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
                      style={{
                        background: i === 0
                          ? "linear-gradient(145deg, rgba(201,165,80,0.2), rgba(201,165,80,0.08))"
                          : "rgba(255,255,255,0.06)",
                        border: i === 0 ? "1px solid rgba(201,165,80,0.35)" : "1px solid rgba(255,255,255,0.08)",
                        boxShadow: i === 0 ? "0 4px 24px rgba(201,165,80,0.2)" : "none"
                      }}>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C9A550]">{tier.size}</span>
                      <div className="mt-2 text-5xl font-extrabold text-white"
                        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                        ${tier.price}
                      </div>
                      <div className="mt-4 text-xs text-white/50 leading-relaxed">{tier.examples}</div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-white/35">
                  Includes: bath, blow dry, brush out, ears clean, nails cut & conditioner.
                </p>
                {GROOMING_EXTRA_CHARGES.length > 0 && (
                  <div className="max-w-lg mx-auto rounded-2xl p-5 space-y-3"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3">Additional Charges</p>
                    {GROOMING_EXTRA_CHARGES.map((charge) => (
                      <div key={charge.name} className="flex justify-between items-start gap-4">
                        <div>
                          <span className="text-sm font-semibold text-white/70">{charge.name}</span>
                          <span className="block text-xs text-white/30">{charge.note}</span>
                        </div>
                        <span className="text-sm font-bold text-[#C9A550] shrink-0">{charge.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Add-ons */}
            <div className="mt-12 pt-10 border-t border-white/10">
              <h3 className="text-center text-base font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                Available Add-Ons
              </h3>
              <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-3">
                {ADD_ONS.map((addon) => (
                  <div key={addon.name}
                    className="flex items-center justify-between px-5 py-3.5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div>
                      <span className="text-sm font-semibold text-white/80">{addon.name}</span>
                      {addon.note && <span className="block text-xs text-white/30 mt-0.5">{addon.note}</span>}
                    </div>
                    <span className="text-sm font-bold text-[#C9A550]">+${addon.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/booking" className="btn-primary text-base px-10 py-4">
                Book Your Bay
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ GUARANTEES ════════════════════════════════════════ */}
        <section className="py-24 sm:py-32"
          style={{ background: "linear-gradient(180deg, #FBF8F2 0%, #FFFFFF 100%)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A550]">Our Promise</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0B1F3A]"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                What you can always count on
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  num: "01", tag: "Zero hidden fees",
                  title: "Everything's Included",
                  body: "Every DIY wash includes premium shampoo, conditioner, towels, ear cleaner, and dryer use. One flat price — no surprises.",
                  color: "#C9A550", lightBg: "#FBF5E6",
                },
                {
                  num: "02", tag: "Always fresh",
                  title: "Clean Space, Every Visit",
                  body: "Each bay is sanitized between every use. You'll never walk into a dirty tub or share tools that haven't been cleaned.",
                  color: "#B8913E", lightBg: "#FBF5E6",
                },
                {
                  num: "03", tag: "100% satisfaction",
                  title: "Your Dog Leaves Happy",
                  body: "Clean, dry, and smelling great — or we make it right. That's the Fur Seasons standard.",
                  color: "#C9A550", lightBg: "#FBF5E6",
                },
              ].map((g) => (
                <div key={g.num} className="card p-8 group">
                  <span className="text-6xl font-extrabold block leading-none mb-5 select-none"
                    style={{
                      fontFamily: "var(--font-jakarta), sans-serif",
                      background: `linear-gradient(135deg, ${g.color}25, ${g.color}08)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    {g.num}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#0B1F3A] mb-3"
                    style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                    {g.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{g.body}</p>
                  <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: g.lightBg, color: g.color }}>
                    {g.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TESTIMONIALS ══════════════════════════════════════ */}
        <section className="py-24 sm:py-32"
          style={{ background: "linear-gradient(160deg, #0B1F3A 0%, #071828 100%)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A550]">Reviews</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                Dog parents love it here
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: i % 2 === 0
                      ? "rgba(201,165,80,0.08)"
                      : "rgba(255,255,255,0.05)",
                    border: i % 2 === 0
                      ? "1px solid rgba(201,165,80,0.2)"
                      : "1px solid rgba(255,255,255,0.08)",
                  }}>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => <IconStar key={j} />)}
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed italic mb-5">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══════════════════════════════════════════════ */}
        <section id="faq" className="bg-white py-24 sm:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A550]">FAQ</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0B1F3A]"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                Got questions?
              </h2>
              <p className="mt-3 text-gray-400 text-sm">We&apos;ve got answers.</p>
            </div>
            <div className="space-y-3">
              {FAQ.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOURS + CONTACT ═══════════════════════════════════ */}
        <section id="contact" className="py-24 sm:py-32"
          style={{ background: "linear-gradient(180deg, #FBF8F2 0%, #FBF8F2 100%)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A550]">Visit Us</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0B1F3A]"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                Come see us in Cedar Hill
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-5">
                {/* Hours */}
                <div className="card p-7">
                  <h3 className="text-base font-extrabold text-[#0B1F3A] mb-5"
                    style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                    Business Hours
                  </h3>
                  <dl className="space-y-3">
                    {(["monday","tuesday","wednesday","thursday","friday","saturday","sunday"] as const).map((day) => (
                      <div key={day} className="flex justify-between items-center text-sm">
                        <dt className="capitalize font-medium text-gray-500">{day}</dt>
                        <dd className={`font-semibold ${BUSINESS.hours[day] === "Closed" ? "text-gray-300" : "text-[#0B1F3A]"}`}>
                          {BUSINESS.hours[day]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Contact */}
                <div className="card p-7 space-y-4">
                  <h3 className="text-base font-extrabold text-[#0B1F3A]"
                    style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
                    Get in Touch
                  </h3>
                  {[
                    {
                      href: `tel:${BUSINESS.phoneRaw}`,
                      text: BUSINESS.phone,
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
                    },
                    {
                      href: `mailto:${BUSINESS.email}`,
                      text: BUSINESS.email,
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
                    },
                    {
                      href: BUSINESS.googleMapsUrl, text: BUSINESS.address, target: "_blank",
                      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
                    },
                  ].map(({ href, text, icon, target }) => (
                    <a key={href} href={href} target={target} rel={target ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-3 text-sm text-gray-500 hover:text-[#C9A550] transition-colors cursor-pointer">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, #FBF5E6, #EDD98A)" }}>
                        <svg className="w-4 h-4 text-[#C9A550]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          {icon}
                        </svg>
                      </div>
                      {text}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="card overflow-hidden rounded-2xl min-h-[420px]">
                <iframe
                  title="Fur Seasons Dog Wash location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.0!2d-96.9550!3d32.5890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s444+FM+1382+STE+B+Cedar+Hill+TX+75104!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%" height="100%"
                  style={{ border: 0, minHeight: "420px" }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/booking" className="btn-primary text-base px-10 py-4">
                Reserve Your Bay
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
