"use client";

import { useState } from "react";
import { calculateDistanceKm, STATE_COORDINATES } from "@/lib/geo";
import { MapPin, Navigation, Car, Train, Plane, Clock, Sparkles } from "lucide-react";

const CITIES = [
  { id: "rajasthan", name: "Jaipur (Rajasthan)", lat: 26.9124, lon: 75.7873 },
  { id: "varanasi", name: "Varanasi (Uttar Pradesh)", lat: 25.3176, lon: 82.9739 },
  { id: "agra", name: "Agra (Uttar Pradesh)", lat: 27.1767, lon: 78.0081 },
  { id: "kerala", name: "Alleppey / Kochi (Kerala)", lat: 9.9312, lon: 76.2673 },
  { id: "himachal", name: "Manali (Himachal Pradesh)", lat: 32.2432, lon: 77.1892 },
  { id: "goa", name: "Panaji (Goa)", lat: 15.4909, lon: 73.8278 },
  { id: "ladakh", name: "Leh (Ladakh)", lat: 34.1526, lon: 77.5771 },
  { id: "karnataka", name: "Hampi / Bengaluru (Karnataka)", lat: 15.3350, lon: 76.4600 },
  { id: "uttarakhand", name: "Rishikesh (Uttarakhand)", lat: 30.0869, lon: 78.2676 },
];

export default function DistanceCalculator() {
  const [fromCity, setFromCity] = useState("rajasthan");
  const [toCity, setToCity] = useState("kerala");

  const from = CITIES.find((c) => c.id === fromCity) || CITIES[0];
  const to = CITIES.find((c) => c.id === toCity) || CITIES[1];

  const straightDistance = calculateDistanceKm(from.lat, from.lon, to.lat, to.lon);
  // Practical road multiplier is approx 1.25x straight distance in India
  const roadKm = Math.round(straightDistance * 1.25);
  const roadHours = Math.round(roadKm / 55); // avg 55 km/h highway speed
  const trainHours = Math.round(roadKm / 65); // avg 65 km/h Indian Railways
  const flightHours = Math.max(1, Math.round(straightDistance / 600 * 10) / 10 + 0.5);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 bg-gradient-to-br from-gray-900/90 via-gray-950 to-gray-900/90">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
            <Navigation className="w-4 h-4" />
            Inter-City Travel Logistics
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            India Distance & Transit Matrix
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Calculate distances and estimated travel hours across iconic Indian regions.
          </p>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-gray-400 block mb-2">
            Origin City / Hub
          </label>
          <div className="relative">
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-gray-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 appearance-none cursor-pointer"
            >
              {CITIES.map((c) => (
                <option key={c.id} value={c.id} disabled={c.id === toCity}>
                  {c.name}
                </option>
              ))}
            </select>
            <MapPin className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-amber-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-gray-400 block mb-2">
            Destination City / Hub
          </label>
          <div className="relative">
            <select
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-gray-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 appearance-none cursor-pointer"
            >
              {CITIES.map((c) => (
                <option key={c.id} value={c.id} disabled={c.id === fromCity}>
                  {c.name}
                </option>
              ))}
            </select>
            <MapPin className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Transit Metrics Card */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center">
          <span className="text-xs text-gray-400 block font-semibold mb-1">Road Distance</span>
          <strong className="text-3xl font-black text-amber-400">{roadKm.toLocaleString()}</strong>
          <span className="text-xs text-gray-400 font-medium"> km</span>
          <span className="text-[10px] text-gray-500 block mt-1">({straightDistance} km aerial)</span>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
          <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center mb-1">
            <Plane className="w-4 h-4" />
          </div>
          <span className="text-xs text-gray-400 font-semibold">Domestic Flight</span>
          <strong className="text-xl font-bold text-white mt-1">~{flightHours} hrs</strong>
          <span className="text-[10px] text-gray-500">Direct / Connecting</span>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-1">
            <Train className="w-4 h-4" />
          </div>
          <span className="text-xs text-gray-400 font-semibold">Indian Railways</span>
          <strong className="text-xl font-bold text-white mt-1">~{trainHours} hrs</strong>
          <span className="text-[10px] text-gray-500">Vande Bharat / Express</span>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
          <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-1">
            <Car className="w-4 h-4" />
          </div>
          <span className="text-xs text-gray-400 font-semibold">National Highway</span>
          <strong className="text-xl font-bold text-white mt-1">~{roadHours} hrs</strong>
          <span className="text-[10px] text-gray-500">Scenic Road Trip</span>
        </div>
      </div>
    </div>
  );
}
