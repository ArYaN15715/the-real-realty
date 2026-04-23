import { Layout } from "./Layout";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { FAQSection } from "./sections/FAQSection";
import { HeroSection } from "./sections/HeroSection";
import { InvestmentInsightsSection } from "./sections/InvestmentInsightsSection";
import { JourneySection } from "./sections/JourneySection";
import { MapSection } from "./sections/MapSection";
import { OpportunitiesSection } from "./sections/OpportunitiesSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <OpportunitiesSection />
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
