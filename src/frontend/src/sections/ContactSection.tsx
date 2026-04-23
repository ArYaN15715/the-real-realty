import { useState } from "react";
import { COMPANY_NAME, WHATSAPP_NUMBER } from "../constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface FormData {
  name: string;
  phone: string;
  requirement: string;
  message: string;
}

export function ContactSection() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    requirement: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello ${COMPANY_NAME}!\n\nName: ${form.name}\nPhone: ${form.phone}\nRequirement: ${form.requirement}\n\n${form.message}`,
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${text}`,
      "_blank",
    );
    setSubmitted(true);
  };

  const inputClass =
    "w-full font-body text-sm bg-muted border border-input rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 transition-smooth";

  const labelClass =
    "block font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5";

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-20 lg:py-28"
      style={{ background: "oklch(var(--muted))" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-14">
          <p
            className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "oklch(var(--accent))" }}
          >
            Get In Touch
          </p>
          <h2 className="font-display text-3xl lg:text-4xl italic font-bold text-foreground mb-4">
            Book a Private Consultation
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Share a few details and we'll reach out within 24 hours to schedule
            your complimentary discovery call.
          </p>
        </div>

        {submitted ? (
          <div
            data-ocid="contact.success_state"
            className="text-center bg-card rounded-2xl border border-border/40 p-12"
          >
            <div
              className="text-5xl mb-5"
              style={{ color: "oklch(var(--accent))" }}
              aria-hidden="true"
            >
              ✓
            </div>
            <h3 className="font-display text-2xl italic font-bold text-foreground mb-3">
              Message Sent
            </h3>
            <p className="font-body text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
              Thank you for reaching out. We'll connect with you within 24 hours
              to schedule your consultation.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              data-ocid="contact.reset_button"
              className="mt-6 font-body text-sm underline-accent transition-smooth"
              style={{ color: "oklch(var(--primary))" }}
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            data-ocid="contact.form"
            className="bg-card rounded-2xl border border-border/40 p-8 lg:p-10 space-y-5"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Rajesh Mehta"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  data-ocid="contact.name_input"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className={labelClass}>
                  Phone Number <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  data-ocid="contact.phone_input"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-requirement" className={labelClass}>
                I am looking to
              </label>
              <select
                id="contact-requirement"
                value={form.requirement}
                onChange={(e) =>
                  setForm((f) => ({ ...f, requirement: e.target.value }))
                }
                data-ocid="contact.requirement_select"
                className={inputClass}
              >
                <option value="">Select your requirement</option>
                <option value="Buy a home">Buy a home</option>
                <option value="Invest in property">Invest in property</option>
                <option value="Sell my property">Sell my property</option>
                <option value="Property management">Property management</option>
                <option value="NRI advisory">NRI advisory</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Brief Message (optional)
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Tell us a bit about your requirements, budget, or timeline..."
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                data-ocid="contact.message_textarea"
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              data-ocid="contact.submit_button"
              className="w-full py-3.5 rounded font-body font-semibold text-sm transition-smooth hover:opacity-90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                background: "oklch(var(--accent))",
                color: "oklch(var(--primary))",
              }}
            >
              Send via WhatsApp
            </button>

            <p className="text-center font-body text-xs text-muted-foreground">
              Your details are strictly confidential. No spam. No third-party
              sharing.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
