"use client";

import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import Link from "next/link";
import { HeroWithSideImages } from "@/components/hero-side-images";
import { Heart, BookOpen, Music, Sparkles, Play, ArrowRight, Flame, FileText } from "lucide-react";

const DEVOTION_HERO_IMAGES = {
  left: "/devotion/Devotion%20to%20Sai%20Baba%20Right.webp",
  right: "/devotion/Devotion%20to%20Sai%20Baba%20Left.webp",
} as const;

export default function DevotionPage() {
  const { language } = useLanguage();
  const t = translations[language].devotion;

  const practices = [
    {
      icon: Sparkles,
      title: t.dailyPractices.dailyAarti.title,
      description: t.dailyPractices.dailyAarti.description,
    },
    {
      icon: BookOpen,
      title: t.dailyPractices.saiSatcharitra.title,
      description: t.dailyPractices.saiSatcharitra.description,
    },
    {
      icon: Music,
      title: t.dailyPractices.mantrasStotrams.title,
      description: t.dailyPractices.mantrasStotrams.description,
    },
    {
      icon: Heart,
      title: t.dailyPractices.naamJap.title,
      description: t.dailyPractices.naamJap.description,
    },
  ];

  const mantras = [
    t.mantras.mantra1,
    t.mantras.mantra2,
    t.mantras.mantra3,
  ];

  const audioItems = [
    { name: t.audio.kakad, duration: "4:30" },
    { name: t.audio.madhyan, duration: "3:45" },
    { name: t.audio.dhoop, duration: "5:20" },
    { name: t.audio.shej, duration: "4:15" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: GRADIENTS.dark,
            }}
          />
        </div>

        <HeroWithSideImages
          leftImage={DEVOTION_HERO_IMAGES.left}
          rightImage={DEVOTION_HERO_IMAGES.right}
          imageAlt="Devotion to Sai Baba"
        >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 900,
                }}
              >
                {t.hero.heading}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                {t.hero.subheading}
              </p>
              <blockquote
                className="text-lg md:text-xl text-white/95 italic mb-8 max-w-2xl mx-auto"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                &ldquo;{t.hero.quote}&rdquo;
              </blockquote>
              <Link
                href="/aarti-bhajans"
                className={`inline-flex items-center gap-2 px-8 py-4 bg-white text-divine-saffron rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${language === "ta" ? "gap-0" : ""}`}
              >
                {t.hero.cta}
                {language === "en" && <ArrowRight className="w-5 h-5" />}
              </Link>
        </HeroWithSideImages>
      </section>

      {/* Daily Devotional Practices */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            {t.dailyPractices.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {practices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40 hover:shadow-lg transition-shadow"
                >
                  {language === "en" && (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-divine-saffron to-divine-saffron-dark flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{practice.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{practice.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sai Baba Mantras Section */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.mantras.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              {t.mantras.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {mantras.map((mantra, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40 text-center"
                >
                  <p className="text-lg md:text-xl font-semibold text-divine-saffron">{mantra}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-6 py-3 bg-divine-saffron text-white rounded-full font-semibold hover:bg-divine-saffron-dark transition-colors flex items-center justify-center gap-2 ${language === "ta" ? "gap-0" : ""}`}>
                {language === "en" && <FileText className="w-5 h-5" />}
                {t.mantras.readAll}
              </button>
              <button className={`px-6 py-3 bg-white text-divine-saffron border-2 border-divine-saffron rounded-full font-semibold hover:bg-divine-cream transition-colors flex items-center justify-center gap-2 ${language === "ta" ? "gap-0" : ""}`}>
                {language === "en" && <Play className="w-5 h-5" />}
                {t.mantras.listenChanting}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Devotional Reading (Parayanam) */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Content */}
              <div className="flex-1 lg:w-[60%]">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6 text-white"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 900,
                  }}
                >
                  {t.parayanam.title}
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                  {t.parayanam.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`px-6 py-3 bg-white text-divine-saffron rounded-full font-semibold hover:bg-divine-cream transition-colors flex items-center justify-center gap-2 ${language === "ta" ? "gap-0" : ""}`}>
                    {language === "en" && <BookOpen className="w-5 h-5" />}
                    {t.parayanam.startReading}
                  </button>
                  <button className={`px-6 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 rounded-full font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2 ${language === "ta" ? "gap-0" : ""}`}>
                    {language === "en" && <FileText className="w-5 h-5" />}
                    {t.parayanam.viewIndex}
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 w-full lg:w-[30%] max-w-md mx-auto lg:mx-0">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                  <img
                    src="/saibaba.webp"
                    alt="Sai Baba"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error("Image failed to load:", "/saibaba.webp");
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bhajans & Aarti Audio */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.audio.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              {t.audio.description}
            </p>

            <div className="space-y-4">
              {audioItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40 hover:shadow-lg transition-shadow flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {language === "en" && (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-divine-saffron to-divine-saffron-dark flex items-center justify-center">
                        <Music className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.duration}</p>
                    </div>
                  </div>
                  <button className={`px-6 py-2 bg-divine-saffron text-white rounded-full font-medium hover:bg-divine-saffron-dark transition-colors flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}>
                    {language === "en" && <Play className="w-4 h-4" />}
                    {t.audio.play}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Daily Sai Message */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg border border-white/30">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6 text-divine-saffron text-center"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 900,
                }}
              >
                {t.dailyMessage.title}
              </h2>
              <blockquote
                className="text-xl md:text-2xl text-gray-800 italic text-center leading-relaxed"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                &ldquo;{t.dailyMessage.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Devotion Call-to-Action */}
      <section
        className="py-20 relative overflow-hidden"
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
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className={`px-8 py-4 bg-divine-saffron text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}>
                {language === "en" && <Flame className="w-5 h-5" />}
                {t.cta.lightLamp}
              </button>
              <button className={`px-8 py-4 bg-white text-divine-saffron border-2 border-divine-saffron rounded-full font-semibold text-lg hover:bg-divine-cream transition-colors duration-300 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}>
                {language === "en" && <Heart className="w-5 h-5" />}
                {t.cta.offerPrayers}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
