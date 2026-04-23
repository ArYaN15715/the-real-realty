import { useScrollReveal } from "../hooks/useScrollReveal";

export function AboutSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-20 lg:py-28"
      style={{ background: "oklch(var(--muted))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div ref={ref}>
            <p
              className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
              style={{ color: "oklch(var(--accent))" }}
            >
              Born to Consult
            </p>
            <h2 className="font-display text-3xl lg:text-4xl italic font-bold text-foreground mb-5">
              We Guide. You Decide.
              <br />
              <span style={{ color: "oklch(var(--primary))" }}>
                Always in Your Interest.
              </span>
            </h2>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-5">
              The Real Realty was founded on a simple belief: property advisory
              should serve the client, not the commission. In a market dominated
              by aggressive brokers and misleading listings, we chose a
              different path.
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              Operating exclusively out of South Bopal — one of Ahmedabad's
              fastest-appreciating premium corridors — we bring deep local
              expertise, honest counsel, and a relationship-first approach to
              every engagement. Our clients come back not because they have to,
              but because they trust us.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "10+", label: "Years of expertise" },
                { value: "41+", label: "Satisfied families" },
                { value: "5.0★", label: "Google reviews" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-display text-2xl italic font-bold mb-1"
                    style={{ color: "oklch(var(--primary))" }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual panel */}
          <div className="space-y-4">
            {[
              {
                title: "Honest Advisory",
                desc: "We tell you what you need to hear, not what you want to hear. Our recommendations are based on data, not incentives.",
              },
              {
                title: "Personalized Approach",
                desc: "Every client receives a dedicated advisory path — no templates, no generic shortlists, no wasted site visits.",
              },
              {
                title: "Local Expertise",
                desc: "South Bopal and surrounding premium zones are our home turf. We know every street, project, and developer.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                data-ocid={`about.pillar.${i + 1}`}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border/40 transition-smooth hover:border-accent/30 scroll-reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-body"
                  style={{
                    background: "oklch(var(--accent))",
                    color: "oklch(var(--foreground))",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
