import { JOURNEY_STEPS } from "../constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function JourneySection() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-ocid="journey.section"
      className="py-20 lg:py-28 bg-background"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-14">
          <p
            className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "oklch(var(--accent))" }}
          >
            Your Path Forward
          </p>
          <h2 className="font-display text-3xl lg:text-4xl italic font-bold text-foreground mb-4">
            The Client Journey
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            A clear, structured consulting process designed to take you from
            initial inquiry to confident ownership — without stress or
            guesswork.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-6 top-8 bottom-8 w-0.5 hidden lg:block"
            style={{ background: "oklch(var(--accent) / 0.2)" }}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {JOURNEY_STEPS.map((step, index) => (
              <div
                key={step.step}
                data-ocid={`journey.step.${index + 1}`}
                className="flex gap-6 group scroll-reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display text-lg italic font-bold z-10 border-2 transition-smooth group-hover:scale-110"
                  style={{
                    background: "oklch(var(--accent))",
                    borderColor: "oklch(var(--accent))",
                    color: "oklch(var(--foreground))",
                  }}
                >
                  {step.step}
                </div>
                <div className="flex-1 bg-card rounded-xl p-6 border border-border/40 transition-smooth group-hover:border-accent/30 group-hover:shadow-sm">
                  <h3 className="font-display text-lg italic font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={scrollToContact}
            data-ocid="journey.start_button"
            className="inline-flex items-center px-8 py-3.5 rounded font-body font-semibold text-sm transition-smooth hover:opacity-90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              background: "oklch(var(--primary))",
              color: "oklch(var(--primary-foreground))",
            }}
          >
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
