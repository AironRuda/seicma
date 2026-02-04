import Button from "@/components/ui/Button";
import { CTA_CONTENT } from "@/lib/constants";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Llevemos tu proyecto al{" "}
              <span className="text-accent-green italic">siguiente nivel</span>
            </h2>
            <ul className="space-y-4 mb-10">
              {CTA_CONTENT.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-green flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span className="text-white/80">{point}</span>
                </li>
              ))}
            </ul>
            <Button href="/contacto" variant="primary">
              Contactar ahora
            </Button>
          </div>

          {/* Decorative side */}
          <div className="hidden lg:block">
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-accent-green/20 to-accent-blue/20 border border-white/10 flex items-center justify-center">
              <Image
                src="/images/seigma-slogan.png"
                alt="SEICMA Slogan"
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
