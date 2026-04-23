import { useScrollReveal } from "../hooks/useScrollReveal";

export function MapSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section data-ocid="map.section" className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-10">
          <p
            className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "oklch(var(--accent))" }}
          >
            Find Us
          </p>
          <h2 className="font-display text-3xl italic font-bold text-foreground mb-3">
            Located in South Bopal
          </h2>
          <p className="font-body text-muted-foreground text-base">
            South Bopal, Ahmedabad, Gujarat 380058 — Serving Ahmedabad's premium
            residential zones
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border/40 shadow-sm aspect-[16/7] min-h-[300px]">
          <iframe
            title="The Real Realty location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14885.94!2d72.4534!3d23.0406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4a3c9e6b7b%3A0x1234567890abcdef!2sSouth+Bopal%2C+Ahmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2 font-body text-muted-foreground">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 shrink-0"
              style={{ color: "oklch(var(--primary))" }}
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>South Bopal, Ahmedabad, Gujarat 380058</span>
          </div>
          <div className="flex items-center gap-2 font-body text-muted-foreground">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 shrink-0"
              style={{ color: "oklch(var(--primary))" }}
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <a
              href="tel:+919876543210"
              className="hover:text-foreground transition-smooth"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
