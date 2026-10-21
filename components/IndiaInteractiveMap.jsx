"use client";

import { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { MapPin, Compass, ArrowRight, Sparkles, Star, Thermometer, Calendar } from "lucide-react";

const MAP_HOTSPOTS = [
  {
    id: "ladakh",
    name: "Ladakh",
    x: 42,
    y: 12,
    tag: "High Mountain Desert",
    highlight: "Pangong Tso & Ancient Monasteries",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80",
    temp: "12°C",
    season: "Peak Summer",
    vibe: "Adventure & Peace",
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    x: 43,
    y: 20,
    tag: "Dev Bhoomi",
    highlight: "Solang Valley, Atal Tunnel & Manali",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
    temp: "16°C",
    season: "Pleasant",
    vibe: "Snow & Pine Forests",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    x: 48,
    y: 26,
    tag: "Yoga & Holy Ganga",
    highlight: "Rishikesh Rapids & Himalayan Ashrams",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=600&q=80",
    temp: "20°C",
    season: "Spring / Autumn",
    vibe: "Spiritual Adrenaline",
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    x: 28,
    y: 35,
    tag: "Land of Forts & Kings",
    highlight: "Hawa Mahal, Amber Fort & Lake Pichola",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
    temp: "26°C",
    season: "Golden Winter",
    vibe: "Royal Aristocracy",
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    x: 52,
    y: 37,
    tag: "Spiritual Soul & Taj",
    highlight: "Taj Mahal Agra & Varanasi Ganga Aarti",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    temp: "25°C",
    season: "Cultural High Season",
    vibe: "Eternal Heritage",
  },
  {
    id: "goa",
    name: "Goa",
    x: 31,
    y: 69,
    tag: "Sun, Sand & Spice",
    highlight: "Vagator Cliffs & Portuguese Quarters",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80",
    temp: "29°C",
    season: "Tropical Sun",
    vibe: "Coastal Bohemia",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    x: 39,
    y: 72,
    tag: "One State, Many Worlds",
    highlight: "UNESCO Hampi Stone Chariot & Temples",
    image: "https://images.unsplash.com/photo-1600100397608-f010f443b740?auto=format&fit=crop&w=600&q=80",
    temp: "27°C",
    season: "Heritage Season",
    vibe: "Ancient Monoliths",
  },
  {
    id: "kerala",
    name: "Kerala",
    x: 40,
    y: 86,
    tag: "God's Own Country",
    highlight: "Alleppey Houseboats & Munnar Hills",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
    temp: "28°C",
    season: "Backwater Glow",
    vibe: "Tropical Rejuvenation",
  },
];

export default function IndiaInteractiveMap() {
  const [selectedSpot, setSelectedSpot] = useState(MAP_HOTSPOTS[3]); // Default Rajasthan
  const { openTripPlannerWithState } = useApp();

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-12 border border-white/10 space-y-10 bg-gradient-to-br from-gray-950 via-[#070d1a] to-gray-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Compass className="w-4 h-4 text-amber-400" />
            Interactive Geolocation Radar
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Interactive Map of Bharat
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-1">
            Hover or tap hotspots on the cartographic radar to inspect live climate metrics, signature landmarks, and launch instant itineraries.
          </p>
        </div>

        {/* Quick state selector chips */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {MAP_HOTSPOTS.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelectedSpot(spot)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedSpot.id === spot.id
                  ? "bg-amber-500 text-gray-950 shadow-md shadow-amber-500/20 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {spot.name}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Map Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG Cartographic Board */}
        <div className="lg:col-span-7 relative aspect-[4/5] max-h-[580px] mx-auto w-full max-w-md bg-gray-900/60 rounded-3xl border border-white/10 p-4 shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Subtle Grid Radar Canvas */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Radar Circles */}
          <div className="absolute w-[440px] h-[440px] rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] rounded-full border border-amber-500/10 pointer-events-none" />

          {/* India Vector Outline Stylized Silhouette */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full filter drop-shadow-[0_0_15px_rgba(245,158,11,0.15)] select-none"
          >
            {/* Abstract connected constellation path representing India's shape */}
            <path
              d="M 44,8 L 52,14 L 56,18 L 52,24 L 64,28 L 76,32 L 88,32 L 92,36 L 86,40 L 76,40 L 72,44 L 66,42 L 62,48 L 60,56 L 56,64 L 52,76 L 46,92 L 40,88 L 36,78 L 32,70 L 30,58 L 22,50 L 18,44 L 20,38 L 26,34 L 34,30 L 38,20 Z"
              fill="rgba(17, 24, 39, 0.85)"
              stroke="rgba(245, 158, 11, 0.4)"
              strokeWidth="0.8"
              strokeDasharray="2 1"
            />
            {/* North-East projection */}
            <path
              d="M 68,34 L 84,33 L 94,36 L 88,42 L 74,42 Z"
              fill="rgba(17, 24, 39, 0.7)"
              stroke="rgba(16, 185, 129, 0.3)"
              strokeWidth="0.6"
            />
          </svg>

          {/* Glowing Interactive Hotspots */}
          {MAP_HOTSPOTS.map((spot) => {
            const isSelected = selectedSpot.id === spot.id;
            return (
              <div
                key={spot.id}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                onClick={() => setSelectedSpot(spot)}
                onMouseEnter={() => setSelectedSpot(spot)}
              >
                {/* Ping wave */}
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isSelected
                      ? "bg-amber-400 ring-4 ring-amber-400/30 scale-125"
                      : "bg-emerald-400/80 group-hover:scale-125 group-hover:bg-amber-400"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-950" />
                </div>

                {/* Hotspot label */}
                <span
                  className={`absolute left-5 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-amber-500 text-gray-950 shadow-lg scale-105"
                      : "bg-gray-950/80 text-gray-300 border border-white/10 opacity-70 group-hover:opacity-100"
                  }`}
                >
                  {spot.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Selected State Teleport Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-3xl overflow-hidden border border-white/15 bg-gray-900/90 shadow-2xl space-y-5">
            {/* Image Preview */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={selectedSpot.image}
                alt={selectedSpot.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-white/10">
                {selectedSpot.tag}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Selected Geolocation
                </span>
                <h3 className="text-3xl font-black text-white">
                  {selectedSpot.name}
                </h3>
              </div>
            </div>

            {/* Metrics */}
            <div className="p-6 pt-0 space-y-5">
              <p className="text-sm text-gray-300 font-medium">
                🌟 <strong>Signature Landmark:</strong> {selectedSpot.highlight}
              </p>

              <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-white/10 text-center">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-gray-400 block font-semibold">Climate</span>
                  <strong className="text-sm text-amber-400 flex items-center justify-center gap-1 mt-0.5">
                    <Thermometer className="w-3.5 h-3.5" />
                    {selectedSpot.temp}
                  </strong>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-gray-400 block font-semibold">Season</span>
                  <strong className="text-xs text-emerald-400 block mt-0.5 truncate font-bold">
                    {selectedSpot.season}
                  </strong>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-gray-400 block font-semibold">Travel Vibe</span>
                  <strong className="text-xs text-white block mt-0.5 truncate font-bold">
                    {selectedSpot.vibe}
                  </strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href={`/states/${selectedSpot.id}`}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black text-xs text-center shadow-lg shadow-amber-500/20 flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Teleport to {selectedSpot.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => openTripPlannerWithState(selectedSpot.id)}
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Plan AI trip"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>AI Plan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
