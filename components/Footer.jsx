"use client";

import { useState } from "react";
import Link from "next/link";
import BharatLogo from "@/components/BharatLogo";
import { Heart, MapPin, ShieldCheck, Sparkles, PhoneCall, Check, Navigation, Wallet } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#03060c] text-gray-400 mt-28">
      {/* Top Banner */}
      <div className="border-b border-white/5 py-12 bg-gradient-to-r from-amber-500/10 via-transparent to-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              "अतिथि देवो भव" — Atithi Devo Bhava
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              The Guest is God. Explore the breathtaking cultural tapestry, sacred temples, and natural wonders of India.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:1363"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-all border border-white/10 flex items-center gap-2"
              title="24x7 Toll-Free Multi-Lingual Tourist Helpline by Govt of India"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tourist Helpline: 1363</span>
            </a>
            <Link
              href="/states"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-gray-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20"
            >
              Browse 28 States
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand with new BharatLogo */}
        <div className="space-y-4 md:col-span-1">
          <BharatLogo size="large" />
          <p className="text-xs text-gray-400 leading-relaxed pt-1">
            Your enterprise-grade travel companion across the historic forts, tranquil backwaters, sacred shrines, and mountain passes of Incredible Bharat.
          </p>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            100% Curated Local Datasets & Modern UI
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link href="/states" className="hover:text-amber-400 transition-colors">
                States Directory (28 States)
              </Link>
            </li>
            <li>
              <Link href="/transit" className="hover:text-amber-400 transition-colors">
                Transit & Distance Matrix
              </Link>
            </li>
            <li>
              <Link href="/budget" className="hover:text-amber-400 transition-colors">
                Travel Cost & Budget Engine
              </Link>
            </li>
            <li>
              <Link href="/states/rajasthan" className="hover:text-amber-400 transition-colors">
                Rajasthan (Land of Kings & Forts)
              </Link>
            </li>
            <li>
              <Link href="/states/kerala" className="hover:text-amber-400 transition-colors">
                Kerala (God's Own Country & Lakes)
              </Link>
            </li>
            <li>
              <Link href="/states/ladakh" className="hover:text-amber-400 transition-colors">
                Ladakh (High-Altitude Lakes & Passes)
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-4">
            Travel Themes
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <span className="text-gray-300">UNESCO World Heritage Citadels</span>
            </li>
            <li>
              <span className="text-gray-300">Sacred Ghats & Ganga Aarti</span>
            </li>
            <li>
              <span className="text-gray-300">Himalayan Valleys & Alpine Lakes</span>
            </li>
            <li>
              <span className="text-gray-300">Backwaters & Coconut Lagoons</span>
            </li>
            <li>
              <span className="text-gray-300">Royal Palace Stays & Ayurvedic Spas</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / Info */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs tracking-wider uppercase">
            Travel Newsletter
          </h4>
          <p className="text-xs text-gray-400">
            Get seasonal travel tips, offbeat trail guides, and festival calendars.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="flex items-center rounded-xl bg-gray-900 border border-white/10 p-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="bg-transparent px-3 py-1.5 text-xs text-white focus:outline-none w-full placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : "Join"}
              </button>
            </div>
            {subscribed && (
              <span className="text-[11px] text-emerald-400 font-semibold block">
                ✓ Thank you for subscribing!
              </span>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Bharat Yatra. Engineered for performance, elegance, and culture.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for travelers of Bharat
          </p>
        </div>
      </div>
    </footer>
  );
}
