import type { Metadata } from "next"
import { BookingForm } from "@/components/BookingForm"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Reserve a Bay | Fur Seasons Dog Wash",
  description: "Book your 30-minute self-serve dog wash bay online. 4 bays available. Cedar Hill, TX.",
}

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-3">Reserve a Bay</h1>
            <p className="text-gray-600 max-w-xl mx-auto">Pick your bay, choose your date and time, and you&apos;re all set. Each slot is 30 minutes. Need more time? Book back-to-back.</p>
          </div>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
