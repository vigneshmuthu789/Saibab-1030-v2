"use client";

import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { useState } from "react";
import Link from "next/link";
import { Heart, Calendar, ArrowRight } from "lucide-react";

type FilterType = "all" | "saiBaba" | "templeShirdi" | "aartiRituals" | "festivals" | "devoteeMoments";

export default function GalleryPage() {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filters = [
    { id: "all" as FilterType, label: t.navigation.all },
    { id: "saiBaba" as FilterType, label: t.navigation.saiBaba },
    { id: "templeShirdi" as FilterType, label: t.navigation.templeShirdi },
    { id: "aartiRituals" as FilterType, label: t.navigation.aartiRituals },
    { id: "festivals" as FilterType, label: t.navigation.festivals },
    { id: "devoteeMoments" as FilterType, label: t.navigation.devoteeMoments },
  ];

  const galleryItems = [
    { id: 8, category: "festivals" as const, title: "Festival Moments", src: "/gallery/20260124_195547.jpg.webp" },
    { id: 9, category: "devoteeMoments" as const, title: "Devotee Gatherings", src: "/gallery/20260124_194934.jpg.webp" },
    { id: 10, category: "templeShirdi" as const, title: "Temple View", src: "/gallery/20260124_124907.webp" },
    { id: 11, category: "aartiRituals" as const, title: "Aarti Ritual", src: "/gallery/20260124_094047.webp" },
    { id: 12, category: "aartiRituals" as const, title: "Morning Ritual", src: "/gallery/20260124_094100.webp" },
    { id: 13, category: "devoteeMoments" as const, title: "Devotional Moments", src: "/gallery/20260124_094036.webp" },
    { id: 14, category: "saiBaba" as const, title: "Sai Baba Blessings", src: "/gallery/20260124_090945.webp" },
    { id: 15, category: "templeShirdi" as const, title: "Temple Premises", src: "/gallery/20260124_090758.jpg.webp" },
    { id: 16, category: "festivals" as const, title: "Celebration Highlights", src: "/gallery/20260124_120230.jpg.webp" },
  ];

  const videoItems = [
    { id: 1, title: t.videos.templeMoments, category: "templeShirdi", videoId: "jhLeY3a08QM" },
    { id: 2, title: t.videos.festivalCelebrations, category: "festivals", videoId: "gjTrxwkoneg" },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <blockquote
            className="text-lg md:text-xl text-white/95 italic max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            &ldquo;{t.hero.quote}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Gallery Navigation / Filters */}
      <section
        className="py-12"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.navigation.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-200 ${
                    activeFilter === filter.id
                      ? "bg-divine-saffron text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-divine-cream border-2 border-amber-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 aspect-square"
                >
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error("Image failed to load:", item.src);
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4 font-medium">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No items found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white text-center"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.videos.title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-center max-w-3xl mx-auto">
              {t.videos.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoItems.map((video) => (
                <div
                  key={video.id}
                  className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video"
                >
                  {/* YouTube Video Embed */}
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
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
              {t.cta.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.cta.copy}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/aarti-bhajans"
                className={`group px-8 py-4 bg-divine-saffron text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
              >
                {language === "en" && <Heart className="w-5 h-5" />}
                {t.cta.viewAarti}
                {language === "en" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </Link>
              <Link
                href="/temple-info"
                className={`px-8 py-4 bg-white text-divine-saffron border-2 border-divine-saffron rounded-full font-semibold text-lg hover:bg-divine-cream transition-colors duration-300 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
              >
                {language === "en" && <Calendar className="w-5 h-5" />}
                {t.cta.visitShirdi}
              </Link>
              <Link
                href="/donations"
                className={`px-8 py-4 bg-white text-divine-saffron border-2 border-divine-saffron rounded-full font-semibold text-lg hover:bg-divine-cream transition-colors duration-300 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
              >
                {language === "en" && <Heart className="w-5 h-5" />}
                {t.cta.makeDonation}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
