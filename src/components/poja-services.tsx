"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Users } from "lucide-react";

const poojaServices = [
  {
    id: 1,
    name: "Abhishekam",
    duration: "1 hour",
    description:
      "Sacred bathing ceremony of the deity with milk, honey, and holy water.",
    price: "₹2,000",
    icon: Sparkles,
  },
  {
    id: 2,
    name: "Sai Baba Aarti",
    duration: "30 minutes",
    description:
      "Special aarti ceremony with lamps, flowers, and devotional songs.",
    price: "₹1,000",
    icon: Sparkles,
  },
  {
    id: 3,
    name: "Homa (Fire Ritual)",
    duration: "2 hours",
    description:
      "Sacred fire ritual for peace, prosperity, and spiritual purification.",
    price: "₹5,000",
    icon: Sparkles,
  },
  {
    id: 4,
    name: "Sai Baba Pooja",
    duration: "1.5 hours",
    description:
      "Complete pooja with mantras, flowers, and prasad distribution.",
    price: "₹3,000",
    icon: Sparkles,
  },
  {
    id: 5,
    name: "Special Occasion Pooja",
    duration: "2 hours",
    description:
      "Customized pooja for birthdays, anniversaries, or special milestones.",
    price: "₹4,000",
    icon: Sparkles,
  },
  {
    id: 6,
    name: "Group Pooja",
    duration: "2.5 hours",
    description:
      "Community pooja for groups of 10 or more devotees.",
    price: "₹10,000",
    icon: Users,
  },
];

export function PojaServices() {
  const handleBook = (serviceId: number) => {
    alert(
      `Thank you for your interest! Please contact us to book ${poojaServices.find((s) => s.id === serviceId)?.name}. Om Sai Ram.`
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {poojaServices.map((service) => {
        const Icon = service.icon;
        return (
          <Card key={service.id} className="overflow-hidden">
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-divine-saffron to-divine-saffron-dark flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {service.name}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center gap-4 mb-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-divine-saffron" />
                  <span>{service.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-divine-cream">
                <span className="text-2xl font-bold text-divine-saffron">
                  {service.price}
                </span>
                <Button
                  onClick={() => handleBook(service.id)}
                  className="bg-gradient-to-r from-divine-saffron to-divine-saffron-dark hover:opacity-90"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}


