"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { Sparkles, MapPin, ChevronRight, Compass } from "lucide-react";

const HERO_SLIDES = [
  {
    id: "amber-fort",
    location: "Amer Fort & Palace",
    city: "Jaipur, Rajasthan",
    stateUrl: "/states/rajasthan",
    tagline: "The Grand Sandstone Citadel of the Kachwahas",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2400&q=85",
  },
  {
    id: "taj-mahal",
    location: "The Taj Mahal",
    city: "Agra, Uttar Pradesh",
    stateUrl: "/states/uttar-pradesh",
    tagline: "Poetry in Pure White Makrana Marble",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2400&q=85",
  },
  {
    id: "kerala-backwaters",
    location: "Vembanad & Alleppey Backwaters",
    city: "Alappuzha, Kerala",
    stateUrl: "/states/kerala",
    tagline: "Tranquil Houseboats on God's Own Waters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2400&q=85",
  },
  {
    id: "varanasi-ghats",
    location: "Sacred Dashashwamedh Ghat",
    city: "Varanasi, Uttar Pradesh",
    stateUrl: "/states/uttar-pradesh",
    tagline: "Eternal Twilight Chants on the Holy Ganga",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2400&q=85",
  },
  {
    id: "pangong-tso",
    location: "Pangong Tso Alpine Lake",
    city: "Leh, Ladakh (4,225m)",
    stateUrl: "/states/ladakh",
    tagline: "Sapphire Waters Beneath Himalayan Glaciers",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=2400&q=85",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate background every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const active = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      {/* 1. Cinematic Background Image Carousel with Ken Burns subtle zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = currentSlide === idx;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.location}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        {/* 2. Multilayer Gradients for Crystal-Clear Text Contrast */}
        {/* Top subtle fade from header */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/85 via-gray-950/60 to-[#050811] z-10" />
        
        {/* Radial vignette for focus on center text */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,8,17,0.35)_0%,rgba(5,8,17,0.92)_85%)] z-10" />

        {/* Ambient warm glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none z-10" />

        {/* Subtle grid pattern texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-10" />
      </div>

      {/* 3. Hero Content Center Stage */}
      <div className="relative max-w-5xl mx-auto text-center space-y-8 z-20">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-xl shadow-2xl">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span className="text-xs font-black tracking-widest uppercase text-gradient-saffron">
            अतुल्य भारत · INCREDIBLE INDIA 🇮🇳
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          Discover the Timeless <br />
          <span className="text-gradient-saffron font-['Playfair_Display',serif] italic font-semibold">
            Soul of Bharat
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-200 font-normal leading-relaxed drop-shadow-md">
          From the grand sandstone citadels of Rajasthan to the emerald backwaters of Kerala and snowbound passes of Ladakh. Explore India with curated itineraries, interactive maps, and authentic local guides.
        </p>

        {/* Search Bar */}
        <div className="pt-2">
          <SearchBar placeholder="Search states, monuments, temples, or hill stations (e.g. Jaipur, Taj Mahal, Munnar)..." />
        </div>

        {/* Popular Tag Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-gray-300">
          <span className="font-semibold text-gray-400">Popular:</span>
          {[
            { label: "Jaipur Forts", url: "/states/rajasthan" },
            { label: "Alleppey Houseboats", url: "/states/kerala" },
            { label: "Taj Mahal Agra", url: "/states/uttar-pradesh" },
            { label: "Manali Solang", url: "/states/himachal-pradesh" },
            { label: "Goa Beaches", url: "/states/goa" },
            { label: "Pangong Lake", url: "/states/ladakh" },
          ].map((tag, idx) => (
            <Link
              key={idx}
              href={tag.url}
              className="px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/70 hover:text-amber-400 border border-white/15 backdrop-blur-md transition-all font-medium"
            >
              {tag.label}
            </Link>
          ))}
        </div>

        {/* Key Metric Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10">
          <div className="p-4 rounded-3xl glass-panel text-center bg-gray-950/60 backdrop-blur-xl border-white/10 shadow-xl">
            <span className="text-3xl sm:text-4xl font-black text-amber-400 block">28</span>
            <span className="text-xs text-gray-300 uppercase tracking-wider font-bold">States & UTs</span>
          </div>
          <div className="p-4 rounded-3xl glass-panel text-center bg-gray-950/60 backdrop-blur-xl border-white/10 shadow-xl">
            <span className="text-3xl sm:text-4xl font-black text-white block">100+</span>
            <span className="text-xs text-gray-300 uppercase tracking-wider font-bold">Curated Districts</span>
          </div>
          <div className="p-4 rounded-3xl glass-panel text-center bg-gray-950/60 backdrop-blur-xl border-white/10 shadow-xl">
            <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">500+</span>
            <span className="text-xs text-gray-300 uppercase tracking-wider font-bold">Iconic Places</span>
          </div>
          <div className="p-4 rounded-3xl glass-panel text-center bg-gray-950/60 backdrop-blur-xl border-white/10 shadow-xl">
            <span className="text-3xl sm:text-4xl font-black text-sky-400 block">AI Ready</span>
            <span className="text-xs text-gray-300 uppercase tracking-wider font-bold">Smart Itineraries</span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Photo Location Identifier & Manual Slide Switcher */}
      <div className="absolute bottom-5 right-6 z-20 hidden md:flex items-center gap-3">
        <Link
          href={active.stateUrl}
          className="px-4 py-2 rounded-2xl bg-black/70 hover:bg-black/90 backdrop-blur-xl border border-white/15 text-left transition-all hover:border-amber-400/50 shadow-2xl group flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                {active.location}
              </span>
              <span className="text-[10px] text-gray-400">({active.city})</span>
            </div>
            <span className="text-[10px] text-amber-300/80 block line-clamp-1">
              {active.tagline}
            </span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
        </Link>

        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all rounded-full cursor-pointer ${
                currentSlide === idx
                  ? "w-6 h-2 bg-amber-400 shadow-md shadow-amber-400/50"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
              title={`Switch to ${slide.location}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
