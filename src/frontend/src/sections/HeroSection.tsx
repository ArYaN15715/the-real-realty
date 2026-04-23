import { COMPANY_NAME, STAT_BADGES, WHATSAPP_NUMBER } from "../constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function HeroSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const subtitleRef = useScrollReveal<HTMLParagraphElement>();

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const waMessage = encodeURIComponent(
    `Hello! I'd like to book a consultation with ${COMPANY_NAME}.`,
  );
  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${waMessage}`;

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture"
      style={{ background: "oklch(var(--primary))" }}
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, oklch(0.35 0.12 160), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p
              className="font-body text-xs uppercase tracking-widest mb-5 font-medium"
              style={{ color: "oklch(var(--accent))" }}
            >
              South Bopal · Ahmedabad · Gujarat
            </p>

            <h1
              ref={titleRef}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold italic leading-tight text-primary-foreground mb-6"
            >
              Consulting-First
              <br />
              <span style={{ color: "oklch(var(--accent))" }}>
                Real Estate,
              </span>
              <br />
              Ahmedabad
            </h1>

            <p
              ref={subtitleRef}
              className="font-body text-base lg:text-lg text-primary-foreground/75 leading-relaxed mb-8 max-w-lg"
            >
              A premium advisory firm for serious buyers and investors in South
              Bopal. We guide, not push. Expert counsel that puts your interests
              first — always.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={scrollToContact}
                data-ocid="hero.book_consultation_button"
                className="inline-flex items-center px-6 py-3 rounded font-body font-semibold text-sm transition-smooth hover:opacity-90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  background: "oklch(var(--accent))",
                  color: "oklch(var(--foreground))",
                }}
              >
                Book a Consultation
              </button>
              <button
                type="button"
                onClick={scrollToServices}
                data-ocid="hero.explore_button"
                className="inline-flex items-center px-6 py-3 rounded font-body font-semibold text-sm border transition-smooth hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  borderColor: "oklch(var(--primary-foreground) / 0.3)",
                  color: "oklch(var(--primary-foreground))",
                }}
              >
                Explore Opportunities
              </button>
            </div>
          </div>

          {/* Right: Stat badges */}
          <div className="flex flex-col gap-4 lg:pl-8">
            {STAT_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-5 rounded-xl px-6 py-5 border transition-smooth hover:border-accent/40"
                style={{
                  background: "oklch(var(--primary-foreground) / 0.06)",
                  borderColor: "oklch(var(--primary-foreground) / 0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="font-display text-3xl font-bold italic"
                  style={{ color: "oklch(var(--accent))" }}
                >
                  {badge.value}
                </div>
                <div className="font-body text-sm text-primary-foreground/80 font-medium">
                  {badge.label}
                </div>
              </div>
            ))}

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.whatsapp_cta"
              className="flex items-center gap-3 mt-2 px-5 py-3 rounded-xl font-body text-sm font-medium transition-smooth hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent bg-[#25D366] text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 shrink-0"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Message us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-10 lg:h-14 fill-background"
          role="img"
          aria-label="Decorative wave"
        >
          <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
