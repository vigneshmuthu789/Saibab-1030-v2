"use client";

import { Clock } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function DailyAartiTimings() {
  const { language } = useLanguage();
  const t = translations[language].aartiTimings;

  return (
    <section 
      className="py-12 sm:py-16 relative"
      style={{
        background: GRADIENTS.light,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 text-center"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            {t.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md border border-amber-200/40">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-divine-saffron to-divine-saffron-dark flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{t.morning}</h3>
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-divine-saffron">{t.morningTime}</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md border border-amber-200/40">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-divine-gold to-divine-gold-dark flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{t.evening}</h3>
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-divine-saffron">{t.eveningTime}</p>
            </div>
          </div>

          <p className="text-center text-gray-700 mt-4 sm:mt-6 text-xs sm:text-sm md:text-base">
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
}

