import { useScrollReveal } from "../hooks/useScrollReveal";

const PREMIUM_ZONES = [
  {
    name: "South Bopal",
    description:
      "The most sought-after micro-market in West Ahmedabad. Exceptional infrastructure, top schools, and strong capital appreciation.",
  },
  {
    name: "Bopal",
    description:
      "Established residential hub with robust social infrastructure, metro connectivity, and a healthy mix of mid-to-premium inventory.",
  },
  {
    name: "Shela",
    description:
      "Emerging premium township corridor with large-format villa projects and excellent connectivity to SG Highway.",
  },
  {
    name: "Vastrapur",
    description:
      "Prestigious central location near Ahmedabad's business district, preferred by senior executives and NRI investors.",
  },
];

const MARKET_TRENDS = [
  {
    icon: "📈",
    title: "15–20% Appreciation",
    description:
      "West Ahmedabad premium residential zones have consistently delivered 15–20% annual capital appreciation over the last three years.",
  },
  {
    icon: "🚇",
    title: "Metro Connectivity Boost",
    description:
      "Upcoming metro Phase 2 corridors are catalysing a new wave of demand in South Bopal and adjacent zones, driving price discovery upward.",
  },
  {
    icon: "🏗️",
    title: "Premium Supply Constraints",
    description:
      "Limited land parcels and RERA-driven developer consolidation ensure that quality inventory remains scarce — protecting investment value.",
  },
];

export function InvestmentInsightsSection() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      data-ocid="insights.section"
      className="py-20 lg:py-28"
      style={{ background: "oklch(var(--secondary))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <p
            className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "oklch(var(--accent))" }}
          >
            Where Smart Capital Moves
          </p>
          <h2
            className="font-display text-3xl lg:text-4xl italic font-bold mb-4"
            style={{ color: "oklch(var(--primary-foreground))" }}
          >
            Investment Insights
          </h2>
          {/* Gold accent underline */}
          <div
            className="mx-auto h-0.5 w-16 rounded-full"
            style={{ background: "oklch(var(--accent))" }}
            aria-hidden="true"
          />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Premium Zones */}
          <div ref={leftRef} className="scroll-reveal">
            <h3
              className="font-display text-xl italic font-bold mb-6"
              style={{ color: "oklch(var(--accent))" }}
            >
              Premium Zones in Ahmedabad
            </h3>
            <div className="space-y-4">
              {PREMIUM_ZONES.map((zone, index) => (
                <div
                  key={zone.name}
                  data-ocid={`insights.zone.${index + 1}`}
                  className="rounded-xl p-5 border transition-smooth hover:border-accent/40"
                  style={{
                    background: "oklch(var(--primary-foreground) / 0.04)",
                    borderColor: "oklch(var(--primary-foreground) / 0.12)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-1.5 h-5 rounded-full shrink-0"
                      style={{ background: "oklch(var(--accent))" }}
                      aria-hidden="true"
                    />
                    <h4
                      className="font-body font-semibold text-sm"
                      style={{ color: "oklch(var(--primary-foreground))" }}
                    >
                      {zone.name}
                    </h4>
                  </div>
                  <p
                    className="font-body text-sm leading-relaxed pl-4"
                    style={{ color: "oklch(var(--primary-foreground) / 0.65)" }}
                  >
                    {zone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Market Trends */}
          <div ref={rightRef} className="scroll-reveal">
            <h3
              className="font-display text-xl italic font-bold mb-6"
              style={{ color: "oklch(var(--accent))" }}
            >
              Market Trends
            </h3>
            <div className="space-y-5">
              {MARKET_TRENDS.map((trend, index) => (
                <div
                  key={trend.title}
                  data-ocid={`insights.trend.${index + 1}`}
                  className="flex gap-5 rounded-xl p-5 border transition-smooth hover:border-accent/40"
                  style={{
                    background: "oklch(var(--primary-foreground) / 0.04)",
                    borderColor: "oklch(var(--primary-foreground) / 0.12)",
                  }}
                >
                  <div
                    className="text-2xl shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ background: "oklch(var(--accent) / 0.12)" }}
                    aria-hidden="true"
                  >
                    {trend.icon}
                  </div>
                  <div>
                    <h4
                      className="font-body font-semibold text-sm mb-1"
                      style={{ color: "oklch(var(--primary-foreground))" }}
                    >
                      {trend.title}
                    </h4>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{
                        color: "oklch(var(--primary-foreground) / 0.65)",
                      }}
                    >
                      {trend.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
