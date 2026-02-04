import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicios | SEICMA",
  description:
    "Descubre nuestros servicios en estudios ecologicos, diseno arquitectonico, topografia e ingenieria civil.",
};

const SERVICE_ICONS: Record<string, string> = {
  civilImage: "/images/civil-image.jpg",
  architectureImage: "/images/building-image.jpg",
  environmentalImage: "/images/environmental-image.jpg",
  saveHealthImage: "/images/sst-image.jpg",
};

const GRADIENT_COLORS = [
  "from-accent-green/20 to-accent-blue/10",
  "from-primary/20 to-accent-green/10",
  "from-accent-blue/20 to-primary/10",
  "from-accent-gold/20 to-accent-green/10",
];

export default function ServiciosPage() {
  const imageSelector = (service: string) => {
    switch (service) {
      case "civil-engineering":
        return SERVICE_ICONS.civilImage;
      case "architecture":
        return SERVICE_ICONS.architectureImage;
      case "environmental-engineering":
        return SERVICE_ICONS.environmentalImage;
      case "occupational-safety-health":
        return SERVICE_ICONS.saveHealthImage;
      default:
        return "";
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full text-accent-green text-sm font-medium mb-4">
            Lo que hacemos
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Nuestros <span className="text-accent-green italic">Servicios</span>
          </h1>
        </div>
      </section>

      {/* Service Details */}
      {SERVICES.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 scroll-mt-20 ${
            idx % 2 === 0 ? "bg-white" : "bg-neutral-light"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                idx % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-8">
                  {service.fullDescription}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.subServices.map((sub) => (
                    <li key={sub} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3 h-3 text-accent-green"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-text-secondary text-sm">{sub}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/contacto" variant="primary">
                  Solicitar cotizacion
                </Button>
              </div>
              <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                <div
                  className={`w-full aspect-4/3 rounded-2xl bg-linear-to-br ${GRADIENT_COLORS[idx]} border border-gray-200 flex items-center justify-center`}
                >
                  <Image
                    src={imageSelector(service.id)}
                    alt={service.title}
                    width={2000}
                    height={2000}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Necesitas alguno de nuestros{" "}
            <span className="text-accent-green italic">servicios?</span>
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Contactanos para una evaluacion gratuita de tu proyecto. Nuestro
            equipo esta listo para ayudarte.
          </p>
          <Button href="/contacto" variant="primary">
            Contactar
          </Button>
        </div>
      </section>
    </>
  );
}
