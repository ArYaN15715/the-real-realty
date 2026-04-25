import { useScrollReveal } from "../hooks/useScrollReveal";

const WHY_ITEMS = [
  {
    icon: "🛡️",
    title: "100% Client-Side",
    description:
      "We are on your side exclusively. No dual agency, no developer kickbacks. Our loyalty and advice belong entirely to you.",
  },
  {
    icon: "🔍",
    title: "Deep Due Diligence",
    description:
      "We scrutinize RERA filings, builder reputation, construction quality, and legal title before recommending any property.",
  },
  {
    icon: "📊",
    title: "Market Intelligence",
    description:
      "Granular data on price trends, upcoming infrastructure, and micro-market opportunities that most buyers never access.",
  },
  {
    icon: "🤝",
    title: "Long-Term Relationship",
    description:
      "Our relationship doesn't end at registration. We remain available for portfolio reviews, resale advisory, and rental guidance.",
  },
  {
    icon: "⚖️",
    title: "Transparent Fees",
    description:
      "Our fee structure is disclosed upfront and agreed before engagement begins. No hidden charges, no surprises.",
  },
  {
    icon: "📍",
    title: "Local Specialist",
    description:
      "South Bopal and West Ahmedabad expertise built over a decade of transactions, relationships, and on-ground presence.",
  },
];

export function WhyChooseUsSection() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="why-us"
      data-ocid="why_us.section"
      className="py-20 lg:py-28"
      style={{ background: "oklch(var(--muted))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-14">
          <p
            className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "oklch(var(--accent))" }}
          >
            Why The Real Realty
          </p>
          <h2 className="font-display text-3xl lg:text-4xl italic font-bold text-foreground mb-3">
            The Advisory Difference
          </h2>
          {/* Gold accent underline */}
          <div
            className="mx-auto h-0.5 w-14 rounded-full mb-4"
            style={{ background: "oklch(var(--accent))" }}
            aria-hidden="true"
          />
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            In a crowded broker market, we stand apart through radical
            transparency, deep expertise, and an unwavering client-first ethos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ITEMS.map((item, index) => (
            <div
              key={item.title}
              data-ocid={`why_us.item.${index + 1}`}
              className="scroll-reveal bg-card rounded-xl p-6 border border-border/40 transition-all duration-300 hover:border-[#C9A14A]/50 hover:shadow-xl hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl mb-3" aria-hidden="true">
                {item.icon}
              </div>
              <h3
                className="font-body font-semibold text-base mb-2"
                style={{ color: "oklch(var(--accent))" }}
              >
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
