"use client";

import { Quote as QuoteIcon } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function Quote() {
  const { language } = useLanguage();
  const t = translations[language].quote;
  return (
    <section 
      className="py-20 relative"
      style={{
        background: GRADIENTS.light
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <QuoteIcon className="w-12 h-12 text-divine-saffron mx-auto mb-6 opacity-50" />
          <blockquote 
            className="text-3xl md:text-4xl font-medium text-gray-800 italic mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            &ldquo;{t.text}&rdquo;
          </blockquote>
          <p className="text-xl text-divine-saffron font-semibold">
            {t.author}
          </p>
        </div>
      </div>
    </section>
  );
}

