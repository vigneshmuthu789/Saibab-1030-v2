"use client";

import { Star, Quote as QuoteIcon } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const testimonials = [
    {
      name: t.testimonial1.name,
      location: t.testimonial1.location,
      text: t.testimonial1.text,
      rating: 5,
    },
    {
      name: t.testimonial2.name,
      location: t.testimonial2.location,
      text: t.testimonial2.text,
      rating: 5,
    },
    {
      name: t.testimonial3.name,
      location: t.testimonial3.location,
      text: t.testimonial3.text,
      rating: 5,
    },
  ];
  return (
    <section 
      className="py-20 relative"
      style={{
        background: GRADIENTS.light
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-divine-saffron mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-divine-cream shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <QuoteIcon className="w-10 h-10 text-divine-saffron mb-4 opacity-50" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-divine-gold text-divine-gold"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-divine-cream pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

