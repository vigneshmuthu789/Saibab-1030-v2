"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section 
      className="hero-section relative min-h-[90vh] flex items-end justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0" style={{ bottom: "-20%" }}>
          <Image
            src="/home/hero-image/Home%20Page%20Main%20Photo.webp"
            alt="Sai Baba Vedha Garden"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
      </div>

      <div className="relative z-[3] container mx-auto px-4 text-center pb-20 md:pb-32">
        {/* Small Quote */}
        <p 
          className="text-lg md:text-xl lg:text-2xl text-white font-medium"
          style={{
            fontFamily: "var(--font-playfair)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)"
          }}
        >
          &ldquo;{t.smallQuote}&rdquo;
        </p>
      </div>
    </section>
  );
}

