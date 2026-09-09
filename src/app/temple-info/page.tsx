"use client";

import { GRADIENTS } from "@/lib/constants";
import { TempleMap } from "@/components/temple-map";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Heart } from "lucide-react";

const TEMPLE_IMAGES = [
  "/temple/Temple%20Info%20Image%201.webp",
  "/temple/Temple%20Info%20Image%202.webp",
  "/temple/Temple%20Info%20Image%203.webp",
  "/temple/Temple%20Info%20Image%204.webp",
  "/temple/Temple%20Info%20Image%205.webp",
  "/temple/Temple%20Info%20Image%206.webp",
] as const;

export default function TempleInfoPage() {
  const { language } = useLanguage();
  const t = translations[language].templeInfo;
  const contactT = translations[language].contact;

  const sections = [
    {
      id: 1,
      heading: t.section1.heading,
      copy: t.section1.copy,
      layout: "left-image",
      image: TEMPLE_IMAGES[2],
    },
    {
      id: 2,
      heading: t.section2.heading,
      layout: "right-image",
      timings: true,
      image: TEMPLE_IMAGES[1],
    },
    {
      id: 8,
      heading: t.section8.heading,
      layout: "center",
      poojaDetails: true,
    },
    {
      id: 9,
      heading: t.section9.heading,
      layout: "center",
      festivals: true,
    },
    {
      id: 3,
      heading: t.section3.heading,
      copy: t.section3.copy,
      layout: "left-image",
      darshan: true,
      image: TEMPLE_IMAGES[2],
    },
    {
      id: 4,
      heading: t.section4.heading,
      layout: "right-image",
      transport: true,
      image: TEMPLE_IMAGES[3],
    },
    {
      id: 5,
      heading: t.section5.heading,
      layout: "left-image",
      facilities: true,
      image: TEMPLE_IMAGES[4],
    },
    {
      id: 6,
      heading: t.section6.heading,
      layout: "right-image",
      guidelines: true,
      image: TEMPLE_IMAGES[5],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div 
        className="py-16"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
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
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, index) => {
        const isEven = index % 2 === 1;
        const bgGradient = isEven ? GRADIENTS.light : GRADIENTS.dark;
        const textColor = isEven ? "text-gray-800" : "text-white";
        const headingColor = isEven ? "text-divine-saffron" : "text-white";

        return (
          <section
            key={section.id}
            className="py-12 sm:py-16 md:py-20"
            style={{
              background: bgGradient,
            }}
          >
            <div className="container mx-auto px-4">
              <div
                className={`flex flex-col ${
                  section.layout === "center" 
                    ? "items-center max-w-5xl mx-auto" 
                    : section.layout === "left-image" 
                    ? "lg:flex-row" 
                    : "lg:flex-row-reverse"
                } items-center gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto`}
              >
                {/* Image - Hidden for center layout */}
                {section.layout !== "center" && section.image && (
                <div className="flex-shrink-0 w-full lg:w-[30%] max-w-md mx-auto lg:mx-0">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                    <Image
                      src={section.image}
                      alt={section.heading}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                  </div>
                </div>
                )}

                {/* Content */}
                <div className={section.layout === "center" ? "w-full" : "flex-1 lg:w-[70%]"}>
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${section.layout === "center" ? "text-center" : ""} ${headingColor}`}
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 900,
                    }}
                  >
                    {section.heading}
                  </h2>

                  {section.copy && (
                    <p
                      className={`text-base sm:text-lg md:text-xl leading-relaxed ${textColor} ${
                        isEven ? "text-gray-700" : "text-white/90"
                      }`}
                    >
                      {section.copy}
                    </p>
                  )}

                  {section.timings && (
                    <div className="w-full">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                          <thead>
                            <tr
                              style={{
                                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                              }}
                            >
                              <th className="px-6 py-4 text-left text-white font-bold text-lg">
                                {t.section2.activity}
                              </th>
                              <th className="px-6 py-4 text-left text-white font-bold text-lg">
                                {t.section2.time}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white/95">
                              <td className="px-6 py-4 text-gray-800 font-medium">{t.section2.opening}</td>
                              <td className="px-6 py-4 text-divine-saffron font-semibold">{t.section2.openingTime}</td>
                            </tr>
                            <tr className="bg-white/90">
                              <td className="px-6 py-4 text-gray-800 font-medium">{t.section2.darshan}</td>
                              <td className="px-6 py-4 text-divine-saffron font-semibold">{t.section2.darshanTime}</td>
                            </tr>
                            <tr className="bg-white/95">
                              <td className="px-6 py-4 text-gray-800 font-medium">{t.section2.closing}</td>
                              <td className="px-6 py-4 text-divine-saffron font-semibold">{t.section2.closingTime}</td>
                            </tr>
                            <tr className="bg-white/90">
                              <td className="px-6 py-4 text-gray-800 font-medium">{t.section2.weeklyHoliday}</td>
                              <td className="px-6 py-4 text-divine-saffron font-semibold">{t.section2.noHoliday}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className={`text-base mt-4 ${isEven ? "text-gray-600" : "text-white/80"}`}>
                        {t.section2.note}
                      </p>
                    </div>
                  )}

                  {section.darshan && (
                    <div className={`space-y-4 ${textColor}`}>
                      <p className="text-lg md:text-xl leading-relaxed">
                        {t.section3.copy}
                      </p>
                      <div className="space-y-2 mt-4">
                        <p className="text-lg font-semibold">• {t.section3.generalDarshan}</p>
                        <p className="text-lg font-semibold">• {t.section3.specialDarshan}</p>
                      </div>
                    </div>
                  )}

                  {section.transport && (
                    <div className={`space-y-4 ${textColor}`}>
                      <p className="text-lg md:text-xl leading-relaxed">
                        {t.section4.addressLine}
                      </p>
                      <div className="rounded-xl overflow-hidden border border-amber-200/40 bg-white shadow-md p-4 md:p-6">
                        <TempleMap title={contactT.map.title} />
                      </div>
                    </div>
                  )}

                  {section.facilities && (
                    <div className={`space-y-3 ${textColor}`}>
                      <p className="text-lg md:text-xl">• {t.section5.queueHalls}</p>
                      <p className="text-lg md:text-xl">• {t.section5.prasad}</p>
                      <p className="text-lg md:text-xl">• {t.section5.wheelchair}</p>
                      <p className="text-lg md:text-xl">• {t.section5.shoeStand}</p>
                    </div>
                  )}

                  {section.guidelines && (
                    <div className={`space-y-3 ${textColor}`}>
                      <p className="text-lg md:text-xl">• {t.section6.dress}</p>
                      <p className="text-lg md:text-xl">• {t.section6.silence}</p>
                      <p className="text-lg md:text-xl">• {t.section6.instructions}</p>
                      <p className="text-lg md:text-xl">• {t.section6.photography}</p>
                    </div>
                  )}

                  {section.poojaDetails && (
                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-xl border-2 border-amber-200/40 shadow-md hover:shadow-lg transition-shadow">
                        <p className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.section8.dailyPooja}</p>
                        <p className="text-lg md:text-xl text-divine-saffron">{t.section8.dailyPoojaTime}</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border-2 border-amber-200/40 shadow-md hover:shadow-lg transition-shadow">
                        <p className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.section8.weeklySpecialPooja}</p>
                        <p className="text-lg md:text-xl text-divine-saffron">{t.section8.weeklySpecialPoojaTime}</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border-2 border-amber-200/40 shadow-md hover:shadow-lg transition-shadow">
                        <p className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.section8.thursdaySpecialPooja}</p>
                        <p className="text-lg md:text-xl text-divine-saffron">{t.section8.thursdaySpecialPoojaTime}</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border-2 border-amber-200/40 shadow-md hover:shadow-lg transition-shadow">
                        <p className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.section8.abhishekam}</p>
                        <p className="text-lg md:text-xl text-divine-saffron">{t.section8.abhishekamTime}</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border-2 border-amber-200/40 shadow-md hover:shadow-lg transition-shadow">
                        <p className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.section8.aartiTimings}</p>
                        <p className="text-lg md:text-xl mb-1 text-divine-saffron">{t.section8.aartiMorning}</p>
                        <p className="text-lg md:text-xl text-divine-saffron">{t.section8.aartiEvening}</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border-2 border-amber-200/40 shadow-md hover:shadow-lg transition-shadow">
                        <p className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.section8.annadhanam}</p>
                        <p className="text-lg md:text-xl text-divine-saffron">{t.section8.annadhanamTime}</p>
                      </div>
                    </div>
                  )}

                  {section.festivals && (
                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-xl border-2 border-amber-200/40 shadow-md hover:shadow-lg transition-shadow">
                        <p className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.section9.monthlySpecial}</p>
                        <p className="text-lg md:text-xl text-divine-saffron">{t.section9.monthlySpecialValue}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Section 7: Visit CTA */}
      <section
        className="py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.section7.heading}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              {t.section7.blessing}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/aarti-bhajans"
                className={`group px-8 py-4 bg-divine-saffron text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
              >
                {language === "en" && <Calendar className="w-5 h-5" />}
                {t.section7.viewAarti}
                {language === "en" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </Link>
              <Link
                href="/events"
                className={`px-8 py-4 bg-white text-divine-saffron border-2 border-divine-saffron rounded-full font-semibold text-lg hover:bg-divine-cream transition-colors duration-300 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
              >
                {language === "en" && <Heart className="w-5 h-5" />}
                {t.section7.upcomingEvents}
              </Link>
              <Link
                href="/donations"
                className={`px-8 py-4 bg-white text-divine-saffron border-2 border-divine-saffron rounded-full font-semibold text-lg hover:bg-divine-cream transition-colors duration-300 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
              >
                {language === "en" && <Heart className="w-5 h-5" />}
                {t.section7.donations}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
