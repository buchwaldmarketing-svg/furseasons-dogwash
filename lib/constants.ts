export const BUSINESS = {
  name: "Fur Seasons Dog Wash",
  tagline: "Clean space. Simple pricing. Luxury feel.",
  phone: "(469) 272-0101",
  phoneRaw: "4692720101",
  email: "info@furseasonsdogwash.com",
  address: "444 FM 1382 STE B, Cedar Hill, TX 75104",
  addressShort: "Cedar Hill, TX",
  instagram: "https://instagram.com/thefurseasons.dogwash",
  instagramHandle: "@thefurseasons.dogwash",
  googleMapsUrl: "https://www.google.com/maps/search/444+FM+1382+STE+B+Cedar+Hill+TX+75104",
  bayCount: 4,
  slotDuration: 30,
  hours: {
    monday: "Closed",
    tuesday: "10:00 AM – 7:00 PM",
    wednesday: "10:00 AM – 7:00 PM",
    thursday: "10:00 AM – 7:00 PM",
    friday: "10:00 AM – 7:00 PM",
    saturday: "10:00 AM – 8:00 PM",
    sunday: "11:00 AM – 5:00 PM",
  },
}

export const DIY_PRICING = [
  { size: "Small",       weight: "Up to 25 lb",  price: 15, examples: "Chihuahua, Yorkie, Dachshund" },
  { size: "Medium",      weight: "26 – 40 lb",   price: 20, examples: "Beagle, Corgi, Shih Tzu" },
  { size: "Large",       weight: "41 – 80 lb",   price: 25, examples: "Lab, Husky, Golden Retriever" },
  { size: "Extra Large", weight: "81 – 100+ lb", price: 30, examples: "Great Pyrenees, Saint Bernard" },
]

export const FULL_SERVICE_PRICING = [
  { size: "Small",       price: 40, examples: "Chihuahua, Frenchies, Dachshund" },
  { size: "Medium",      price: 45, examples: "Boxers, Dalmatian, Bulldogs" },
  { size: "Large",       price: 60, examples: "St Poodles, Labs Mix, Golden Mix" },
  { size: "Extra Large", price: 65, examples: "Great Pyrenees, Labradoodle, Saint Bernard" },
]

export const FULL_SERVICE_INCLUDES = [
  "Bath",
  "Blow dry",
  "Brush out",
  "Ears clean",
  "Nails cut",
  "Conditioner",
]

export const ADD_ONS = [
  { name: "Nail Clipping",      price: 5,  note: "" },
  { name: "Nail Grinding",      price: 10, note: "" },
  { name: "Shedding Brush",     price: 5,  note: "" },
  { name: "Flea Comb",          price: 2,  note: "" },
  { name: "Specialty Shampoos", price: 5,  note: "Flea & Tick, Odor Eliminator, Anti Shed, Whitening" },
]

export const DIY_INCLUDES = [
  "Premium shampoo & conditioner",
  "High-velocity dryer",
  "Raised tub with warm water",
  "Towels & grooming tools",
  "Ear cleaner",
]

export const GROOMING_EXTRA_CHARGES = [
  { name: "Matted Hair",      price: "$10 – $60", note: "Final price by size, length & coat condition" },
  { name: "Late Pick-Up Fee", price: "$10 – $35", note: "If pup is not picked up within 30 min of call" },
]

export const HOUSE_RULES = [
  "All pets must be on a leash.",
  "Do not leave pets unattended in tubs.",
  "Children under 16 must be accompanied by an adult.",
  "Check water temperature before use.",
  "Keep dryers away from eyes, ears, and nose.",
  "Use caution — floors may be wet.",
]

export const FAQ = [
  {
    question: "Do I need to bring anything?",
    answer: "Nope. We provide everything — premium shampoo, conditioner, towels, high-velocity dryers, and ear cleaner. Just bring your dog.",
  },
  {
    question: "Can I walk in or do I need a reservation?",
    answer: "Both. Walk-ins are welcome on a first-come, first-served basis. Reserve online to guarantee your spot and skip any wait.",
  },
  {
    question: "What's included in the DIY wash price?",
    answer: "Every DIY wash includes premium shampoo, conditioner, towels, dryer use, and ear cleaner. One flat price by size — no hidden fees.",
  },
  {
    question: "What does Full Service Bath include?",
    answer: "Full Service covers bath, blow dry, brush out, ears clean, nails cut, and conditioner. Drop off your pup and we handle everything.",
  },
  {
    question: "Do you take walk-ins for Full Service?",
    answer: "Yes, but availability varies. Call ahead to check timing or book online to lock in your appointment.",
  },
  {
    question: "What if my dog is anxious or reactive?",
    answer: "For the DIY bays, you're always with your pup. For Full Service, give us a heads up when you book and we'll plan accordingly.",
  },
  {
    question: "Is there an extra charge for matted coats?",
    answer: "Yes — matted hair runs $10–$60 depending on size, length, and coat condition. We'll always let you know before we start.",
  },
]

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    text: "So much easier than bathing my dog at home. Clean space, warm water, zero mess on my end. We come every month.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    text: "My German Shepherd loves it here. Plenty of room, staff is super friendly. Best dog wash in Cedar Hill by far.",
    rating: 5,
  },
  {
    name: "Jessica R.",
    text: "Did the full service for my goldendoodle and she came out looking like she just left a spa. Worth every penny.",
    rating: 5,
  },
  {
    name: "Anthony G.",
    text: "Love that I can just walk in and get my pup clean without destroying my bathroom. The add-ons are a great touch.",
    rating: 5,
  },
]
