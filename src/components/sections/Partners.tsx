import { PARTNERS } from "@/lib/constants";

export default function Partners() {
  return (
    <section id="aliados" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Enfocados en la calidad,{" "}
          <span className="text-accent-green italic">
            mantenemos la confianza
          </span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-12">
          Empresas lideres confian en nuestros servicios para sus proyectos mas
          importantes.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {PARTNERS.map((partner) => (
            <div
              key={partner}
              className="w-20 h-20 rounded-full bg-neutral-light flex items-center justify-center border border-gray-200 hover:border-accent-green transition-colors duration-300"
            >
              <span className="text-xs font-bold text-text-secondary text-center leading-tight px-1">
                {partner.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
