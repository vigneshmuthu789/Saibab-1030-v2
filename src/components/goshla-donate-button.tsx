"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function GoshlaDonateButton() {
  const { language } = useLanguage();
  const label = translations[language].donations.hero.donateNow;

  return (
    <Link
      href="/donations"
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-divine-saffron px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-divine-saffron-dark hover:shadow-xl sm:px-8 sm:py-3.5 sm:text-base ${language === "ta" ? "gap-0" : ""}`}
    >
      {language === "en" && <Heart className="h-5 w-5 shrink-0" aria-hidden />}
      {label}
    </Link>
  );
}
