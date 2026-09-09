import { PojaServices } from "@/components/poja-services";
import { Sparkles } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";

export default function PojaPage() {
  return (
    <div 
      className="min-h-screen py-16"
      style={{
        background: GRADIENTS.light
      }}
    >
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <Sparkles className="w-16 h-16 text-divine-saffron mx-auto mb-4" />
        <h1 
          className="text-5xl font-bold mb-4 text-gray-800"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 900,
          }}
        >
          Pooja Services
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Book special poojas and seek divine blessings
        </p>
      </div>
        <PojaServices />
      </div>
    </div>
  );
}

