"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { formatCurrency } from "@/lib/currency";
import { getAllStates } from "@/lib/data";
import {
  Calculator,
  BedDouble,
  Utensils,
  Car,
  Ticket,
  Sparkles,
  Users,
  Calendar,
  Wallet,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const STYLES = [
  {
    id: "budget",
    label: "🎒 Backpacker / Smart Explorer",
    desc: "Cozy verified homestays, local sleeper/AC trains, iconic street delicacies & dhabas.",
    dailyStayInr: 1800,
    dailyFoodInr: 900,
    dailyTransportInr: 800,
    dailyActivitiesInr: 500,
  },
  {
    id: "comfort",
    label: "✨ Comfort & Boutique Explorer",
    desc: "3-4 Star boutique hotels with pool, private AC cabs, fine dining thalis & heritage guides.",
    dailyStayInr: 5500,
    dailyFoodInr: 2200,
    dailyTransportInr: 2000,
    dailyActivitiesInr: 1200,
  },
  {
    id: "luxury",
    label: "👑 Royal Palatial Maharaja Experience",
    desc: "5-Star heritage palaces & luxury resorts (Taj/Oberoi), private chauffeur, royal high tea.",
    dailyStayInr: 22000,
    dailyFoodInr: 5500,
    dailyTransportInr: 4500,
    dailyActivitiesInr: 3000,
  },
];

export default function BudgetCalculator() {
  const { currency, openTripPlannerWithState } = useApp();
  const states = getAllStates();

  const [selectedState, setSelectedState] = useState("rajasthan");
  const [selectedStyleId, setSelectedStyleId] = useState("comfort");
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(2);

  const style = STYLES.find((s) => s.id === selectedStyleId) || STYLES[1];

  // Calculations
  const roomCount = Math.ceil(travelers / 2);
  const totalStayInr = style.dailyStayInr * roomCount * days;
  const totalFoodInr = style.dailyFoodInr * travelers * days;
  const totalTransportInr = style.dailyTransportInr * (travelers > 2 ? 1.4 : 1) * days;
  const totalActivitiesInr = style.dailyActivitiesInr * travelers * days;

  const grandTotalInr = totalStayInr + totalFoodInr + totalTransportInr + totalActivitiesInr;
  const perPersonInr = Math.round(grandTotalInr / travelers);

  const stateObj = states.find((s) => s.id === selectedState) || states[0];

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-12 border border-white/10 space-y-10 bg-gradient-to-br from-gray-950 via-[#070d18] to-gray-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-4 h-4 text-amber-400" />
            Interactive Travel Finance Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            India Travel Budget & Cost Calculator
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-1">
            Calculate realistic travel expenses across stays, authentic cuisine, private transport, and monument entry in your chosen currency.
          </p>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/5 border border-white/10">
        {/* 1. Destination */}
        <div>
          <label className="text-xs font-bold text-gray-300 block mb-2">
            1. Target State / Region
          </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 cursor-pointer"
          >
            {states.map((st) => (
              <option key={st.id} value={st.id}>
                {st.name} ({st.region})
              </option>
            ))}
          </select>
        </div>

        {/* 2. Style */}
        <div>
          <label className="text-xs font-bold text-gray-300 block mb-2">
            2. Travel Tier & Style
          </label>
          <select
            value={selectedStyleId}
            onChange={(e) => setSelectedStyleId(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 cursor-pointer"
          >
            {STYLES.map((st) => (
              <option key={st.id} value={st.id}>
                {st.label}
              </option>
            ))}
          </select>
        </div>

        {/* 3. Duration Days */}
        <div>
          <label className="text-xs font-bold text-gray-300 block mb-2">
            3. Duration ({days} Days)
          </label>
          <div className="flex items-center gap-1.5">
            {[3, 5, 7, 10, 14].map((d) => (
              <button
                key={d}
                onClick={() => setDays(d)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  days === d
                    ? "bg-amber-500 text-gray-950 shadow-md shadow-amber-500/20"
                    : "bg-gray-900 text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                {d}D
              </button>
            ))}
          </div>
        </div>

        {/* 4. Travelers */}
        <div>
          <label className="text-xs font-bold text-gray-300 block mb-2">
            4. Number of Travelers ({travelers})
          </label>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((t) => (
              <button
                key={t}
                onClick={() => setTravelers(t)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  travelers === t
                    ? "bg-amber-500 text-gray-950 shadow-md shadow-amber-500/20"
                    : "bg-gray-900 text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                {t} {t === 1 ? "Person" : "Pax"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Cost Output Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Breakdown Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <BedDouble className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block font-semibold">Stay & Hotels ({roomCount} Room)</span>
              <strong className="text-xl font-black text-white">
                {formatCurrency(totalStayInr, currency)}
              </strong>
              <span className="text-[10px] text-gray-500 block">
                ~{formatCurrency(style.dailyStayInr, currency)} / room / night
              </span>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block font-semibold">Food & Regional Dining</span>
              <strong className="text-xl font-black text-white">
                {formatCurrency(totalFoodInr, currency)}
              </strong>
              <span className="text-[10px] text-gray-500 block">
                3 Meals + Chai / Snacks daily
              </span>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block font-semibold">Local Cabs & Transfers</span>
              <strong className="text-xl font-black text-white">
                {formatCurrency(totalTransportInr, currency)}
              </strong>
              <span className="text-[10px] text-gray-500 block">
                Airport/station + local sightseeing
              </span>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block font-semibold">Monument Entries & Guides</span>
              <strong className="text-xl font-black text-white">
                {formatCurrency(totalActivitiesInr, currency)}
              </strong>
              <span className="text-[10px] text-gray-500 block">
                Fort tickets + boat rides + guides
              </span>
            </div>
          </div>
        </div>

        {/* Grand Total Callout Box */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-amber-500/30 bg-gradient-to-br from-amber-500/15 via-gray-900 to-transparent space-y-6 shadow-2xl">
          <div>
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
              Estimated Trip Total ({days} Days · {travelers} {travelers === 1 ? "Traveler" : "Travelers"})
            </span>
            <div className="text-4xl sm:text-5xl font-black text-white mt-1">
              {formatCurrency(grandTotalInr, currency)}
            </div>
            <p className="text-xs text-emerald-400 font-semibold mt-1">
              (~{formatCurrency(perPersonInr, currency)} per person for the entire trip)
            </p>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed border-t border-white/10 pt-4">
            💡 <strong>Tier Summary:</strong> {style.desc}
          </p>

          <button
            onClick={() => openTripPlannerWithState(selectedState)}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Itinerary in this Budget</span>
          </button>
        </div>
      </div>
    </div>
  );
}
