"use client"

import { useState, useMemo } from "react"
import { DIY_PRICING as PRICING, ADD_ONS, BUSINESS } from "@/lib/constants"

const BAYS = [
  { id: 1, name: "Bay 1", description: "Small/Medium dogs" },
  { id: 2, name: "Bay 2", description: "All sizes" },
  { id: 3, name: "Bay 3", description: "All sizes" },
  { id: 4, name: "Bay 4", description: "Large/XL dogs — extra-deep tub" },
]

const STEPS = [
  "Bay",
  "Date",
  "Time",
  "Size",
  "Add-Ons",
  "Info",
  "Done",
]

function simpleHash(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}

function isSlotBooked(date: string, bayId: number, slotIndex: number): boolean {
  const hash = simpleHash(`${date}-${bayId}-${slotIndex}`)
  return hash % 100 < 30
}

function getDayOfWeek(dateStr: string): number {
  const [year, month, day] = dateStr.split("-").map(Number)
  return new Date(year, month - 1, day).getDay()
}

function generateTimeSlots(dateStr: string): string[] {
  if (!dateStr) return []
  const day = getDayOfWeek(dateStr)
  let startHour: number, startMin: number, endHour: number, endMin: number

  if (day === 0) {
    startHour = 10; startMin = 0; endHour = 16; endMin = 30
  } else if (day === 6) {
    startHour = 8; startMin = 0; endHour = 18; endMin = 30
  } else {
    startHour = 9; startMin = 0; endHour = 17; endMin = 30
  }

  const slots: string[] = []
  let h = startHour, m = startMin

  while (h < endHour || (h === endHour && m <= endMin)) {
    const period = h >= 12 ? "PM" : "AM"
    const displayH = h > 12 ? h - 12 : h === 0 ? 12 : h
    const displayM = m.toString().padStart(2, "0")
    slots.push(`${displayH}:${displayM} ${period}`)
    m += 30
    if (m >= 60) { m = 0; h += 1 }
  }
  return slots
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

function getDateLimits() {
  const today = new Date()
  const min = today.toISOString().split("T")[0]
  const max = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
  return { min, max }
}

/* Bay icons */
const bayIcons = [
  <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c0 0-7.5 8.25-7.5 13.5a7.5 7.5 0 0015 0C19.5 10.5 12 2.25 12 2.25z" /></svg>,
  <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  <svg key="4" className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /></svg>,
]

export function BookingForm() {
  const [step, setStep] = useState(0)
  const [selectedBay, setSelectedBay] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([])
  const [contact, setContact] = useState({ name: "", phone: "", email: "" })

  const { min: minDate, max: maxDate } = getDateLimits()
  const timeSlots = useMemo(() => generateTimeSlots(selectedDate), [selectedDate])

  const basePrice = selectedSize !== null ? PRICING[selectedSize].price : 0
  const addOnsTotal = selectedAddOns.reduce((sum, idx) => sum + ADD_ONS[idx].price, 0)
  const total = basePrice + addOnsTotal

  const canProceed = (): boolean => {
    switch (step) {
      case 0: return selectedBay !== null
      case 1: return selectedDate !== ""
      case 2: return selectedTime !== ""
      case 3: return selectedSize !== null
      case 4: return true
      case 5: return contact.name.trim() !== "" && contact.phone.trim() !== "" && contact.email.trim() !== ""
      default: return false
    }
  }

  const handleNext = () => {
    if (canProceed() && step < STEPS.length - 1) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const toggleAddOn = (idx: number) => {
    setSelectedAddOns((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    )
  }

  const selectedBayData = selectedBay !== null ? BAYS.find((b) => b.id === selectedBay) : null
  const selectedSizeData = selectedSize !== null ? PRICING[selectedSize] : null

  return (
    <div>
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-10">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center text-sm font-bold font-[family-name:var(--font-fredoka)] transition-all duration-200 ${
                  i < step
                    ? "bg-green text-white shadow-[3px_3px_6px_rgba(76,175,80,0.3)]"
                    : i === step
                      ? "bg-orange text-white shadow-[3px_3px_6px_rgba(212,148,58,0.3)]"
                      : "bg-white text-gray-400 shadow-[var(--shadow-clay-sm)]"
                }`}
                style={{ border: "2px solid rgba(0,0,0,0.04)" }}
              >
                {i < step ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className="text-[10px] sm:text-xs text-gray-500 mt-1.5 hidden sm:block font-medium">
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`w-4 sm:w-6 h-1 rounded-full transition-colors duration-200 ${
                  i < step ? "bg-green" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="clay-card-flat p-6 sm:p-8">
        {/* Step 1: Select bay */}
        {step === 0 && (
          <div>
            <h2 className="text-xl font-bold font-[family-name:var(--font-fredoka)] text-navy mb-1">Which bay?</h2>
            <p className="text-gray-500 text-sm mb-6">We have {BUSINESS.bayCount} bays. Pick the one that fits your pup.</p>
            <div className="grid grid-cols-2 gap-4">
              {BAYS.map((bay, idx) => (
                <button
                  key={bay.id}
                  type="button"
                  onClick={() => setSelectedBay(bay.id)}
                  className={`p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                    selectedBay === bay.id
                      ? "bg-orange-light shadow-[var(--shadow-clay-orange)]"
                      : "bg-white shadow-[var(--shadow-clay-sm)] hover:shadow-[var(--shadow-clay)]"
                  }`}
                  style={{ border: selectedBay === bay.id ? "3px solid #D4943A" : "3px solid rgba(0,0,0,0.04)" }}
                >
                  <div className={`mb-3 ${selectedBay === bay.id ? "text-orange" : "text-blue-bubble"}`}>
                    {bayIcons[idx]}
                  </div>
                  <div className="font-bold font-[family-name:var(--font-fredoka)] text-navy">{bay.name}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{bay.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Select date */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold font-[family-name:var(--font-fredoka)] text-navy mb-1">Pick a date</h2>
            <p className="text-gray-500 text-sm mb-6">Choose any day within the next 30 days.</p>
            <input
              type="date"
              value={selectedDate}
              min={minDate}
              max={maxDate}
              onChange={(e) => { setSelectedDate(e.target.value); setSelectedTime("") }}
              className="w-full sm:w-auto px-5 py-3.5 bg-white text-gray-800 text-base font-medium rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange"
              style={{ border: "3px solid rgba(0,0,0,0.06)", boxShadow: "var(--shadow-clay-sm)" }}
            />
            {selectedDate && (
              <p className="mt-4 text-sm text-gray-600 font-medium">{formatDate(selectedDate)}</p>
            )}
          </div>
        )}

        {/* Step 3: Select time */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold font-[family-name:var(--font-fredoka)] text-navy mb-1">Pick a time</h2>
            <p className="text-gray-500 text-sm mb-6">
              {selectedBayData?.name} on {formatDate(selectedDate)}. Each slot is 30 min.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {timeSlots.map((slot, idx) => {
                const booked = isSlotBooked(selectedDate, selectedBay!, idx)
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={booked}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-3 px-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      booked
                        ? "bg-gray-100 text-gray-300 cursor-not-allowed line-through"
                        : selectedTime === slot
                          ? "bg-orange text-white shadow-[var(--shadow-clay-orange)] cursor-pointer"
                          : "bg-blue-light text-navy hover:bg-blue-soft cursor-pointer shadow-[var(--shadow-clay-sm)]"
                    }`}
                    style={{ border: selectedTime === slot ? "3px solid rgba(0,0,0,0.06)" : booked ? "none" : "3px solid rgba(0,0,0,0.03)" }}
                  >
                    {slot}
                  </button>
                )
              })}
            </div>
            <div className="flex items-center gap-5 mt-5 text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-lg bg-blue-light inline-block shadow-[var(--shadow-clay-sm)]" style={{ border: "2px solid rgba(0,0,0,0.03)" }} /> Available
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-lg bg-gray-100 inline-block" /> Booked
              </span>
            </div>
          </div>
        )}

        {/* Step 4: Dog size */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold font-[family-name:var(--font-fredoka)] text-navy mb-1">How big is your pup?</h2>
            <p className="text-gray-500 text-sm mb-6">Pricing is based on dog size.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRICING.map((tier, idx) => (
                <button
                  key={tier.size}
                  type="button"
                  onClick={() => setSelectedSize(idx)}
                  className={`p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                    selectedSize === idx
                      ? "bg-orange-light shadow-[var(--shadow-clay-orange)]"
                      : "bg-white shadow-[var(--shadow-clay-sm)] hover:shadow-[var(--shadow-clay)]"
                  }`}
                  style={{ border: selectedSize === idx ? "3px solid #D4943A" : "3px solid rgba(0,0,0,0.04)" }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold font-[family-name:var(--font-fredoka)] text-navy">{tier.size}</div>
                      <div className="text-sm text-gray-500 mt-0.5">{tier.weight}</div>
                      <div className="text-xs text-gray-400 mt-1">{tier.examples}</div>
                    </div>
                    <div className="text-2xl font-bold text-orange font-[family-name:var(--font-fredoka)]">${tier.price}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Add-ons */}
        {step === 4 && (
          <div>
            <h2 className="text-xl font-bold font-[family-name:var(--font-fredoka)] text-navy mb-1">Any extras?</h2>
            <p className="text-gray-500 text-sm mb-6">Totally optional. Skip if you just want the wash.</p>
            <div className="space-y-3">
              {ADD_ONS.map((addon, idx) => (
                <label
                  key={addon.name}
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                    selectedAddOns.includes(idx)
                      ? "bg-orange-light shadow-[var(--shadow-clay-orange)]"
                      : "bg-white shadow-[var(--shadow-clay-sm)] hover:shadow-[var(--shadow-clay)]"
                  }`}
                  style={{ border: selectedAddOns.includes(idx) ? "3px solid #D4943A" : "3px solid rgba(0,0,0,0.04)" }}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(idx)}
                      onChange={() => toggleAddOn(idx)}
                      className="w-5 h-5 accent-orange rounded cursor-pointer"
                    />
                    <span className="font-semibold text-gray-700">{addon.name}</span>
                  </div>
                  <span className="font-bold text-orange font-[family-name:var(--font-fredoka)]">+${addon.price}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Contact info + summary */}
        {step === 5 && (
          <div>
            <h2 className="text-xl font-bold font-[family-name:var(--font-fredoka)] text-navy mb-1">Almost done</h2>
            <p className="text-gray-500 text-sm mb-6">Tell us who you are and review your booking.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full px-5 py-3.5 bg-white text-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange"
                    style={{ border: "3px solid rgba(0,0,0,0.06)", boxShadow: "var(--shadow-clay-sm)" }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    placeholder="(555) 555-5555"
                    className="w-full px-5 py-3.5 bg-white text-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange"
                    style={{ border: "3px solid rgba(0,0,0,0.06)", boxShadow: "var(--shadow-clay-sm)" }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    placeholder="jane@email.com"
                    className="w-full px-5 py-3.5 bg-white text-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange"
                    style={{ border: "3px solid rgba(0,0,0,0.06)", boxShadow: "var(--shadow-clay-sm)" }}
                  />
                </div>
              </div>

              {/* Order summary */}
              <div className="bg-blue-light rounded-2xl p-6" style={{ border: "3px solid rgba(0,0,0,0.03)", boxShadow: "var(--shadow-clay-sm)" }}>
                <h3 className="font-bold font-[family-name:var(--font-fredoka)] text-navy mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Bay</span>
                    <span className="font-semibold text-gray-800">{selectedBayData?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span className="font-semibold text-gray-800">{formatDate(selectedDate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time</span>
                    <span className="font-semibold text-gray-800">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dog Size</span>
                    <span className="font-semibold text-gray-800">{selectedSizeData?.size} ({selectedSizeData?.weight})</span>
                  </div>
                  <hr className="border-gray-300/50" />
                  <div className="flex justify-between">
                    <span className="text-gray-500">Base wash</span>
                    <span className="font-semibold text-gray-800">${basePrice}</span>
                  </div>
                  {selectedAddOns.length > 0 && selectedAddOns.map((idx) => (
                    <div key={ADD_ONS[idx].name} className="flex justify-between">
                      <span className="text-gray-500">{ADD_ONS[idx].name}</span>
                      <span className="font-semibold text-gray-800">+${ADD_ONS[idx].price}</span>
                    </div>
                  ))}
                  <hr className="border-gray-300/50" />
                  <div className="flex justify-between text-base pt-1">
                    <span className="font-bold font-[family-name:var(--font-fredoka)] text-navy">Total</span>
                    <span className="font-bold font-[family-name:var(--font-fredoka)] text-orange text-xl">${total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 7: Confirmation */}
        {step === 6 && (
          <div className="text-center py-8">
            <div className="w-18 h-18 bg-green rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_12px_rgba(76,175,80,0.3)]" style={{ width: 72, height: 72, border: "3px solid rgba(0,0,0,0.04)" }}>
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold font-[family-name:var(--font-fredoka)] text-navy mb-2">Reservation Confirmed!</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              You&apos;re all set. We sent a confirmation to <span className="font-semibold text-gray-700">{contact.email}</span>.
            </p>

            <div className="bg-blue-light rounded-2xl p-6 max-w-sm mx-auto text-left space-y-3 text-sm" style={{ border: "3px solid rgba(0,0,0,0.03)", boxShadow: "var(--shadow-clay-sm)" }}>
              <div className="flex justify-between">
                <span className="text-gray-500">Bay</span>
                <span className="font-semibold text-gray-800">{selectedBayData?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date</span>
                <span className="font-semibold text-gray-800">{formatDate(selectedDate)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Time</span>
                <span className="font-semibold text-gray-800">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Dog Size</span>
                <span className="font-semibold text-gray-800">{selectedSizeData?.size}</span>
              </div>
              {selectedAddOns.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Add-ons</span>
                  <span className="font-semibold text-gray-800 text-right">
                    {selectedAddOns.map((idx) => ADD_ONS[idx].name).join(", ")}
                  </span>
                </div>
              )}
              <hr className="border-gray-300/50" />
              <div className="flex justify-between">
                <span className="font-bold font-[family-name:var(--font-fredoka)] text-navy">Total</span>
                <span className="font-bold font-[family-name:var(--font-fredoka)] text-orange text-xl">${total}</span>
              </div>
            </div>

            <div className="mt-8 space-y-1.5 text-sm text-gray-500">
              <p className="font-medium">{BUSINESS.address}</p>
              <p>{BUSINESS.phone}</p>
            </div>
          </div>
        )}

        {/* Running total */}
        {step >= 3 && step <= 5 && (
          <div className="mt-6 pt-5 border-t-2 border-gray-200/60 flex items-center justify-between">
            <span className="text-sm text-gray-500 font-medium">Running total</span>
            <span className="text-xl font-bold font-[family-name:var(--font-fredoka)] text-orange">${total}</span>
          </div>
        )}

        {/* Navigation */}
        {step < 6 && (
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={handleBack}
              className={`clay-btn bg-white px-6 py-3 font-bold text-navy cursor-pointer ${
                step === 0 ? "invisible" : ""
              }`}
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceed()}
              className={`px-8 py-3 rounded-2xl font-bold transition-all duration-200 ${
                canProceed()
                  ? "clay-btn-orange cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              style={!canProceed() ? { border: "3px solid rgba(0,0,0,0.04)" } : {}}
            >
              {step === 5 ? "Confirm Reservation" : "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
