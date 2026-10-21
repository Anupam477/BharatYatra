"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, MapPin, X, ArrowRight, Star } from "lucide-react";
import { searchLocations } from "@/lib/data";

export default function SearchBar({ placeholder = "Search states, iconic monuments, temples, beaches..." }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length > 1) {
        const found = searchLocations(query);
        setResults(found);
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-amber-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          placeholder={placeholder}
          className="w-full pl-12 pr-10 py-4 rounded-2xl bg-gray-900/90 border border-white/15 text-white placeholder-gray-400 shadow-2xl focus:outline-none focus:border-amber-400/80 focus:ring-2 focus:ring-amber-500/20 text-base transition-all"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute right-4 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 glass-panel bg-gray-950/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2 space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center justify-between">
                <span>Matching Destinations ({results.length})</span>
                <span className="text-[10px] text-amber-400">Instant Search</span>
              </div>
              {results.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-white/10"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 truncate">{item.subtitle}</p>
                  </div>
                  {item.rating && (
                    <div className="flex items-center gap-1 text-xs text-amber-400 font-bold px-2 py-1 rounded-lg bg-amber-500/10">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{item.rating}</span>
                    </div>
                  )}
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-gray-400">
              No matching destinations found for "{query}". Try "Jaipur", "Kerala", "Taj Mahal", or "Goa".
            </div>
          )}
        </div>
      )}
    </div>
  );
}
