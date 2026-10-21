"use client";

import { Sparkles, Landmark, Trees, Flame, Compass, Palmtree } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Destinations", icon: Sparkles },
  { id: "Heritage", label: "Heritage & Forts", icon: Landmark },
  { id: "Nature", label: "Nature & Hills", icon: Trees },
  { id: "Spiritual", label: "Spiritual & Temples", icon: Flame },
  { id: "Adventure", label: "Adventure & Thrills", icon: Compass },
  { id: "Beaches", label: "Beaches & Coastal", icon: Palmtree },
];

export default function Filters({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none py-1">
      {CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-gray-950 font-bold shadow-lg shadow-amber-500/25 scale-[1.02]"
                : "bg-gray-900/80 hover:bg-gray-800 text-gray-300 border border-white/10 hover:border-white/20"
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? "text-gray-950" : "text-amber-400"}`} />
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}
