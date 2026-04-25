import { useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PILLARS = [
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
];

const STATS = [
  { value: "10+", label: "Years of Expertise" },
  { value: "41+", label: "Satisfied Families" },
  { value: "5.0★", label: "Google Rating" },
];

function AnimatedStat({
  value,
  label,
  delay,
}: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("stat-pop-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="text-center stat-pop">
      <div className="font-display text-3xl lg:text-4xl italic font-bold mb-1 text-[#C9A14A]">
        {value}
      </div>
      <div className="font-body text-xs text-white/60 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

export function AboutSection() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "#0F3D2E" }}
    >
      {/* Decorative background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(201,161,74,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <p className="font-body text-xs uppercase tracking-widest font-semibold mb-3 text-[#C9A14A]">
            Our Philosophy
          </p>
          <h2 className="font-display text-3xl lg:text-5xl italic font-bold text-[#C9A14A] mb-3">
            Born to Consult
          </h2>
          {/* Gold decorative line */}
          <div
            className="mx-auto h-0.5 w-16 rounded-full mb-6"
            style={{ background: "#C9A14A" }}
            aria-hidden="true"
          />
          <p className="font-body text-white/75 max-w-xl mx-auto text-base leading-relaxed">
            We Guide. You Decide. Always in Your Interest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: text */}
          <div>
            <p className="font-body text-white/80 text-base leading-relaxed mb-5">
              The Real Realty was founded on a simple belief: property advisory
              should serve the client, not the commission. In a market dominated
              by aggressive brokers and misleading listings, we chose a
              different path.
            </p>
            <p className="font-body text-white/80 text-base leading-relaxed mb-10">
              Operating exclusively out of South Bopal — one of Ahmedabad's
              fastest-appreciating premium corridors — we bring deep local
              expertise, honest counsel, and a relationship-first approach to
              every engagement. Our clients come back not because they have to,
              but because they trust us.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {STATS.map((stat, i) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={i * 150}
                />
              ))}
            </div>
          </div>

          {/* Right: pillar cards */}
          <div className="space-y-4">
            {PILLARS.map((item, i) => (
              <div
                key={item.title}
                data-ocid={`about.pillar.${i + 1}`}
                className="scroll-reveal flex gap-4 p-5 rounded-xl border transition-all duration-300 hover:border-[#C9A14A]/60 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(201,161,74,0.2)",
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-body"
                  style={{ background: "#C9A14A", color: "#0F3D2E" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-body font-semibold text-[#C9A14A] text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-white/70 text-sm leading-relaxed">
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
