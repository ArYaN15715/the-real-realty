import { useEffect, useRef } from "react";
import { COMPANY_NAME, STAT_BADGES, WHATSAPP_NUMBER } from "../constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function HeroSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const subtitleRef = useScrollReveal<HTMLParagraphElement>();
  const skylineRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on skyline
  useEffect(() => {
    const onScroll = () => {
      if (!skylineRef.current) return;
      const y = window.scrollY * 0.25;
      skylineRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const waMessage = encodeURIComponent(
    `Hello! I'd like to book a consultation with ${COMPANY_NAME}.`,
  );
  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${waMessage}`;

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture"
      style={{ background: "#0F3D2E" }}
    >
      {/* Radial vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, #1B5E43, transparent)",
        }}
        aria-hidden="true"
      />

      {/* City Skyline SVG — parallax container */}
      <div
        ref={skylineRef}
        className="absolute bottom-10 left-0 right-0 overflow-hidden pointer-events-none will-change-transform"
        aria-hidden="true"
        style={{ zIndex: 1 }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: "280px", display: "block" }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="0" y="0" width="1440" height="320" fill="none" />
          {/* Far background buildings */}
          <g fill="#0B3326" opacity="0.35">
            <rect x="20" y="160" width="30" height="160" />
            <rect x="55" y="140" width="20" height="180" />
            <rect x="80" y="170" width="25" height="150" />
            <rect x="200" y="130" width="35" height="190" />
            <rect x="240" y="150" width="25" height="170" />
            <rect x="270" y="120" width="40" height="200" />
            <rect x="450" y="145" width="30" height="175" />
            <rect x="485" y="125" width="22" height="195" />
            <rect x="700" y="135" width="35" height="185" />
            <rect x="740" y="110" width="28" height="210" />
            <rect x="900" y="150" width="32" height="170" />
            <rect x="940" y="130" width="25" height="190" />
            <rect x="1100" y="140" width="38" height="180" />
            <rect x="1145" y="120" width="28" height="200" />
            <rect x="1300" y="155" width="30" height="165" />
            <rect x="1335" y="135" width="22" height="185" />
            <rect x="1380" y="160" width="40" height="160" />
          </g>
          {/* Mid buildings */}
          <g fill="#0A2E22" opacity="0.55">
            <rect x="0" y="200" width="50" height="120" />
            <rect x="55" y="180" width="40" height="140" />
            <rect x="100" y="155" width="35" height="165" />
            <rect x="100" y="145" width="10" height="15" />
            <rect x="140" y="175" width="45" height="145" />
            <rect x="190" y="190" width="30" height="130" />
            <rect x="280" y="140" width="55" height="180" />
            <rect x="280" y="128" width="12" height="18" />
            <rect x="340" y="160" width="40" height="160" />
            <rect x="385" y="145" width="60" height="175" />
            <rect x="385" y="130" width="15" height="22" />
            <rect x="450" y="170" width="35" height="150" />
            <rect x="560" y="100" width="70" height="220" />
            <rect x="572" y="82" width="15" height="24" />
            <rect x="635" y="130" width="50" height="190" />
            <rect x="690" y="155" width="45" height="165" />
            <rect x="780" y="120" width="65" height="200" />
            <rect x="790" y="105" width="12" height="20" />
            <rect x="850" y="145" width="50" height="175" />
            <rect x="905" y="160" width="38" height="160" />
            <rect x="948" y="140" width="55" height="180" />
            <rect x="1060" y="150" width="50" height="170" />
            <rect x="1115" y="125" width="60" height="195" />
            <rect x="1115" y="112" width="14" height="18" />
            <rect x="1180" y="145" width="45" height="175" />
            <rect x="1230" y="165" width="40" height="155" />
            <rect x="1275" y="140" width="55" height="180" />
            <rect x="1335" y="155" width="35" height="165" />
            <rect x="1375" y="175" width="65" height="145" />
          </g>
          {/* Foreground buildings — darkest */}
          <g fill="#072419" opacity="0.8">
            <rect x="0" y="220" width="60" height="100" />
            <rect x="65" y="200" width="48" height="120" />
            <rect x="160" y="185" width="55" height="135" />
            <rect x="220" y="170" width="65" height="150" />
            <rect x="290" y="180" width="50" height="140" />
            {/* Central tower */}
            <rect x="390" y="110" width="80" height="210" />
            <rect x="404" y="90" width="18" height="28" />
            <rect x="390" y="108" width="80" height="8" />
            {/* Windows on central tower */}
            <g fill="#C9A14A" opacity="0.3">
              <rect x="400" y="125" width="12" height="8" />
              <rect x="418" y="125" width="12" height="8" />
              <rect x="436" y="125" width="12" height="8" />
              <rect x="454" y="125" width="12" height="8" />
              <rect x="400" y="143" width="12" height="8" />
              <rect x="418" y="143" width="12" height="8" />
              <rect x="436" y="143" width="12" height="8" />
              <rect x="400" y="161" width="12" height="8" />
              <rect x="436" y="161" width="12" height="8" />
              <rect x="400" y="179" width="12" height="8" />
              <rect x="418" y="179" width="12" height="8" />
              <rect x="454" y="179" width="12" height="8" />
            </g>
            <rect x="478" y="150" width="55" height="170" />
            <rect x="540" y="165" width="45" height="155" />
            {/* Main skyscraper */}
            <rect x="630" y="80" width="90" height="240" />
            <rect x="645" y="58" width="20" height="30" />
            <rect x="630" y="78" width="90" height="10" />
            {/* Gold windows on main skyscraper */}
            <g fill="#C9A14A" opacity="0.35">
              <rect x="642" y="100" width="14" height="10" />
              <rect x="662" y="100" width="14" height="10" />
              <rect x="682" y="100" width="14" height="10" />
              <rect x="700" y="100" width="14" height="10" />
              <rect x="642" y="122" width="14" height="10" />
              <rect x="662" y="122" width="14" height="10" />
              <rect x="700" y="122" width="14" height="10" />
              <rect x="642" y="144" width="14" height="10" />
              <rect x="682" y="144" width="14" height="10" />
              <rect x="700" y="144" width="14" height="10" />
              <rect x="662" y="166" width="14" height="10" />
              <rect x="700" y="166" width="14" height="10" />
              <rect x="642" y="188" width="14" height="10" />
              <rect x="682" y="188" width="14" height="10" />
            </g>
            <rect x="728" y="130" width="62" height="190" />
            <rect x="796" y="145" width="55" height="175" />
            <rect x="858" y="160" width="48" height="160" />
            <rect x="960" y="140" width="68" height="180" />
            <rect x="960" y="126" width="16" height="20" />
            <rect x="1034" y="158" width="55" height="162" />
            <rect x="1095" y="135" width="72" height="185" />
            <rect x="1106" y="118" width="18" height="24" />
            <rect x="1173" y="150" width="58" height="170" />
            <rect x="1238" y="168" width="48" height="152" />
            <rect x="1295" y="145" width="62" height="175" />
            <rect x="1365" y="165" width="75" height="155" />
          </g>
          <rect
            x="0"
            y="318"
            width="1440"
            height="4"
            fill="#041A11"
            opacity="0.8"
          />
        </svg>
      </div>

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
        style={{ zIndex: 2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p className="font-body text-xs uppercase tracking-widest mb-5 font-medium text-[#C9A14A]">
              South Bopal · Ahmedabad · Gujarat
            </p>

            <h1
              ref={titleRef}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold italic leading-tight text-white mb-6"
            >
              Consulting-First
              <br />
              <span style={{ color: "#C9A14A" }}>Real Estate,</span>
              <br />
              Ahmedabad
            </h1>

            <p
              ref={subtitleRef}
              className="font-body text-base lg:text-lg text-white/75 leading-relaxed mb-8 max-w-lg"
            >
              A premium advisory firm for serious buyers and investors in South
              Bopal. We guide, not push. Expert counsel that puts your interests
              first — always.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={scrollToContact}
                data-ocid="hero.book_consultation_button"
                className="inline-flex items-center px-6 py-3 rounded font-body font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,161,74,0.4)] focus-visible:outline-none focus-visible:ring-2"
                style={{ background: "#C9A14A", color: "#0F3D2E" }}
              >
                Book a Consultation
              </button>
              <button
                type="button"
                onClick={scrollToServices}
                data-ocid="hero.explore_button"
                className="inline-flex items-center px-6 py-3 rounded font-body font-semibold text-sm border transition-all duration-200 hover:bg-white/10 hover:scale-105 focus-visible:outline-none focus-visible:ring-2"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                }}
              >
                Explore Opportunities
              </button>
            </div>
          </div>

          {/* Right: Stat badges */}
          <div className="flex flex-col gap-4 lg:pl-8">
            {STAT_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-5 rounded-xl px-6 py-5 border transition-all duration-300 hover:border-[#C9A14A]/50 hover:bg-white/10"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="font-display text-3xl font-bold italic"
                  style={{ color: "#C9A14A" }}
                >
                  {badge.value}
                </div>
                <div className="font-body text-sm text-white/80 font-medium">
                  {badge.label}
                </div>
              </div>
            ))}

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.whatsapp_cta"
              className="flex items-center gap-3 mt-2 px-5 py-3 rounded-xl font-body text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 bg-[#25D366] text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 shrink-0"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Message us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none"
        aria-hidden="true"
        style={{ zIndex: 3 }}
      >
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-10 lg:h-14 fill-background"
          role="img"
          aria-label="Decorative wave"
        >
          <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
