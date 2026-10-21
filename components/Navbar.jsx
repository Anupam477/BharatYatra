"use client";

import Link from "next/link";
import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { CURRENCY_CONFIG } from "@/lib/currency";
import BharatLogo from "@/components/BharatLogo";
import LiveTravelTicker from "@/components/LiveTravelTicker";
import {
  Compass,
  MapPin,
  Search,
  Menu,
  X,
  Sparkles,
  Heart,
  Globe,
  Navigation,
  Wallet,
} from "lucide-react";

export default function Navbar() {
  const {
    currency,
    setCurrency,
    wishlist,
    setIsWishlistOpen,
    setIsTripPlannerOpen,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 w-full">
      {/* 1. Live Weather & IST Clock Bar */}
      <LiveTravelTicker />

      {/* 2. Main Glassmorphic Navigation Bar */}
      <header className="w-full glass-panel border-b border-white/10 bg-gray-950/85 backdrop-blur-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Custom Royal Bharat Yatra Logo */}
          <BharatLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-xs font-bold text-gray-300 hover:text-amber-400 transition-colors uppercase tracking-wider"
            >
              Home
            </Link>
            <Link
              href="/states"
              className="text-xs font-bold text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              States Directory
            </Link>
            <Link
              href="/transit"
              className="text-xs font-bold text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              Transit Matrix
            </Link>
            <Link
              href="/budget"
              className="text-xs font-bold text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              <Wallet className="w-3.5 h-3.5 text-amber-400" />
              Budget Engine
            </Link>
            <Link
              href="/states/rajasthan"
              className="text-xs font-bold text-gray-300 hover:text-amber-400 transition-colors uppercase tracking-wider"
            >
              Rajasthan
            </Link>
            <Link
              href="/states/kerala"
              className="text-xs font-bold text-gray-300 hover:text-amber-400 transition-colors uppercase tracking-wider"
            >
              Kerala
            </Link>
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-3">
            {/* Currency Switcher */}
            <div className="relative flex items-center">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="text-xs font-bold bg-white/5 border border-white/10 hover:border-white/20 text-gray-200 rounded-xl px-2.5 py-2 pr-6 appearance-none focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                {Object.keys(CURRENCY_CONFIG).map((cur) => (
                  <option key={cur} value={cur} className="bg-gray-900 text-white">
                    {CURRENCY_CONFIG[cur].code} ({CURRENCY_CONFIG[cur].symbol})
                  </option>
                ))}
              </select>
              <Globe className="w-3 h-3 absolute right-2 pointer-events-none text-gray-400" />
            </div>

            {/* Wishlist Drawer Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-rose-400 transition-all border border-white/10 cursor-pointer"
              title="Open Wishlist"
            >
              <Heart className={`w-4 h-4 ${wishlist.length > 0 ? "fill-rose-500 text-rose-500" : ""}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center animate-pulse">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* AI Trip Planner Modal Button */}
            <button
              onClick={() => setIsTripPlannerOpen(true)}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black text-xs transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Trip Planner</span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-900 text-gray-300 hover:text-white lg:hidden border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-t border-white/10 px-5 pt-3 pb-6 space-y-3 bg-gray-950/95 backdrop-blur-2xl">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-200 hover:bg-white/5"
            >
              Home
            </Link>
            <Link
              href="/states"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-200 hover:bg-white/5"
            >
              States Directory
            </Link>
            <Link
              href="/transit"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-200 hover:bg-white/5"
            >
              Transit Matrix
            </Link>
            <Link
              href="/budget"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-200 hover:bg-white/5"
            >
              Budget Calculator
            </Link>
            <Link
              href="/states/rajasthan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-200 hover:bg-white/5"
            >
              Royal Rajasthan
            </Link>
            <Link
              href="/states/kerala"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-200 hover:bg-white/5"
            >
              Kerala Backwaters
            </Link>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsTripPlannerOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-gray-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                Open AI Trip Planner
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
