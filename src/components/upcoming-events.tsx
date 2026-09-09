"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function UpcomingEvents() {
  const { language } = useLanguage();
  const t = translations[language].upcomingEvents;

  // Sample events - in a real app, this would come from a database
  const events = [
    {
      title: "Varushabishekhan",
      date: "24th January",
      time: "TBA",
    },
  ];

  return (
    <section 
      className="py-12 sm:py-16 relative"
      style={{
        background: GRADIENTS.dark,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-white text-center"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            {t.title}
          </h2>
          
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-md border border-white/30"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {language === "en" && (
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-divine-saffron to-divine-saffron-dark flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-1">
                        <span className="font-medium">Date:</span> {event.date}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        <span className="font-medium">Time:</span> {event.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-md border border-white/30 text-center">
              <p className="text-gray-700 text-base sm:text-lg">{t.noEvents}</p>
            </div>
          )}

          <div className="text-center">
            <Link
              href="/events"
              className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-divine-saffron rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${language === "ta" ? "gap-0" : ""}`}
            >
              {t.viewAll}
              {language === "en" && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

