"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Calendar, MapPin, Camera, ArrowRight, Flame } from "lucide-react";

const FESTIVALS = [
  {
    id: "dev-deepawali",
    name: "Dev Deepawali (Light of Gods)",
    month: "November (Kartik Purnima)",
    location: "Varanasi, Uttar Pradesh",
    stateId: "uttar-pradesh",
    tagline: "1 Million Earthen Lamps Illuminating the Ghats",
    desc: "Celebrated fifteen days after Diwali, all eighty-four ghats of Varanasi are illuminated with more than a million clay diyas. Priests perform synchronised Maha Aarti with conch shells and sacred chants as fireworks light up the Ganga sky.",
    photoTip: "Hire a wooden rowing boat 1 hour before twilight for majestic riverfront silhouettes.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pushkar-fair",
    name: "Pushkar Camel & Desert Fair",
    month: "October - November",
    location: "Pushkar, Rajasthan",
    stateId: "rajasthan",
    tagline: "World's Largest Folk & Livestock Spectacle",
    desc: "Over 50,000 decorated camels, horses, and cattle converge on the golden sand dunes of Pushkar. Vibrant turban-tying contests, Rajasthani puppet dances, hot-air balloon flights, and folk musicians fill the desert air.",
    photoTip: "Sunrise over the Thar dunes with dust-hazed camel caravans is pure magic for photography.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "onam-boat-race",
    name: "Onam & Nehru Trophy Boat Race",
    month: "August - September",
    location: "Punnamada Lake, Kerala",
    stateId: "kerala",
    tagline: "The Thunder of 100-Oar Chundan Vallams",
    desc: "Celebrated to welcome the mythical King Mahabali. Spectacular snake boat races feature 100 synchronized oarsmen singing rhythmic Vanchipattu songs, alongside floral pookkalam carpets and the grand 26-dish Onam Sadya.",
    photoTip: "Secure grandstand pavilion passes early to capture the splashing spray of racing snake boats.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hemis-festival",
    name: "Hemis Tsechu Cham Dance",
    month: "June - July",
    location: "Hemis Monastery, Ladakh",
    stateId: "ladakh",
    tagline: "Sacred Masked Dances in Himalayan Courtyards",
    desc: "Honoring Guru Padmasambhava, Buddhist monks adorned in brocade silk robes and terrifying yet protective mythological papier-mâché masks dance to cymbals, long copper horns, and sacred Tibetan drums.",
    photoTip: "Arrive before 8:30 AM to sit near the central courtyard flag pole for close-up masked dancer portraits.",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FestivalsCalendar() {
  const [selectedFestival, setSelectedFestival] = useState(FESTIVALS[0]);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-12 border border-white/10 space-y-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Flame className="w-4 h-4 text-amber-400" />
            Cultural Living Calendar
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Sacred Festivals & Grand Utsavs
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-1">
            Experience Bharat at its most luminous. Plan your journey around timeless gatherings of devotion, folklore, and colors.
          </p>
        </div>
      </div>

      {/* Festival Selector Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {FESTIVALS.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelectedFestival(f)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              selectedFestival.id === f.id
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-gray-950 font-black shadow-md shadow-amber-500/20 scale-105"
                : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
            }`}
          >
            {f.name.split("(")[0]}
          </button>
        ))}
      </div>

      {/* Featured Festival Showcase Card */}
      <div className="glass-panel rounded-3xl overflow-hidden border border-white/15 bg-gray-900/90 shadow-2xl grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden">
          <img
            src={selectedFestival.image}
            alt={selectedFestival.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-950 via-gray-950/40 to-transparent" />
          
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-white/10 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {selectedFestival.month}
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-10 space-y-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{selectedFestival.location}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {selectedFestival.name}
            </h3>

            <p className="text-sm font-semibold text-amber-300/90 italic">
              "{selectedFestival.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1">
              {selectedFestival.desc}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3 text-xs text-gray-300">
              <Camera className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong>Photography Tip:</strong> {selectedFestival.photoTip}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <Link
              href={`/states/${selectedFestival.stateId}`}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-gray-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 hover:brightness-110 transition-all"
            >
              <span>Explore Host Destination</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
