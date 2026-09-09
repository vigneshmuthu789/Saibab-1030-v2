"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function DonationCTA() {
  const { language } = useLanguage();
  const t = translations[language].donationCTA;

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: GRADIENTS.light,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {language === "en" && <Heart className="w-16 h-16 text-divine-saffron mx-auto mb-6" />}
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/donations"
              className={`group px-8 py-4 bg-divine-saffron text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
            >
              {language === "en" && <Heart className="w-5 h-5" />}
              {t.donateNow}
              {language === "en" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </Link>
            <Link
              href="/donations"
              className="px-8 py-4 bg-white text-divine-saffron border-2 border-divine-saffron rounded-full font-semibold text-lg hover:bg-divine-cream transition-colors duration-300"
            >
              {t.learnMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

