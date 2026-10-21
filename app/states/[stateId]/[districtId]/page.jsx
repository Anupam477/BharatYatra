"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStateById, getDistrictById } from "@/lib/data";
import Filters from "@/components/Filters";
import { MapPin, Star, ChevronRight, ArrowRight, Clock, Banknote, Sparkles } from "lucide-react";

export default function DistrictPlacesPage({ params }) {
  const unwrappedParams = use(params);
  const { stateId, districtId } = unwrappedParams;

  const state = getStateById(stateId);
  const district = getDistrictById(stateId, districtId);

  if (!state || !district) {
    notFound();
  }

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlaces = (district.places || []).filter((place) => {
    const matchesCategory =
      activeCategory === "all" ||
      place.category?.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-gray-400">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/states" className="hover:text-amber-400 transition-colors">States</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/states/${state.id}`} className="hover:text-amber-400 transition-colors">{state.name}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-amber-400 font-semibold">{district.name}</span>
      </nav>

      {/* District Header Card */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-8 sm:p-12">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            {state.name} District
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            {district.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {district.description}
          </p>
        </div>

        {/* Ambient background decoration */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-15 pointer-events-none hidden md:block">
          <img
            src={district.image}
            alt={district.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Controls: Search & Category Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Filters
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          <div className="w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search places in this district..."
              className="w-full px-4 py-2 rounded-xl bg-gray-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Places List */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            Destinations & Attractions ({filteredPlaces.length})
          </h2>
        </div>

        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <Link
                key={place.id}
                href={`/states/${state.id}/${district.id}/${place.id}`}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-900">
                  <img
                    src={place.images[0]}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">
                    {place.category}
                  </div>

                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-amber-500/90 text-gray-950 font-black text-xs flex items-center gap-1 shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-gray-950" />
                    <span>{place.rating}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {place.name}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 mt-2 leading-relaxed">
                      {place.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{place.timings}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Banknote className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{place.entryFee}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-amber-400 font-bold border-t border-white/5">
                    <span>View Photos & Hotels</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center glass-panel rounded-3xl border border-white/10 text-gray-400 space-y-2">
            <p>No places found matching the selected category or query.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="text-amber-400 font-bold text-xs hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
