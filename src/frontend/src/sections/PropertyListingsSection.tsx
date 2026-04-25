import { useCallback, useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "../constants";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Property {
  name: string;
  type: string;
  bhk: string;
  location: string;
  area: string;
  price: string;
  photo: string;
  description: string;
}

const PROPERTY_LISTINGS: Property[] = [
  {
    name: "Prestige Woodland Park",
    type: "Apartment",
    bhk: "3 BHK",
    location: "South Bopal, Ahmedabad",
    area: "1,650 sq ft",
    price: "₹1.2 Cr – ₹1.5 Cr",
    photo:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    description:
      "A thoughtfully designed 3 BHK in the heart of South Bopal, offering lush green views and premium amenities. RERA-compliant with top-tier construction quality and excellent school proximity. Ideal for growing families seeking space and serenity.",
  },
  {
    name: "The Greens Villa",
    type: "Villa",
    bhk: "4 BHK",
    location: "Ambli-Bopal Corridor",
    area: "3,200 sq ft",
    price: "₹2.8 Cr – ₹3.5 Cr",
    photo:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    description:
      "An elegant 4 BHK private villa nestled in the prestigious Ambli-Bopal corridor, featuring a private garden, double-height living room, and top-of-class finishes. A rare opportunity for buyers seeking bungalow-style living with full township amenities.",
  },
  {
    name: "Emerald Heights Penthouse",
    type: "Penthouse",
    bhk: "4 BHK",
    location: "Shela, Ahmedabad",
    area: "4,100 sq ft",
    price: "₹4.2 Cr – ₹5 Cr",
    photo:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description:
      "Sky-high luxury defined — this sprawling 4 BHK penthouse in Shela offers panoramic skyline views, a private terrace, and ultra-premium interiors. Limited inventory in one of Ahmedabad's most sought-after emerging addresses for discerning buyers.",
  },
  {
    name: "Goldcrest Residences",
    type: "Apartment",
    bhk: "2 BHK",
    location: "Vastrapur, Ahmedabad",
    area: "1,100 sq ft",
    price: "₹85 L – ₹1.05 Cr",
    photo:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    description:
      "A smart investment in the prestigious Vastrapur neighbourhood — this compact 2 BHK is ideally positioned near business hubs, lakes, and top entertainment zones. High rental yield and strong capital appreciation make it a preferred NRI and investor choice.",
  },
  {
    name: "Serene Valley Homes",
    type: "Villa",
    bhk: "3 BHK",
    location: "Bopal, Ahmedabad",
    area: "2,400 sq ft",
    price: "₹1.9 Cr – ₹2.4 Cr",
    photo:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description:
      "Spacious 3 BHK row villas designed for peaceful family living in established Bopal. Wide landscaped streets, dedicated parking, and a vibrant community make this an ideal first home for families upgrading from apartments.",
  },
  {
    name: "The Grand Meridian",
    type: "Luxury Villa",
    bhk: "5 BHK",
    location: "South Bopal, Ahmedabad",
    area: "5,500 sq ft",
    price: "₹7.5 Cr – ₹9 Cr",
    photo:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
    description:
      "The pinnacle of luxury residential living in South Bopal. This grand 5 BHK estate boasts a private pool, home theatre, smart home automation, and impeccable Italian marble finishes. Reserved for ultra-high-net-worth buyers seeking legacy-grade real estate.",
  },
];

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

function PropertyModal({ property, onClose }: PropertyModalProps) {
  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const waMessage = encodeURIComponent(
    `Hello! I'm interested in ${property.name} (${property.bhk} ${property.type}) at ${property.location}. Price: ${property.price}. Please share more details.`,
  );
  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${waMessage}`;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50" data-ocid="listings.modal">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        onKeyUp={(e) => {
          if (e.key === "Enter") onClose();
        }}
        aria-hidden="true"
      />
      {/* Centering wrapper */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* Modal panel */}
        <div
          className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          aria-modal="true"
          aria-label={`${property.name} details`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            data-ocid="listings.modal.close_button"
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
            aria-label="Close property details"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2.5}
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image */}
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <img
              src={property.photo}
              alt={property.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/images/placeholder.svg";
              }}
            />
            <div
              className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-body font-bold"
              style={{ background: "#C9A14A", color: "#0F3D2E" }}
            >
              {property.bhk} {property.type}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            <div
              className="h-0.5 w-12 rounded-full mb-4"
              style={{ background: "#C9A14A" }}
              aria-hidden="true"
            />

            <h2
              className="font-display text-2xl italic font-bold mb-2"
              style={{ color: "#0F3D2E" }}
            >
              {property.name}
            </h2>

            <div
              className="flex flex-wrap gap-4 mb-4 text-sm font-body"
              style={{ color: "rgba(26,26,26,0.6)" }}
            >
              <span className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A14A"
                  strokeWidth={2}
                  className="w-4 h-4 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z"
                  />
                  <circle cx="12" cy="8" r="2" />
                </svg>
                {property.location}
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A14A"
                  strokeWidth={2}
                  className="w-4 h-4 shrink-0"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9h18M9 21V9"
                  />
                </svg>
                {property.area}
              </span>
            </div>

            <p
              className="font-body text-2xl font-bold mb-4"
              style={{ color: "#C9A14A" }}
            >
              {property.price}
            </p>

            <p
              className="font-body text-sm leading-relaxed mb-6"
              style={{ color: "rgba(26,26,26,0.7)" }}
            >
              {property.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="listings.modal.whatsapp_button"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-body font-semibold text-sm bg-[#25D366] text-white transition-all duration-200 hover:opacity-90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire on WhatsApp
              </a>
              <button
                type="button"
                onClick={scrollToContact}
                data-ocid="listings.modal.consult_button"
                className="flex-1 py-3 rounded-lg font-body font-semibold text-sm border-2 transition-all duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2"
                style={{ borderColor: "#0F3D2E", color: "#0F3D2E" }}
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PropertyListingsSection() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );

  const openModal = useCallback((property: Property) => {
    setSelectedProperty(property);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProperty(null);
  }, []);

  return (
    <>
      <section
        id="listings"
        data-ocid="listings.section"
        className="py-20 lg:py-28"
        style={{ background: "oklch(var(--background))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headingRef} className="text-center mb-14">
            <p
              className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
              style={{ color: "oklch(var(--accent))" }}
            >
              Premium Inventory
            </p>
            <h2 className="font-display text-3xl lg:text-4xl italic font-bold text-foreground mb-3">
              Property Listings
            </h2>
            <div
              className="mx-auto h-0.5 w-14 rounded-full mb-4"
              style={{ background: "oklch(var(--accent))" }}
              aria-hidden="true"
            />
            <p className="font-body text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Curated premium properties across Ahmedabad's finest residential
              zones. Click any listing to explore details. Each property is
              personally vetted by our advisory team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {PROPERTY_LISTINGS.map((property, index) => (
              <button
                key={property.name}
                type="button"
                data-ocid={`listings.item.${index + 1}`}
                onClick={() => openModal(property)}
                aria-label={`View details for ${property.name}`}
                className="group bg-card rounded-xl overflow-hidden border border-border/50 transition-all duration-300 hover:border-[#C9A14A]/60 hover:shadow-2xl hover:-translate-y-1 text-left focus-visible:outline-none focus-visible:ring-2 w-full"
                style={{ boxShadow: "0 2px 12px 0 rgba(15,61,46,0.07)" }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "16/9" }}
                >
                  <img
                    src={property.photo}
                    alt={property.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/assets/images/placeholder.svg";
                    }}
                  />
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded text-xs font-body font-semibold"
                    style={{ background: "#C9A14A", color: "#0F3D2E" }}
                  >
                    {property.type}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 text-[#0F3D2E] font-body font-semibold text-sm px-4 py-2 rounded-lg shadow-lg translate-y-2 group-hover:translate-y-0">
                      View Details
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div
                    className="h-0.5 w-8 rounded-full mb-3 transition-all duration-500 group-hover:w-14"
                    style={{ background: "oklch(var(--accent))" }}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-lg italic font-bold text-foreground mb-1 truncate">
                    {property.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: "oklch(var(--accent))" }}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z"
                      />
                      <circle cx="12" cy="8" r="2" />
                    </svg>
                    <span className="font-body text-xs text-muted-foreground">
                      {property.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      className="font-body text-xs font-medium px-2 py-0.5 rounded"
                      style={{
                        background: "oklch(var(--primary) / 0.07)",
                        color: "oklch(var(--primary))",
                      }}
                    >
                      {property.bhk}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      {property.area}
                    </span>
                  </div>
                  <p
                    className="font-body text-base font-bold"
                    style={{ color: "oklch(var(--accent))" }}
                  >
                    {property.price}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={closeModal} />
      )}
    </>
  );
}
