import type {
  FAQItem,
  JourneyStep,
  NavItem,
  PropertyListing,
  ServiceCard,
  StatBadge,
  Testimonial,
} from "./types";

export const COMPANY_NAME = "The Real Realty";
export const COMPANY_TAGLINE = "Premium Real Estate Consulting, South Bopal";
export const WHATSAPP_NUMBER = "+919876543210";
export const PHONE_NUMBER = "+919876543210";
export const EMAIL = "consult@therealrealty.in";
export const ADDRESS = "South Bopal, Ahmedabad, Gujarat 380058";
export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1!2d72.46!3d23.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzI0LjAiTiA3MsKwMjcnMzYuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const STAT_BADGES: StatBadge[] = [
  { value: "5.0★", label: "Trusted Advisory" },
  { value: "41+", label: "Happy Clients" },
  { value: "10+", label: "End-to-End Support" },
];

export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: "🏠",
    title: "Property Consulting",
    description:
      "Expert property evaluation, site assessment, and strategic advisory to help you make informed decisions with complete confidence.",
  },
  {
    icon: "📈",
    title: "Investment Advisory",
    description:
      "Data-driven investment strategies tailored to premium Ahmedabad micro-markets, delivering long-term wealth creation for discerning investors.",
  },
  {
    icon: "🏡",
    title: "Residential Buying Assistance",
    description:
      "End-to-end guidance from property shortlisting to registration — we simplify the entire buying journey so you can focus on what matters.",
  },
  {
    icon: "🗝️",
    title: "Property Management",
    description:
      "Premium property management services that protect your asset value, maximize rental yields, and ensure complete peace of mind.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The Real Realty transformed our property search completely. Their consulting approach helped us evaluate three South Bopal properties with clarity and confidence — we never felt rushed. Truly a premium advisory experience.",
    name: "Kartik Joshi",
    role: "Home Buyer, South Bopal",
    avatarInitials: "KJ",
  },
  {
    quote:
      "We approached them for investment advisory and came away with a structured, data-backed strategy. Their knowledge of the Ahmedabad residential market and upcoming premium zones is unmatched. Highly professional consultants.",
    name: "Dhvani Brahmbhatt",
    role: "Real Estate Investor",
    avatarInitials: "DB",
  },
  {
    quote:
      "The Real Realty is our go-to advisor for all property decisions. From due diligence to negotiation support and property management — they handled everything with extraordinary competence and integrity.",
    name: "Mukesh Rajdev",
    role: "Portfolio Investor, Ahmedabad",
    avatarInitials: "MR",
  },
];

export const FEATURED_PROPERTIES: PropertyListing[] = [
  {
    title: "Prestige Garden Residences",
    location: "South Bopal, Ahmedabad",
    type: "3 & 4 BHK Apartments",
    priceRange: "₹1.2Cr – ₹1.8Cr",
    imageUrl: "/assets/generated/property-1.dim_800x500.jpg",
  },
  {
    title: "The Greens Premium Villas",
    location: "Ambli–Bopal Corridor",
    type: "Independent Villas",
    priceRange: "₹2.5Cr – ₹4.2Cr",
    imageUrl: "/assets/generated/property-2.dim_800x500.jpg",
  },
  {
    title: "Emerald Heights",
    location: "South Bopal, Ahmedabad",
    type: "2 & 3 BHK Premium Flats",
    priceRange: "₹85L – ₹1.15Cr",
    imageUrl: "/assets/generated/property-3.dim_800x500.jpg",
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: "Discovery Consultation",
    description:
      "A confidential 30-minute session to understand your goals, budget, and lifestyle requirements — no pressure, no sales pitch.",
  },
  {
    step: 2,
    title: "Curated Property Shortlist",
    description:
      "We handpick 3–5 properties matching your exact criteria, saving you weeks of unproductive search and site visits.",
  },
  {
    step: 3,
    title: "Expert Site Evaluation",
    description:
      "Our team accompanies you for detailed site visits, offering honest assessments on construction quality, locality, and value.",
  },
  {
    step: 4,
    title: "Negotiation & Documentation",
    description:
      "We negotiate the best terms on your behalf and oversee all legal documentation, ensuring a transparent and secure transaction.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question:
      "What makes The Real Realty different from other property brokers?",
    answer:
      "We operate as consultants, not brokers. Our revenue model is advisory-based, so our recommendations are always in your interest — not driven by commission from developers. We invest time to understand your unique requirements before suggesting any property.",
  },
  {
    question: "Which areas in Ahmedabad do you specialize in?",
    answer:
      "We specialize in premium residential zones including South Bopal, Ambli, Bopal, Shela, and the emerging West Ahmedabad corridor. These are high-appreciation micro-markets with strong infrastructure development.",
  },
  {
    question: "Do you assist NRI clients buying property in Ahmedabad?",
    answer:
      "Absolutely. We have dedicated NRI advisory services including remote consultation, legal compliance guidance under FEMA regulations, power of attorney assistance, and complete transaction management on your behalf.",
  },
  {
    question: "How do I begin the consulting process?",
    answer:
      "Simply fill in the consultation form below or WhatsApp us directly. We schedule a private discovery call within 24 hours and take it from there — entirely at your pace.",
  },
  {
    question: "What is your fee structure for consulting?",
    answer:
      "Our initial consultation is complimentary. For comprehensive advisory engagements, we offer transparent, pre-agreed fee structures that are entirely separate from any developer relationship. Contact us for details.",
  },
];
