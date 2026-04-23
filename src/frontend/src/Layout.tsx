import type { ReactNode } from "react";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { Navigation } from "./components/Navigation";
import { COMPANY_NAME } from "./constants";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 pb-16 md:pb-0">{children}</main>

      <footer
        data-ocid="footer.section"
        className="border-t border-border/50"
        style={{ background: "oklch(var(--primary))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <p
                className="font-display text-2xl italic font-bold mb-3"
                style={{ color: "oklch(var(--accent))" }}
              >
                {COMPANY_NAME}
              </p>
              <p className="font-body text-sm leading-relaxed text-primary-foreground/75">
                Premium real estate consulting firm in South Bopal, Ahmedabad.
                Trusted advisory for serious buyers and investors.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p
                className="font-body text-xs uppercase tracking-widest font-semibold mb-4"
                style={{ color: "oklch(var(--accent))" }}
              >
                Quick Links
              </p>
              <ul className="space-y-2">
                {["Services", "Opportunities", "Testimonials", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <button
                        type="button"
                        onClick={() =>
                          document
                            .getElementById(link.toLowerCase())
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="font-body text-sm text-primary-foreground/75 hover:text-primary-foreground transition-smooth underline-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                      >
                        {link}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p
                className="font-body text-xs uppercase tracking-widest font-semibold mb-4"
                style={{ color: "oklch(var(--accent))" }}
              >
                Contact
              </p>
              <address className="not-italic space-y-2">
                <p className="font-body text-sm text-primary-foreground/75">
                  South Bopal, Ahmedabad
                  <br />
                  Gujarat 380058, India
                </p>
                <a
                  href="tel:+919876543210"
                  className="block font-body text-sm text-primary-foreground/75 hover:text-primary-foreground transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  +91 98765 43210
                </a>
                <a
                  href="mailto:consult@therealrealty.in"
                  className="block font-body text-sm text-primary-foreground/75 hover:text-primary-foreground transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  consult@therealrealty.in
                </a>
              </address>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="font-body text-xs text-primary-foreground/50">
              © {year} {COMPANY_NAME}. All rights reserved.
            </p>
            <p className="font-body text-xs text-primary-foreground/50">
              Built with love using{" "}
              <a
                href={utmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-smooth underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
      <MobileStickyBar />
    </div>
  );
}
