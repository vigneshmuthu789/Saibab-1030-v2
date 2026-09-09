"use client";

import Link from "next/link";
import { ArrowRight, Heart, Calendar } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function CTASection() {
  const { language } = useLanguage();
  const t = translations[language].cta;
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: GRADIENTS.light,
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {language === "en" && <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-divine-saffron mx-auto mb-4 sm:mb-6" />}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            {t.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/events"
              className={`group px-6 sm:px-8 py-3 sm:py-4 bg-divine-saffron text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
            >
              {language === "en" && <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />}
              {t.viewEvents}
              {language === "en" && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />}
            </Link>
            <Link
              href="/donations"
              className={`px-6 sm:px-8 py-3 sm:py-4 bg-white text-divine-saffron border-2 border-divine-saffron rounded-full font-semibold text-base sm:text-lg hover:bg-divine-cream transition-colors duration-300 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
            >
              {language === "en" && <Heart className="w-4 h-4 sm:w-5 sm:h-5" />}
              {t.supportMission}
            </Link>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-amber-200">
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-divine-saffron font-semibold mt-2">{t.quoteAuthor}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

