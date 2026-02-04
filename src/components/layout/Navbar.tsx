"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className={`font-bold text-xl tracking-tight transition-colors duration-300 flex items-center gap-2 ${
                scrolled ? "text-primary-dark" : "text-white"
              }`}
            >
              <Image
                src="/images/seigma-logo.png"
                alt="SEICMA Logo"
                width={50}
                height={50}
              />
              <span>
                <span className="text-accent-green">SEIC</span>MA
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? scrolled
                      ? "text-accent-green"
                      : "text-accent-green"
                    : scrolled
                      ? "text-text-primary hover:text-primary"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-green text-white rounded-full text-sm font-semibold hover:bg-accent-green/90 transition-all duration-300"
            >
              Contactar
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

          {/* Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? "text-primary-dark" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium py-2 ${
                  pathname === link.href
                    ? "text-accent-green"
                    : "text-text-primary hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="block w-full text-center px-5 py-2.5 bg-accent-green text-white rounded-full text-sm font-semibold hover:bg-accent-green/90 transition-all duration-300"
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
