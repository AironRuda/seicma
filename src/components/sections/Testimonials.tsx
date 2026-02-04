import Link from "next/link";
import { TESTIMONIAL } from "@/lib/constants";

export default function Testimonials() {
  const categories = [
    "Ingenieria Civil",
    "Estudios Ecologicos",
    "Arquitectonico",
    "Topografia",
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Lo que dicen{" "}
            <span className="text-accent-green italic">nuestros clientes</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            La satisfaccion de nuestros clientes es nuestro mejor indicador de
            calidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
            <svg
              className="w-10 h-10 text-accent-green/30 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
            </svg>
            <p className="text-text-primary text-lg leading-relaxed mb-8 italic">
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center text-white font-bold">
                {TESTIMONIAL.person
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-bold text-text-primary">
                  {TESTIMONIAL.person}
                </p>
                <p className="text-text-secondary text-sm">
                  {TESTIMONIAL.role}, {TESTIMONIAL.company}
                </p>
              </div>
            </div>
          </div>

          {/* Project preview + categories */}
          <div>
            <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-green/20 border border-gray-200 mb-6 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-8 h-8 text-accent-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-text-secondary text-sm">
                    Proyecto destacado
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-text-secondary hover:border-accent-green hover:text-accent-green transition-colors cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 text-accent-green font-semibold hover:text-accent-green/80 transition-colors"
            >
              Ver caso de estudio
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
