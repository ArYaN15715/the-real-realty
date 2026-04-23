import { FEATURED_PROPERTIES } from "../constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function OpportunitiesSection() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="opportunities"
      data-ocid="opportunities.section"
      className="py-20 lg:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-14">
          <p
            className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "oklch(var(--accent))" }}
          >
            Curated Selection
          </p>
          <h2 className="font-display text-3xl lg:text-4xl italic font-bold text-foreground mb-4">
            Featured Opportunities
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            A hand-picked selection of premium properties in South Bopal and the
            Ambli–Bopal corridor. Quality over quantity — always.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {FEATURED_PROPERTIES.map((property, index) => (
            <div
              key={property.title}
              data-ocid={`opportunities.item.${index + 1}`}
              className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-accent/40 transition-smooth hover:shadow-lg scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/assets/images/placeholder.svg";
                  }}
                />
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded text-xs font-body font-semibold"
                  style={{
                    background: "oklch(var(--accent))",
                    color: "oklch(var(--foreground))",
                  }}
                >
                  {property.type}
                </div>
              </div>
              <div className="p-5">
                <div
                  className="h-0.5 w-8 rounded-full mb-3"
                  style={{ background: "oklch(var(--accent))" }}
                  aria-hidden="true"
                />
                <h3 className="font-display text-lg italic font-bold text-foreground mb-1">
                  {property.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-3">
                  {property.location}
                </p>
                <p
                  className="font-body text-sm font-semibold"
                  style={{ color: "oklch(var(--primary))" }}
                >
                  {property.priceRange}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            type="button"
            onClick={scrollToContact}
            data-ocid="opportunities.enquire_button"
            className="inline-flex items-center px-8 py-3 rounded font-body font-semibold text-sm border-2 transition-smooth hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              borderColor: "oklch(var(--primary))",
              color: "oklch(var(--primary))",
            }}
          >
            Enquire About More Listings
          </button>
        </div>
      </div>
    </section>
  );
}
