import type { Metadata } from "next";
import { CONTACT_INFO, SERVICES } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto | SEICMA",
  description:
    "Ponte en contacto con SEICMA para solicitar una cotizacion o resolver tus dudas sobre nuestros servicios.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center bg-linear-to-br from-primary-dark to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full text-accent-green text-sm font-medium mb-4">
            Hablemos
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="text-accent-green italic">Contacto</span>
          </h1>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Envianos un mensaje
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Correo electronico
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      placeholder="+52 (55) 1234-5678"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Asunto
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text-primary focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-colors bg-white">
                      <option value="">Selecciona un servicio</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Cuentanos sobre tu proyecto..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-colors resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-green text-white rounded-full font-semibold text-sm hover:bg-accent-green/90 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Enviar mensaje
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
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-text-primary mb-4">
                  Informacion de Contacto
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-accent-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Direccion
                      </p>
                      <p className="text-sm text-text-secondary">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-accent-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Telefono
                      </p>
                      <p className="text-sm text-text-secondary">
                        {CONTACT_INFO.phone}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-accent-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Instagram
                      </p>
                      <Link
                        href="https://www.instagram.com/seicmaproyectos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary hover:text-accent-green transition-colors"
                      >
                        {CONTACT_INFO.instagram}
                      </Link>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-accent-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Email
                      </p>
                      <p className="text-sm text-text-secondary">
                        {CONTACT_INFO.email}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Schedule */}
              <div className="bg-neutral-light rounded-xl p-6">
                <h3 className="font-bold text-text-primary mb-3">
                  Horario de Atencion
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Lunes - Viernes</span>
                    <span className="text-text-primary font-medium">
                      8:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Sabado</span>
                    <span className="text-text-primary font-medium">
                      9:00 AM - 1:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Domingo</span>
                    <span className="text-text-primary font-medium">
                      Cerrado
                    </span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              {/* <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-primary-dark/10 to-accent-blue/10 border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-10 h-10 text-text-secondary/30 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-text-secondary text-sm">
                    Mapa de ubicacion
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
