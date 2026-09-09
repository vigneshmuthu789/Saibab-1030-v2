"use client";

import { EventsList } from "@/components/events-list";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function EventsPage() {
  const { language } = useLanguage();
  const t = translations[language].upcomingEvents;

  return (
    <div
      className="min-h-screen py-16"
      style={{
        background: GRADIENTS.light,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h1
            className="text-5xl font-bold mb-4 text-gray-800"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            {t.title}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div
          className="mx-auto mb-8 md:mb-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-52 sm:h-60 md:h-72 lg:h-80 bg-center bg-contain bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/events/background.jpeg')",
          }}
          aria-hidden
        />

        <EventsList />
      </div>
    </div>
  );
}

