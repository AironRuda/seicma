"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";

const CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "ecologicos", label: "Estudios Ecologicos" },
  { id: "arquitectonico", label: "Diseño Arquitectonico" },
  { id: "topografia", label: "Topografia" },
  { id: "ingenieria-civil", label: "Ingenieria Civil" },
];

const GRADIENT_MAP: Record<string, string> = {
  ecologicos: "from-accent-green/20 to-accent-blue/10",
  arquitectonico: "from-primary/20 to-accent-green/10",
  topografia: "from-accent-blue/20 to-primary/10",
  "ingenieria-civil": "from-accent-gold/20 to-accent-green/10",
};

export default function ProyectosPage() {
  const [active, setActive] = useState("todos");

  const filtered =
    active === "todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categoryId === active);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full text-accent-green text-sm font-medium mb-4">
            Nuestro Trabajo
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Nuestros <span className="text-accent-green italic">Proyectos</span>
          </h1>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  active === cat.id
                    ? "bg-accent-green text-white"
                    : "bg-neutral-light text-text-secondary hover:text-accent-green border border-gray-200 hover:border-accent-green"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-full aspect-video bg-gradient-to-br ${
                    GRADIENT_MAP[project.categoryId]
                  } flex items-center justify-center`}
                >
                  {project.image ? (
                    <Image
                      src={"/" + project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      width={400}
                      height={300}
                    />
                  ) : (
                    <svg
                      className="w-12 h-12 text-white/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent-green/10 text-accent-green text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-text-primary mb-2 group-hover:text-accent-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Quieres ver tu proyecto{" "}
            <span className="text-accent-green italic">aqui?</span>
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Conversemos sobre como podemos ayudarte a hacer realidad tu proximo
            proyecto.
          </p>
          <Button href="/contacto" variant="primary">
            Contactar
          </Button>
        </div>
      </section>
    </>
  );
}
