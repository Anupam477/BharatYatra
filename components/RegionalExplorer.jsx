"use client";

import { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { MapPin, ArrowRight, Sparkles, ChevronRight } from "lucide-react";

export default function RegionalExplorer({ states = [] }) {
  const { openTripPlannerWithState } = useApp();
  const [activeTab, setActiveTab] = useState("all");

  const TABS = [
    { id: "all", label: "All Bharat" },
    { id: "North", label: "North & Himalayas" },
    { id: "North-West", label: "Royal North-West" },
    { id: "South", label: "South & Backwaters" },
    { id: "West", label: "West & Coastal" },
  ];

  const filtered = states.filter((s) => {
    if (activeTab === "all") return true;
    return s.region.toLowerCase().includes(activeTab.toLowerCase());
  });

  return (
    <div className="space-y-8">
      {/* Tab Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-gray-950 font-black shadow-lg shadow-amber-500/25 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((st) => (
          <div
            key={st.id}
            className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col group relative"
          >
            {/* Image banner */}
            <Link href={`/states/${st.id}`} className="relative h-64 w-full overflow-hidden bg-gray-900 block">
              <img
                src={st.heroImage}
                alt={st.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
              
              {/* Region Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-white/10 uppercase tracking-widest">
                  {st.region}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                  {st.name}
                </h3>
                <p className="text-xs text-amber-300/90 font-medium line-clamp-1 mt-0.5">
                  {st.tagline}
                </p>
              </div>
            </Link>

            {/* Details footer */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                {st.description}
              </p>

              <div className="pt-3 border-t border-white/10 space-y-3 text-xs text-gray-400">
                <div className="flex items-center justify-between">
                  <span>Capital:</span>
                  <strong className="text-white">{st.capital}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Best Season:</span>
                  <strong className="text-amber-400">{st.bestTimeToVisit}</strong>
                </div>

                {/* Quick Action buttons */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-white/5">
                  <button
                    onClick={() => openTripPlannerWithState(st.id)}
                    className="flex-1 py-1.5 px-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 text-[11px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    AI Plan
                  </button>

                  <Link
                    href={`/states/${st.id}`}
                    className="py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold flex items-center gap-1 transition-colors"
                  >
                    View <ChevronRight className="w-3 h-3 text-amber-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
