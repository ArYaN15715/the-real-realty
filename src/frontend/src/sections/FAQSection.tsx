import { useState } from "react";
import { FAQ_ITEMS } from "../constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section data-ocid="faq.section" className="py-20 lg:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-14">
          <p
            className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "oklch(var(--accent))" }}
          >
            Common Questions
          </p>
          <h2 className="font-display text-3xl lg:text-4xl italic font-bold text-foreground mb-4">
            Frequently Asked
          </h2>
          <p className="font-body text-muted-foreground text-base leading-relaxed">
            Transparent answers to the questions we hear most from buyers,
            investors, and NRIs.
          </p>
        </div>

        <div className="space-y-3" data-ocid="faq.list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                data-ocid={`faq.item.${index + 1}`}
                className="bg-card rounded-xl border border-border/40 overflow-hidden transition-smooth hover:border-accent/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  data-ocid={`faq.toggle.${index + 1}`}
                  className="w-full text-left px-6 py-4 flex items-start justify-between gap-4 font-body font-semibold text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span
                    className="shrink-0 transition-smooth"
                    style={{
                      color: "oklch(var(--accent))",
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-4 h-4"
                      role="img"
                      aria-label="Toggle"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
