import { useEffect, useState } from "react";
import { COMPANY_NAME, NAV_ITEMS } from "../constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const bookConsult = () => {
    setMobileOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="nav.header"
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("#hero")}
            data-ocid="nav.logo"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            aria-label="Go to top"
          >
            <span
              className="font-display text-xl lg:text-2xl font-bold italic"
              style={{
                color: scrolled
                  ? "oklch(var(--primary))"
                  : "oklch(var(--accent))",
              }}
            >
              {COMPANY_NAME}
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => scrollTo(item.href)}
                data-ocid={`nav.${item.label.toLowerCase()}_link`}
                className={`font-body text-sm font-medium underline-accent transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1 ${
                  scrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={bookConsult}
              data-ocid="nav.book_consultation_button"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded text-sm font-body font-semibold transition-smooth hover:opacity-90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                background: "oklch(var(--accent))",
                color: "oklch(var(--foreground))",
              }}
            >
              Book a Consultation
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-ocid="nav.mobile_menu_toggle"
              className="lg:hidden p-2 rounded transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                color: scrolled
                  ? "oklch(var(--foreground))"
                  : "oklch(var(--primary-foreground))",
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          data-ocid="nav.mobile_menu"
          className="lg:hidden bg-card border-t border-border/50 shadow-lg"
        >
          <nav
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => scrollTo(item.href)}
                data-ocid={`nav.mobile_${item.label.toLowerCase()}_link`}
                className="text-left font-body text-base font-medium text-foreground py-3 px-3 rounded hover:bg-muted transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={bookConsult}
              data-ocid="nav.mobile_book_button"
              className="mt-2 w-full py-3 rounded font-body font-semibold text-sm transition-smooth hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                background: "oklch(var(--accent))",
                color: "oklch(var(--foreground))",
              }}
            >
              Book a Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
