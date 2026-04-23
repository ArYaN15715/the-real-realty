export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarInitials: string;
}

export interface StatBadge {
  value: string;
  label: string;
}

export interface PropertyListing {
  title: string;
  location: string;
  type: string;
  priceRange: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
}
