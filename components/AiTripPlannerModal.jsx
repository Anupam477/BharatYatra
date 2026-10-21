"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { getAllStates } from "@/lib/data";
import { generateSmartItinerary } from "@/lib/itineraryGenerator";
import { formatCurrency } from "@/lib/currency";
import {
  X,
  Sparkles,
  Calendar,
  Compass,
  Clock,
  MapPin,
  Check,
  Share2,
  Copy,
  Printer,
  Sunrise,
  Sunset,
  Utensils,
  ChevronRight,
  ShieldCheck,
  Building2,
  Sliders,
} from "lucide-react";
import Link from "next/link";

export default function AiTripPlannerModal() {
  const {
    isTripPlannerOpen,
    setIsTripPlannerOpen,
    plannerPresetState,
    currency,
  } = useApp();

  const states = getAllStates();
  const [selectedState, setSelectedState] = useState("rajasthan");
  const [duration, setDuration] = useState(4);
  const [travelStyle, setTravelStyle] = useState("heritage");
  const [isGenerating, setIsGenerating] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (plannerPresetState) {
      setSelectedState(plannerPresetState);
    }
  }, [plannerPresetState]);

  if (!isTripPlannerOpen) return null;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const generated = generateSmartItinerary({
        stateId: selectedState,
        durationDays: duration,
        travelStyle,
      });
      setItinerary(generated);
      setIsGenerating(false);
    }, 700);
  };

  const handleCopy = () => {
    if (!itinerary) return;
    const text = `Bharat Yatra AI Itinerary: ${itinerary.durationDays}-Day Tour of ${itinerary.stateName}\nEstimated Cost: ${formatCurrency(itinerary.estimatedCostInr, currency)}\n\n` +
      itinerary.days.map(d => `${d.title}\nHighlights: ${d.highlightPlace}\nActivities:\n` + d.activities.map(a => ` - ${a.time}: ${a.title}`).join("\n")).join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel bg-gray-950/95 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-gray-950 font-bold shadow-lg shadow-amber-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                AI Smart Trip Planner
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold uppercase tracking-wider border border-amber-500/30">
                  MNC Grade
                </span>
              </h3>
              <p className="text-xs text-gray-400">
                Generate personalized day-by-day itineraries with verified local spots and realistic budgets.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsTripPlannerOpen(false)}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            {/* State Selection */}
            <div>
              <label className="text-xs font-bold text-gray-300 block mb-2">
                1. Destination State
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
              >
                {states.map((st) => (
                  <option key={st.id} value={st.id}>
                    {st.name} ({st.region})
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Days */}
            <div>
              <label className="text-xs font-bold text-gray-300 block mb-2">
                2. Duration ({duration} Days)
              </label>
              <div className="flex items-center gap-2">
                {[2, 3, 4, 5, 7].map((num) => (
                  <button
                    key={num}
                    onClick={() => setDuration(num)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                      duration === num
                        ? "bg-amber-500 text-gray-950 shadow-md shadow-amber-500/20"
                        : "bg-gray-900 text-gray-400 hover:text-white border border-white/10"
                    }`}
                  >
                    {num}D
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Theme */}
            <div>
              <label className="text-xs font-bold text-gray-300 block mb-2">
                3. Travel Vibe
              </label>
              <select
                value={travelStyle}
                onChange={(e) => setTravelStyle(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
              >
                <option value="heritage">Royal Forts & Heritage</option>
                <option value="spiritual">Spiritual & Temple Darshan</option>
                <option value="adventure">Adventure & Mountain Trails</option>
                <option value="nature">Nature & Backwaters</option>
                <option value="luxury">Palatial Luxury & Spa</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/30 transition-all cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <span className="w-4 h-4 border-2 border-gray-950 border-t-transparent rounded-full animate-spin" />
                  Generating Smart Itinerary...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate Itinerary Now
                </>
              )}
            </button>
          </div>

          {/* Generated Result Output */}
          {itinerary && (
            <div className="space-y-6 pt-4 border-t border-white/10">
              {/* Overview Strip */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-transparent border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                    Custom Itinerary Ready
                  </span>
                  <h4 className="text-2xl font-black text-white">
                    {itinerary.durationDays}-Day Tour of {itinerary.stateName}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Recommended Season: <strong className="text-white">{itinerary.bestSeason}</strong>
                  </p>
                </div>

                <div className="text-right sm:border-l sm:border-white/10 sm:pl-6">
                  <span className="text-xs text-gray-400 block">Estimated Budget</span>
                  <strong className="text-2xl font-black text-emerald-400">
                    {formatCurrency(itinerary.estimatedCostInr, currency)}
                  </strong>
                  <span className="text-[10px] text-gray-400 block">
                    (~{formatCurrency(itinerary.estimatedCostPerDayInr, currency)} / day)
                  </span>
                </div>
              </div>

              {/* Day-by-Day Cards */}
              <div className="space-y-4">
                {itinerary.days.map((day) => (
                  <div
                    key={day.dayNumber}
                    className="p-5 rounded-2xl glass-panel border border-white/10 space-y-4 hover:border-amber-500/30 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-xl bg-amber-500 text-gray-950 font-black text-sm flex items-center justify-center">
                          {day.dayNumber}
                        </span>
                        <div>
                          <h5 className="text-base font-bold text-white">
                            {day.title}
                          </h5>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-amber-400" />
                            {day.location}
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/states/${day.stateId}/${day.districtId}/${day.placeId}`}
                        onClick={() => setIsTripPlannerOpen(false)}
                        className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                      >
                        Destination Info <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Timeline activities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {day.activities.map((act, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1"
                        >
                          <span className="text-[10px] font-bold text-amber-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {act.time}
                          </span>
                          <h6 className="text-xs font-bold text-white">{act.title}</h6>
                          <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                            {act.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Insider Tip & Stay */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 pt-2 gap-2">
                      <span className="text-gray-300">
                        💡 <strong>Local Tip:</strong> {day.insiderTip}
                      </span>
                      {day.hotelRecommendation && (
                        <span className="text-amber-300 font-medium flex items-center gap-1 flex-shrink-0">
                          <Building2 className="w-3.5 h-3.5 text-amber-400" />
                          Stay: {day.hotelRecommendation.name} ({formatCurrency(day.hotelRecommendation.pricePerNight, currency)})
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy Itinerary"}
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print Itinerary
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
