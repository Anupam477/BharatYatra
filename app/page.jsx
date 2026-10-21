import Link from "next/link";
import { getAllPlaces } from "@/lib/data";
import HeroSection from "@/components/HeroSection";
import IndiaInteractiveMap from "@/components/IndiaInteractiveMap";
import VirtualPanoramaViewer from "@/components/VirtualPanoramaViewer";
import FeaturedPlacesGrid from "@/components/FeaturedPlacesGrid";
import TravelDnaQuiz from "@/components/TravelDnaQuiz";
import FestivalsCalendar from "@/components/FestivalsCalendar";
import {
  Sparkles,
  ArrowRight,
  Compass,
  MapPin,
  Calendar,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const allPlaces = getAllPlaces();
  const featuredPlaces = allPlaces.slice(0, 6);

  return (
    <div className="space-y-28 pb-20">
      {/* 1. Grand Master Hero Section with Dynamic Background Photos */}
      <HeroSection />

      {/* 2. Interactive SVG Map of Bharat (Primary Centerpiece) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IndiaInteractiveMap />
      </section>

      {/* 3. Panoramic Immersion Viewport (360 Horizontal Drag View) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VirtualPanoramaViewer />
      </section>

      {/* 4. Curated Iconic Destinations (With Wishlist Bookmarking) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              <Sparkles className="w-4 h-4" />
              Bucket List Wonders
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Iconic Landmarks & Experiences
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mt-1">
              Curated architectural jewels, temples, and natural wonderlands. Bookmark to your wishlist for instant planning.
            </p>
          </div>

          <Link
            href="/states"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <span>Browse All States</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <FeaturedPlacesGrid places={featuredPlaces} />
      </section>

      {/* 5. Travel DNA Archetype Matcher Quiz */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TravelDnaQuiz />
      </section>

      {/* 6. Sacred Festivals Calendar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FestivalsCalendar />
      </section>

      {/* 7. Executive Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-14 border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
              Ready to embark on your voyage?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Plan Your Dream Bharat Itinerary in Seconds
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Use our AI Trip Planner to get customized day-wise schedules, realistic budget estimates in your currency, and curated boutique hotel stays.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/states"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black text-sm shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" />
              <span>Explore All 28 States</span>
            </Link>

            <Link
              href="/transit"
              className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/10 transition-colors"
            >
              Route & Transit Matrix
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
