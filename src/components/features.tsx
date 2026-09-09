"use client";

import Link from "next/link";
import { Calendar, Heart, Sparkles, Users } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function Features() {
  const { language } = useLanguage();
  const t = translations[language].features;

  const features = [
    {
      icon: Calendar,
      title: t.regularEvents.title,
      description: t.regularEvents.description,
      href: "/events",
      color: "from-divine-saffron to-divine-saffron-dark",
    },
    {
      icon: Heart,
      title: t.supportUs.title,
      description: t.supportUs.description,
      href: "/donations",
      color: "from-divine-gold to-divine-gold-dark",
    },
    {
      icon: Sparkles,
      title: t.aartiBhajans.title,
      description: t.aartiBhajans.description,
      href: "/aarti-bhajans",
      color: "from-divine-saffron-dark to-divine-saffron",
    },
    {
      icon: Users,
      title: t.community.title,
      description: t.community.description,
      href: "/events",
      color: "from-divine-gold-dark to-divine-gold",
    },
  ];
  return (
    <section 
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
      style={{
        background: GRADIENTS.dark,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            {t.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                href={feature.href}
                className="group p-5 sm:p-6 md:p-8 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {language === "en" && (
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                )}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

