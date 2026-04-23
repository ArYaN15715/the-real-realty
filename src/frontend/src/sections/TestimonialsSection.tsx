import { TESTIMONIALS } from "../constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function TestimonialsSection() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="testimonials"
      data-ocid="testimonials.section"
      className="py-20 lg:py-28"
      style={{ background: "oklch(var(--muted))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-14">
          <p
            className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "oklch(var(--accent))" }}
          >
            Client Voices
          </p>
          <h2 className="font-display text-3xl lg:text-4xl italic font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {(["s1", "s2", "s3", "s4", "s5"] as const).map((id) => (
              <svg
                key={id}
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
                style={{ color: "oklch(var(--accent))" }}
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="font-body text-muted-foreground text-sm">
            5.0 rating · 41 verified reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              data-ocid={`testimonials.item.${index + 1}`}
              className="bg-card rounded-xl p-6 border border-border/40 flex flex-col scroll-reveal"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div
                className="font-display text-4xl italic leading-none mb-4"
                style={{ color: "oklch(var(--accent))" }}
                aria-hidden="true"
              >
                "
              </div>
              <blockquote className="flex-1 font-body text-sm text-muted-foreground leading-relaxed mb-5">
                {testimonial.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-body font-bold shrink-0"
                  style={{
                    background: "oklch(var(--primary))",
                    color: "oklch(var(--primary-foreground))",
                  }}
                  aria-hidden="true"
                >
                  {testimonial.avatarInitials}
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
