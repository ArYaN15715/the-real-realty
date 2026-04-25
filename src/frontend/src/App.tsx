import { useEffect } from "react";
import { Layout } from "./Layout";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { FAQSection } from "./sections/FAQSection";
import { HeroSection } from "./sections/HeroSection";
import { InvestmentInsightsSection } from "./sections/InvestmentInsightsSection";
import { JourneySection } from "./sections/JourneySection";
import { MapSection } from "./sections/MapSection";
import { OpportunitiesSection } from "./sections/OpportunitiesSection";
import { PropertyListingsSection } from "./sections/PropertyListingsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

// Global scroll-reveal observer for .scroll-reveal class elements
function useGlobalScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
    );

    const observe = () => {
      const elements = document.querySelectorAll(".scroll-reveal");
      for (const el of elements) {
        if (prefersReducedMotion) {
          el.classList.add("scroll-reveal-visible");
        } else {
          observer.observe(el);
        }
      }
    };

    observe();

    // Also observe after a short delay to catch dynamically rendered elements
    const timer = setTimeout(observe, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
}

export default function App() {
  useGlobalScrollReveal();

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <OpportunitiesSection />
      <PropertyListingsSection />
      <WhyChooseUsSection />
      <InvestmentInsightsSection />
      <JourneySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <MapSection />
    </Layout>
  );
}
