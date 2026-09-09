"use client";

import { useState } from "react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function AboutSaiBabaPage() {
  const { language } = useLanguage();
  const t = translations[language].about;
  const [section1Expanded, setSection1Expanded] = useState(false);

  const sections = [
    {
      id: 1,
      heading: t.section1.heading,
      layout: "left-content",
      image: "/about/01About Sai Baba .webp",
      expandable: true,
      copyPreview: t.section1.copyPreview,
      expandedParagraphs: t.section1.expandedParagraphs,
    },
    {
      id: 2,
      heading: t.section2.heading,
      copy: t.section2.copy,
      layout: "right-content",
      image: "/about/02About Sai Baba .webp",
    },
    {
      id: 3,
      heading: t.section3.heading,
      copy: t.section3.copy,
      layout: "left-content",
      image: "/about/03About Sai Baba .jpg",
    },
    {
      id: 4,
      heading: t.section4.heading,
      copy: t.section4.copy,
      layout: "right-content",
      image: "/about/04About Sai Baba .webp",
    },
    {
      id: 5,
      heading: t.section5.heading,
      quote: t.section5.quote,
      copy: t.section5.copy,
      layout: "left-content",
      image: "/about/05About Sai Baba .webp",
    },
    {
      id: 6,
      heading: t.section6.heading,
      copy: t.section6.copy,
      layout: "right-content",
      image: "/about/06About Sai Baba .webp",
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
        const bodyTextClass = `text-lg md:text-xl leading-relaxed ${
          isEven ? "text-gray-700" : "text-white/90"
        }`;
        const readMoreClass = `mt-4 text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-80 ${
          isEven ? "text-divine-saffron" : "text-white"
        }`;

        return (
          <section
            key={section.id}
            className="py-16 md:py-20"
            style={{
              background: bgGradient,
            }}
          >
            <div className="container mx-auto px-4">
              <div
                className={`flex flex-col ${
                  section.layout === "left-content" ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-12 max-w-7xl mx-auto`}
              >
                {/* Content */}
                <div className="flex-1 lg:w-[70%]">
                  <h2
                    className={`text-3xl md:text-4xl font-bold mb-6 ${headingColor}`}
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 900,
                    }}
                  >
                    {section.heading}
                  </h2>

                  {section.quote && (
                    <blockquote
                      className={`text-2xl md:text-3xl font-medium italic mb-6 ${textColor}`}
                      style={{
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      &ldquo;{section.quote}&rdquo;
                    </blockquote>
                  )}

                  {section.expandable ? (
                    <div className={bodyTextClass}>
                      <p>{section.copyPreview}</p>
                      {section1Expanded && (
                        <div className="mt-4 space-y-4">
                          {section.expandedParagraphs?.map((paragraph, paragraphIndex) => (
                            <p key={paragraphIndex}>{paragraph}</p>
                          ))}
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => setSection1Expanded((expanded) => !expanded)}
                        className={readMoreClass}
                        aria-expanded={section1Expanded}
                      >
                        {section1Expanded ? t.readLess : t.readMore}
                      </button>
                    </div>
                  ) : (
                    <p className={bodyTextClass}>{section.copy}</p>
                  )}
                </div>

                {/* Image */}
                <div className="flex-shrink-0 w-full lg:w-[30%] max-w-md mx-auto lg:mx-0">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                    <img
                      src={encodeURI(section.image)}
                      alt={section.heading}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error("Image failed to load:", section.image);
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
