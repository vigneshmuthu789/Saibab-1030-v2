"use client";

import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Varushabhishekam",
    date: "24 January",
    location: "Temple Premises",
    showDateIcon: false,
    description: "Join us for the sacred Varushabhishekam celebration.",
    type: "Festival",
  },
  {
    id: 2,
    title: "Ramanavami",
    date: "March",
    description: "Join us for the sacred Ramanavami celebration in March.",
    type: "Festival",
  },
  {
    id: 3,
    title: "Chithra Pournami",
    date: "May",
    description: "Join us for Chithra Pournami celebrations in May.",
    type: "Festival",
  },
  {
    id: 4,
    title: "Guru Purnima",
    date: "June",
    description: "Join us for Guru Purnima celebrations in June.",
    type: "Festival",
  },
  {
    id: 5,
    title: "Navarathri",
    date: "September - October",
    description: "Join us for Navarathri celebrations from September to October.",
    type: "Festival",
  },
  {
    id: 6,
    title: "Shirdi Vijayadasami",
    date: "October",
    description: "Join us for Shirdi Vijayadasami celebrations in October.",
    type: "Festival",
  },
];

export function EventsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <Card
          key={event.id}
          className="overflow-hidden border-amber-200/50 bg-white shadow-md hover:shadow-lg"
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-divine-saffron text-white">
                  {event.type}
                </span>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {event.description}
            </p>

            {event.showDateIcon === false ? (
              <div className="space-y-1 text-gray-700">
                <p className="font-medium">{event.date}</p>
                {event.location ? (
                  <p className="font-medium">{event.location}</p>
                ) : null}
              </div>
            ) : (
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar className="w-5 h-5 text-divine-saffron" />
                <span className="font-medium">{event.date}</span>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
