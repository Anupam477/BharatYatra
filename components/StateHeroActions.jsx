"use client";

import { useApp } from "@/context/AppContext";
import { Sparkles, Compass } from "lucide-react";

export default function StateHeroActions({ stateId, stateName }) {
  const { openTripPlannerWithState } = useApp();

  return (
    <div className="pt-2 flex flex-wrap items-center gap-3">
      <button
        onClick={() => openTripPlannerWithState(stateId)}
        className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
      >
        <Sparkles className="w-4 h-4" />
        <span>Generate {stateName} AI Itinerary</span>
      </button>
    </div>
  );
}
