"use client";

import Link from "next/link";

// Pre-computed fixed ray coordinates (Radius 26 from center 50, 50)
// Using exact fixed numbers guarantees 100% identical HTML between Server and Client with ZERO hydration mismatch
const SURYA_RAYS = [
  { x2: 76, y2: 50, color: "#f59e0b" },
  { x2: 72.52, y2: 63, color: "#10b981" },
  { x2: 63, y2: 72.52, color: "#f59e0b" },
  { x2: 50, y2: 76, color: "#10b981" },
  { x2: 37, y2: 72.52, color: "#f59e0b" },
  { x2: 27.48, y2: 63, color: "#10b981" },
  { x2: 24, y2: 50, color: "#f59e0b" },
  { x2: 27.48, y2: 37, color: "#10b981" },
  { x2: 37, y2: 27.48, color: "#f59e0b" },
  { x2: 50, y2: 24, color: "#10b981" },
  { x2: 63, y2: 27.48, color: "#f59e0b" },
  { x2: 72.52, y2: 37, color: "#10b981" },
];

export default function BharatLogo({ size = "default" }) {
  const isLarge = size === "large";

  return (
    <Link href="/" className="flex items-center gap-3.5 group select-none flex-shrink-0">
      {/* Custom Royal Surya Mandala & Lotus Emblem */}
      <div className={`relative ${isLarge ? "w-13 h-13" : "w-11 h-11"} transition-transform duration-500 group-hover:scale-105`}>
        {/* Glowing Aura Ring */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-emerald-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />

        {/* Outer Frame with Gold Trim */}
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-amber-400 via-orange-600 to-emerald-600 p-[1.5px] shadow-2xl">
          <div className="w-full h-full bg-[#070b14] rounded-[14px] flex items-center justify-center overflow-hidden relative">
            {/* Subtle background radial glow */}
            <div className="absolute inset-0 bg-radial from-amber-500/20 via-transparent to-transparent opacity-80" />

            {/* Custom SVG Indian Royal Emblem: Surya Rays + Lotus Petals + Sacred Spoke Center */}
            <svg
              viewBox="0 0 100 100"
              className="w-7 h-7 text-amber-400 transition-transform duration-700 group-hover:rotate-90 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
              fill="none"
              stroke="currentColor"
            >
              {/* Central Sacred Chakra Sun */}
              <circle cx="50" cy="50" r="14" stroke="#fbbf24" strokeWidth="2.5" fill="rgba(245, 158, 11, 0.15)" />
              <circle cx="50" cy="50" r="5" fill="#f59e0b" />

              {/* 12 Radiant Surya Rays with pre-computed exact numbers */}
              {SURYA_RAYS.map((ray, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={ray.x2}
                  y2={ray.y2}
                  stroke={ray.color}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ))}

              {/* Lotus Petal Flourishes on 4 cardinal points */}
              <path d="M 50,14 C 44,24 56,24 50,14 Z" fill="#fbbf24" />
              <path d="M 50,86 C 44,76 56,76 50,86 Z" fill="#10b981" />
              <path d="M 14,50 C 24,44 24,56 14,50 Z" fill="#f59e0b" />
              <path d="M 86,50 C 76,44 76,56 86,50 Z" fill="#f59e0b" />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand Typography */}
      <div>
        <div className="flex items-center gap-1.5">
          <span className="text-2xl font-black tracking-tight text-white group-hover:text-amber-50 transition-colors">
            Bharat<span className="text-gradient-saffron font-serif font-black">Yatra</span>
          </span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/15 via-white/10 to-emerald-500/15 text-amber-300 border border-amber-500/30 font-black tracking-widest uppercase">
            INDIA 🇮🇳
          </span>
        </div>
        <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase flex items-center gap-1">
          <span>The Definitive Travel Guide</span>
        </p>
      </div>
    </Link>
  );
}
