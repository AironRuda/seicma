import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SEICMA | Seguridad, Ingenieria Civil y Medio Ambiente",
  description:
    "Soluciones integrales en seguridad, ingenieria civil y medio ambiente con los mas altos estandares de calidad y compromiso profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <meta
        name="google-site-verification"
        content="WKBM6LgBeEDOqrayk-8Ix--U7glsfx2bXFggpVEp0Eg"
      />
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
