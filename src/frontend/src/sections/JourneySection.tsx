import { JOURNEY_STEPS } from "../constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function JourneySection() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="journey"
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
          <h2 className="font-display text-3xl lg:text-4xl italic font-bold text-foreground mb-3">
            The Client Journey
          </h2>
          {/* Gold accent underline */}
          <div
            className="mx-auto h-0.5 w-14 rounded-full mb-4"
            style={{ background: "oklch(var(--accent))" }}
            aria-hidden="true"
          />
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
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display text-lg italic font-bold z-10 border-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "#C9A14A",
                    borderColor: "#C9A14A",
                    color: "#0F3D2E",
                  }}
                >
                  {step.step}
                </div>
                <div className="flex-1 bg-card rounded-xl p-6 border border-border/40 transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:shadow-xl group-hover:-translate-y-0.5">
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
            className="inline-flex items-center px-8 py-3.5 rounded font-body font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2"
            style={{
              background: "#0F3D2E",
              color: "#FFFFFF",
            }}
          >
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
