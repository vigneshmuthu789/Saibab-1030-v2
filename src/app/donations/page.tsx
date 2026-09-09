"use client";

import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { DonationForm } from "@/components/donation-form";
import { HeroWithSideImages } from "@/components/hero-side-images";
import { Heart, ArrowRight, Shield, CheckCircle, Building2, CreditCard } from "lucide-react";
import Link from "next/link";

export default function DonationsPage() {
  const { language } = useLanguage();
  const t = translations[language].donations;

  const categories = [
    {
      icon: "🪔",
      title: t.categories.general.title,
      description: t.categories.general.description,
    },
    {
      icon: "🍚",
      title: t.categories.annadanam.title,
      description: t.categories.annadanam.description,
    },
    {
      icon: "🌼",
      title: t.categories.festival.title,
      description: t.categories.festival.description,
    },
    {
      icon: "🕉",
      title: t.categories.pooja.title,
      description: t.categories.pooja.description,
    },
    {
      icon: "🏗",
      title: t.categories.development.title,
      description: t.categories.development.description,
    },
    {
      icon: "🐄",
      title: t.categories.goshala.title,
      description: t.categories.goshala.description,
    },
  ];

  const transparencyPoints = [
    t.transparency.point1,
    t.transparency.point2,
    t.transparency.point3,
    t.transparency.point4,
  ];

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
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
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link
              href="#donation-form"
              className={`group px-8 py-4 bg-white text-divine-saffron rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 ${language === "ta" ? "gap-0" : ""}`}
            >
              {language === "en" && <Heart className="w-5 h-5" />}
              {t.hero.donateNow}
              {language === "en" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </Link>
            <p className="text-white/80 text-sm md:text-base flex items-center gap-2">
              {language === "en" && <Shield className="w-4 h-4" />}
              {t.hero.secureNote}
            </p>
          </div>
        </HeroWithSideImages>
      </section>

      {/* Why Donate Section */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 900,
                }}
              >
                {t.whyDonate.title}
              </h2>
              <h3
                className="text-2xl md:text-3xl font-bold mb-6 text-divine-saffron"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 900,
                }}
              >
                {t.whyDonate.heading}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                {t.whyDonate.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40">
                <p className="text-lg font-semibold text-gray-800 mb-2">• {t.whyDonate.dailyAarti}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40">
                <p className="text-lg font-semibold text-gray-800 mb-2">• {t.whyDonate.annadanam}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40">
                <p className="text-lg font-semibold text-gray-800 mb-2">• {t.whyDonate.maintenance}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40">
                <p className="text-lg font-semibold text-gray-800 mb-2">• {t.whyDonate.festivals}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40">
                <p className="text-lg font-semibold text-gray-800 mb-2">• {t.whyDonate.charitable}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40">
                <p className="text-lg font-semibold text-gray-800 mb-2">• {t.whyDonate.goshala}</p>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-200/40 text-center">
              <blockquote
                className="text-xl md:text-2xl text-divine-saffron italic mb-4"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                &ldquo;{t.whyDonate.quote}&rdquo;
              </blockquote>
              <p className="text-gray-700 font-semibold">{t.whyDonate.quoteAuthor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Categories Section */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 900,
                }}
              >
                {t.categories.title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90">
                {t.categories.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section
        id="donation-form"
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <DonationForm />
          </div>
        </div>
      </section>

      {/* Bank Details Section */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 900,
                }}
              >
                {t.bankDetails.title}
              </h2>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-200/40">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  {language === "en" && <Building2 className="w-6 h-6 text-divine-saffron flex-shrink-0 mt-1" />}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-600 mb-1">{t.bankDetails.bankName}</p>
                    <p className="text-lg font-bold text-gray-800">{t.bankDetails.bankNameValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  {language === "en" && <Building2 className="w-6 h-6 text-divine-saffron flex-shrink-0 mt-1" />}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-600 mb-1">{t.bankDetails.accountName}</p>
                    <p className="text-lg font-bold text-gray-800">{t.bankDetails.accountNameValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  {language === "en" && <CreditCard className="w-6 h-6 text-divine-saffron flex-shrink-0 mt-1" />}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-600 mb-1">{t.bankDetails.accountNumber}</p>
                    <p className="text-lg font-bold text-gray-800 font-mono">{t.bankDetails.accountNumberValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  {language === "en" && <CreditCard className="w-6 h-6 text-divine-saffron flex-shrink-0 mt-1" />}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-600 mb-1">{t.bankDetails.ifscCode}</p>
                    <p className="text-lg font-bold text-gray-800 font-mono">{t.bankDetails.ifscCodeValue}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-start gap-4">
                    {language === "en" && <CreditCard className="w-6 h-6 text-divine-saffron flex-shrink-0 mt-1" />}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-600 mb-1">{t.bankDetails.paymentMethods}</p>
                      <p className="text-lg text-gray-800">{t.bankDetails.paymentMethodsValue}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Trust Section */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 900,
                }}
              >
                {t.transparency.title}
              </h2>
              <h3
                className="text-2xl md:text-3xl font-bold mb-8 text-divine-saffron"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 900,
                }}
              >
                {t.transparency.heading}
              </h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-200/40 mb-6">
              <div className="space-y-4">
                {transparencyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-divine-saffron flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl md:text-2xl text-divine-saffron font-semibold italic">
                {t.transparency.trustNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blessing Message Section */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-white/20">
              <blockquote
                className="text-2xl md:text-3xl text-white italic mb-6 leading-relaxed"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                &ldquo;{t.blessing.quote}&rdquo;
              </blockquote>
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                {t.blessing.message}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        className="py-16 md:py-20"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.faq.title}
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
