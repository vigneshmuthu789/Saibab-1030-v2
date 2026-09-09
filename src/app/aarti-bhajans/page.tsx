"use client";

import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import Link from "next/link";
import { HeroWithSideImages } from "@/components/hero-side-images";
import { Music, Play, FileText, Download, Heart, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function AartiBhajansPage() {
  const { language } = useLanguage();
  const t = translations[language].aartiBhajans;
  const [expandedAarti, setExpandedAarti] = useState<string | null>(null);

  const aartis = [
    {
      id: "kakad",
      title: t.aartiDetails.kakad.title,
      time: t.aartiDetails.kakad.time,
      description: t.aartiDetails.kakad.description,
      listenAudio: t.aartiDetails.kakad.listenAudio,
      readLyrics: t.aartiDetails.kakad.readLyrics,
      download: t.aartiDetails.kakad.download,
      hasDownload: true,
    },
    {
      id: "madhyan",
      title: t.aartiDetails.madhyan.title,
      time: t.aartiDetails.madhyan.time,
      description: t.aartiDetails.madhyan.description,
      listenAudio: t.aartiDetails.madhyan.listenAudio,
      readLyrics: t.aartiDetails.madhyan.readLyrics,
      hasDownload: false,
    },
    {
      id: "dhoop",
      title: t.aartiDetails.dhoop.title,
      time: t.aartiDetails.dhoop.time,
      description: t.aartiDetails.dhoop.description,
      listenAudio: t.aartiDetails.dhoop.listenAudio,
      readLyrics: t.aartiDetails.dhoop.readLyrics,
      hasDownload: false,
    },
    {
      id: "shej",
      title: t.aartiDetails.shej.title,
      time: t.aartiDetails.shej.time,
      description: t.aartiDetails.shej.description,
      listenAudio: t.aartiDetails.shej.listenAudio,
      readLyrics: t.aartiDetails.shej.readLyrics,
      hasDownload: false,
    },
  ];

  const bhajans = [
    {
      title: t.bhajans.bhajan1.title,
      duration: t.bhajans.bhajan1.duration,
      type: t.bhajans.exampleType,
    },
    {
      title: t.bhajans.bhajan2.title,
      duration: t.bhajans.bhajan2.duration,
      type: t.bhajans.exampleType,
    },
    {
      title: t.bhajans.bhajan3.title,
      duration: t.bhajans.bhajan3.duration,
      type: t.bhajans.exampleType,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden flex items-center"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        <HeroWithSideImages>
          {language === "en" && (
            <div className="mb-6 inline-flex items-center justify-center">
              <Music className="w-12 h-12 md:w-16 md:h-16 text-white mb-4" />
            </div>
          )}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            {t.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subheading}
          </p>
        </HeroWithSideImages>
      </section>

      {/* Daily Aarti Schedule Section */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.dailySchedule.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              {t.dailySchedule.intro}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                <thead>
                  <tr
                    style={{
                      background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                    }}
                  >
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">
                      {t.dailySchedule.aartiName}
                    </th>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">
                      {t.dailySchedule.time}
                    </th>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">
                      {t.dailySchedule.description}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white/95">
                    <td className="px-6 py-4 text-gray-800 font-medium">{t.dailySchedule.kakad}</td>
                    <td className="px-6 py-4 text-divine-saffron font-semibold">{t.dailySchedule.kakadTime}</td>
                    <td className="px-6 py-4 text-gray-700">{t.dailySchedule.kakadDesc}</td>
                  </tr>
                  <tr className="bg-white/90">
                    <td className="px-6 py-4 text-gray-800 font-medium">{t.dailySchedule.madhyan}</td>
                    <td className="px-6 py-4 text-divine-saffron font-semibold">{t.dailySchedule.madhyanTime}</td>
                    <td className="px-6 py-4 text-gray-700">{t.dailySchedule.madhyanDesc}</td>
                  </tr>
                  <tr className="bg-white/95">
                    <td className="px-6 py-4 text-gray-800 font-medium">{t.dailySchedule.dhoop}</td>
                    <td className="px-6 py-4 text-divine-saffron font-semibold">{t.dailySchedule.dhoopTime}</td>
                    <td className="px-6 py-4 text-gray-700">{t.dailySchedule.dhoopDesc}</td>
                  </tr>
                  <tr className="bg-white/90">
                    <td className="px-6 py-4 text-gray-800 font-medium">{t.dailySchedule.shej}</td>
                    <td className="px-6 py-4 text-divine-saffron font-semibold">{t.dailySchedule.shejTime}</td>
                    <td className="px-6 py-4 text-gray-700">{t.dailySchedule.shejDesc}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm md:text-base">
              {t.dailySchedule.note}
            </p>
          </div>
        </div>
      </section>

      {/* Aarti Sections (Accordion) */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {aartis.map((aarti) => (
              <div
                key={aarti.id}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedAarti(expandedAarti === aarti.id ? null : aarti.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {language === "en" && <Music className="w-6 h-6 text-divine-saffron" />}
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">{aarti.title}</h3>
                      <p className="text-sm text-gray-600">{aarti.time}</p>
                    </div>
                  </div>
                  <span className="text-2xl text-divine-saffron">
                    {expandedAarti === aarti.id ? "−" : "+"}
                  </span>
                </button>
                {expandedAarti === aarti.id && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-gray-700 mb-4 mt-4 leading-relaxed">{aarti.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {"listenAudio" in aarti && (
                        <button className={`flex items-center gap-2 px-4 py-2 bg-divine-saffron text-white rounded-lg font-medium hover:bg-divine-saffron-dark transition-colors ${language === "ta" ? "gap-0" : ""}`}>
                          {language === "en" && <Play className="w-4 h-4" />}
                          {aarti.listenAudio}
                        </button>
                      )}
                      {"readLyrics" in aarti && (
                        <button className={`flex items-center gap-2 px-4 py-2 bg-white text-divine-saffron border-2 border-divine-saffron rounded-lg font-medium hover:bg-divine-cream transition-colors ${language === "ta" ? "gap-0" : ""}`}>
                          {language === "en" && <FileText className="w-4 h-4" />}
                          {aarti.readLyrics}
                        </button>
                      )}
                      {aarti.hasDownload && "download" in aarti && (
                        <button className={`flex items-center gap-2 px-4 py-2 bg-white text-divine-saffron border-2 border-divine-saffron rounded-lg font-medium hover:bg-divine-cream transition-colors ${language === "ta" ? "gap-0" : ""}`}>
                          {language === "en" && <Download className="w-4 h-4" />}
                          {aarti.download}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bhajans Section */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.bhajans.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              {t.bhajans.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bhajans.map((bhajan, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <div className="text-center md:text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{bhajan.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {t.bhajans.exampleType} • {bhajan.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-divine-saffron text-white rounded-lg font-medium hover:bg-divine-saffron-dark transition-colors ${language === "ta" ? "gap-0" : ""}`}>
                      {language === "en" && <Play className="w-4 h-4" />}
                      {t.bhajans.play}
                    </button>
                    {language === "en" && (
                      <>
                        <button className="px-4 py-2 bg-white text-divine-saffron border-2 border-divine-saffron rounded-lg hover:bg-divine-cream transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 bg-white text-divine-saffron border-2 border-divine-saffron rounded-lg hover:bg-divine-cream transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
              {t.cta.heading}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.cta.copy}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/donations"
                className={`group px-8 py-4 bg-divine-saffron text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
              >
                {language === "en" && <Heart className="w-5 h-5" />}
                {t.cta.donateNow}
                {language === "en" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </Link>
              <Link
                href="/events"
                className={`px-8 py-4 bg-white text-divine-saffron border-2 border-divine-saffron rounded-full font-semibold text-lg hover:bg-divine-cream transition-colors duration-300 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
              >
                {language === "en" && <Calendar className="w-5 h-5" />}
                {t.cta.joinAarti}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section
        className="py-12"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-xl md:text-2xl text-white italic font-medium"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              &ldquo;{t.footer.quote}&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
