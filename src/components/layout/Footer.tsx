import Link from "next/link";
import { FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-bold text-2xl tracking-tight mb-4">
              <span className="text-accent-green">SEIC</span>MA
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Seguridad, Ingenieria Civil y Medio Ambiente. Soluciones
              integrales con los mas altos estandares de calidad.
            </p>
            <div className="flex gap-4">
              {["facebook", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-green transition-colors duration-300"
                  aria-label={social}
                >
                  <span className="text-xs uppercase font-bold">
                    {social[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Servicios
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-accent-green transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-accent-green transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex gap-2">
                <svg
                  className="w-5 h-5 text-accent-green shrink-0 mt-0.5"
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
                {CONTACT_INFO.address}
              </li>
              <li className="flex gap-2">
                <svg
                  className="w-5 h-5 text-accent-green shrink-0"
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
                {CONTACT_INFO.phone}
              </li>
              <li className="flex gap-2">
                <svg
                  className="w-5 h-5 text-accent-green shrink-0"
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
                {CONTACT_INFO.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2025 SEICMA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Politica de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terminos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
