"use client";

import { useState, useEffect } from "react";
import { Clock, Sun, PhoneCall, Sparkles, MapPin } from "lucide-react";

const LIVE_WEATHER = [
  { city: "Jaipur", temp: "26°C", sky: "Clear Skies ☀️" },
  { city: "Varanasi", temp: "25°C", sky: "Pleasant Evening 🪔" },
  { city: "Manali", temp: "14°C", sky: "Crisp Alpine 🏔️" },
  { city: "Munnar", temp: "19°C", sky: "Misty Tea Hills 🍃" },
  { city: "Goa", temp: "29°C", sky: "Coastal Breeze 🌊" },
  { city: "Leh", temp: "11°C", sky: "Sunny Cold Desert ❄️" },
];

export default function LiveTravelTicker() {
  const [istTime, setIstTime] = useState("");
  const [activeWeatherIdx, setActiveWeatherIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Live IST Clock
  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateTime();
    const clockInterval = setInterval(updateTime, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  // Weather ticker rotation
  useEffect(() => {
    const weatherInterval = setInterval(() => {
      setActiveWeatherIdx((prev) => (prev + 1) % LIVE_WEATHER.length);
    }, 4500);
    return () => clearInterval(weatherInterval);
  }, []);

  const currentWeather = LIVE_WEATHER[activeWeatherIdx];

  return (
    <div className="w-full bg-[#03060c] border-b border-white/5 py-1.5 px-4 text-[11px] text-gray-400 font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Live IST Clock */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-gray-300 font-bold flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>IST (Bharat Time):</span>
            <span
              suppressHydrationWarning
              className="text-amber-300 font-mono font-bold tracking-wider"
            >
              {mounted && istTime ? istTime : "--:--:-- IST"}
            </span>
          </span>
        </div>

        {/* Center: Live Climate Radar Ticker */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-gray-400 flex items-center gap-1">
            <Sun className="w-3 h-3 text-amber-400" />
            <span>Destination Weather:</span>
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white font-semibold transition-all">
            📍 {currentWeather.city}: <strong className="text-amber-300">{currentWeather.temp}</strong> ({currentWeather.sky})
          </span>
        </div>

        {/* Right: Tourist Helpline */}
        <div className="flex items-center gap-3">
          <a
            href="tel:1363"
            className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
            title="Official 24x7 Ministry of Tourism Multi-lingual Helpline"
          >
            <PhoneCall className="w-3 h-3 text-emerald-400" />
            <span>Tourist Helpline: <strong className="text-emerald-300 font-bold">1363</strong></span>
          </a>
        </div>
      </div>
    </div>
  );
}
