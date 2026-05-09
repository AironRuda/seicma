import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nosotros | SEICMA",
  description:
    "Conoce la historia, mision y valores de SEICMA. Mas de 15 anos brindando soluciones en seguridad, ingenieria civil y medio ambiente.",
};

const VALUES = [
  {
    title: "Seguridad",
    description:
      "La seguridad es nuestra prioridad en cada proyecto. Implementamos protocolos rigurosos para proteger a las personas y el medio ambiente.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Calidad",
    description:
      "Nos comprometemos con los mas altos estandares de calidad en cada servicio, asegurando resultados que superen las expectativas.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Sostenibilidad",
    description:
      "Promovemos practicas sostenibles que equilibren el desarrollo con la conservacion del medio ambiente para las futuras generaciones.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Innovacion",
    description:
      "Utilizamos tecnologia de vanguardia y metodologias innovadoras para ofrecer soluciones eficientes y precisas.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
];

const TEAM = [
  {
    name: "Tatiana Vargas Clavijo",
    role: "Profesional SST",
    initials: "TV",
    description:
      "Profesional en Seguridad y Salud en el Trabajo y futura especialista en Gerencia de SST, enfoco mi labor en crear entornos laborales seguros, con un acompañamiento cercano y comprometido.",
  },
  {
    name: "Jeison Castro Cruz",
    role: "Arquitecto",
    initials: "JC",
    description:
      "Arquitecto con amplia experiencia en el diseño y planificación de proyectos de construcción, asegurando la calidad y eficiencia en cada etapa del proceso.",
  },
  {
    name: "Sergio Castro Cruz",
    role: "Topógrafo",
    initials: "SC",
    description:
      "Topógrafo con amplia experiencia en el levantamiento de terrenos y la planificación de proyectos de construcción, asegurando la precisión y eficiencia en cada etapa del proceso.",
  },
  {
    name: "Alejandra Zapata Baez",
    role: "Bióloga y esp. Evaluación Ambiental de Proyectos",
    initials: "AZ",
    description:
      "Profesional con amplia trayectoria en la gestión ambiental de proyectos de infraestructura vial. Alta capacidad para el análisis de impactos, la formulación de estrategias de manejo y el aseguramiento de la eficiencia técnica y legal en cada etapa del proceso, garantizando la calidad y la responsabilidad ambiental corporativa.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full text-accent-green text-sm font-medium mb-4">
            Nuestra Empresa
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Sobre <span className="text-accent-green italic">Nosotros</span>
          </h1>
        </div>
      </section>

      {/* Historia / Mision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Construyendo{" "}
                <span className="text-accent-green italic">el futuro</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                SEICMA nacio con la vision de integrar la seguridad, la
                ingenieria civil y el cuidado del medio ambiente en una sola
                empresa capaz de ofrecer soluciones completas. Desde nuestros
                inicios, hemos trabajado con dedicacion para convertirnos en un
                referente del sector.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                En SEICMA concebimos, planificamos y ejecutamos ideas para
                transformarlas en soluciones innovadoras, enfocadas en el uso
                eficiente y responsable de los recursos. Respaldados por un
                equipo humano altamente calificado, desarrollamos proyectos
                eficientes, sostenibles y de alta calidad, orientados a
                satisfacer las necesidades de nuestros clientes.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Nuestro enfoque integral combina tecnología avanzada, excelencia
                técnica y un firme compromiso con la responsabilidad social y
                ambiental, trabajando con pasión y ética para no solo cumplir,
                sino superar las expectativas en cada proyecto.
              </p>
            </div>
            <Image
              className="w-auto h-full object-cover rounded-2xl"
              src="/images/us-image.jpeg"
              alt="Equipo SEICMA"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Nuestro <span className="text-accent-green italic">Equipo</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Profesionales comprometidos con la excelencia y la innovacion en
              cada proyecto.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white flex flex-col items-center gap-2 rounded-xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-primary-dark mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {member.initials}
                </div>
                <h3 className="font-bold text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-text-secondary text-sm">{member.role}</p>
                <p className="text-text-primary text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Nuestros <span className="text-accent-green italic">Valores</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Los principios que guian cada decision y cada proyecto que
              emprendemos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:border-accent-green/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent-green/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-accent-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {value.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Trabajemos juntos en tu{" "}
            <span className="text-accent-green italic">proximo proyecto</span>
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Estamos listos para escucharte y ofrecerte la mejor solucion para
            tus necesidades en seguridad, ingenieria civil y medio ambiente.
          </p>
          <Button href="/contacto" variant="primary">
            Contactar
          </Button>
        </div>
      </section>
    </>
  );
}
