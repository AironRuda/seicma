import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section id="estadisticas" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary-dark mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
