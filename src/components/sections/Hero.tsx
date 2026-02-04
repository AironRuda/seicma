"use client";
import Button from "@/components/ui/Button";
import { HERO_CONTENT } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rotativeImages = [
    "/images/building-image.jpg",
    "/images/environmental-image.jpg",
    "/images/kitchen-image.jpg",
    "/images/civil-image.jpg",
    "/images/render-image.jpg",
    "/images/civil-image.jpg",
    "/images/sst-image.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % rotativeImages.length,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [rotativeImages.length]);

  const currentImage = rotativeImages[currentImageIndex];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-dark via-primary-dark to-primary z-0" />
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 z-0" />
      <div className="absolute inset-0 bg-linear-to-t from-primary-dark/80 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full text-accent-green text-sm font-medium mb-6">
              {HERO_CONTENT.subtitle}
            </span> */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {HERO_CONTENT.headline.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="text-accent-green italic">
                {HERO_CONTENT.headline.split(" ").slice(2).join(" ")}
              </span>
            </h1>
            <p className="text-white/70 text-lg max-w-lg mb-8 leading-relaxed">
              {HERO_CONTENT.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={HERO_CONTENT.cta_primary.href} variant="primary">
                {HERO_CONTENT.cta_primary.label}
              </Button>
              <Button href={HERO_CONTENT.cta_secondary.href} variant="outline">
                {HERO_CONTENT.cta_secondary.label}
              </Button>
            </div>
          </div>

          {/* Right - floating card + image placeholder */}
          <div className="hidden lg:block relative">
            <div className="w-full flex items-center justify-center aspect-4/3 rounded-2xl bg-linear-to-br from-accent-blue/30 to-accent-green/30 backdrop-blur border border-white/10">
              <Image
                src={currentImage}
                alt="Hero image"
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <Link
              href={HERO_CONTENT.floating_card.href}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-5 max-w-xs hover:shadow-3xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-accent-green transition-colors">
                    {HERO_CONTENT.floating_card.label}
                  </p>
                  <p className="text-xs text-text-secondary">Ver mas</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
