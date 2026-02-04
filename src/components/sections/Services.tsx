import Link from "next/link";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Title + Cards */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Servicios de confianza, para tus{" "}
              <span className="text-accent-green italic">
                diversas necesidades
              </span>
            </h2>
            <p className="text-text-secondary mb-6">
              Contamos con un equipo multidisciplinario preparado para atender
              proyectos de cualquier escala.
            </p>
            <Button href="/contacto" variant="primary" className="mb-10">
              Contactar
            </Button>

            <div className="space-y-4">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:border-accent-green/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-text-primary mb-1">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-2">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/servicios#${service.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent-green hover:text-accent-green/80 transition-colors"
                    >
                      Ver Detalles
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image placeholder */}
          <div className="hidden lg:block sticky top-24">
            <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary-dark to-primary overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                  <p className="text-white text-sm font-medium">
                    Mas de 15 anos de experiencia
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Soluciones integrales en ingenieria y medio ambiente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
