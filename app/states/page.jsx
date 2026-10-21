import Link from "next/link";
import { getAllStates } from "@/lib/data";
import RegionalExplorer from "@/components/RegionalExplorer";
import { MapPin, Compass, ChevronRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "States & Union Territories of India | Bharat Yatra",
  description: "Browse all 28 states and union territories of Bharat. Filter by North, South, West, and Himalayan regions.",
};

export default function StatesPage() {
  const allStates = getAllStates();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-amber-400 font-semibold">States & UTs</span>
      </nav>

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold tracking-wider uppercase">
          <Compass className="w-4 h-4 text-amber-400" />
          The States & Union Territories of India
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          Explore All Indian States
        </h1>
        <p className="text-sm sm:text-base text-gray-400">
          Discover India's kaleidoscopic regions. Switch between North, South, West, and Himalayan territories to dive into their historic districts, UNESCO forts, and culture.
        </p>
      </div>

      {/* Regional Tabbed State Explorer */}
      <RegionalExplorer states={allStates} />
    </div>
  );
}
