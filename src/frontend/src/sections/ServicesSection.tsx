import { SERVICE_CARDS } from "../constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function ServicesSection() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="services"
      data-ocid="services.section"
      className="py-20 lg:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-14">
          <p
            className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "oklch(var(--accent))" }}
          >
            What We Do
          </p>
          <h2 className="font-display text-3xl lg:text-4xl italic font-bold text-foreground mb-4">
            Our Advisory Services
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Comprehensive real estate consulting tailored to your goals. We work
            exclusively in your interest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {SERVICE_CARDS.map((service, index) => (
            <div
              key={service.title}
              data-ocid={`services.item.${index + 1}`}
              className="group bg-card rounded-xl p-6 border border-border/50 hover:border-accent/40 transition-smooth hover:shadow-md scroll-reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className="text-3xl mb-4 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ background: "oklch(var(--primary) / 0.08)" }}
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3 className="font-display text-lg italic font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-10 transition-all duration-500 rounded-full"
                style={{ background: "oklch(var(--accent))" }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
