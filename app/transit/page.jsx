import Link from "next/link";
import DistanceCalculator from "@/components/DistanceCalculator";
import { Navigation, Train, Plane, Car, ShieldCheck, ChevronRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Inter-City Transit Matrix | Bharat Yatra",
  description: "Calculate distances, driving hours, train travel times, and flight durations across major Indian cities and heritage hubs.",
};

export default function TransitPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-amber-400 font-semibold">Transit & Route Matrix</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold tracking-wider uppercase">
          <Navigation className="w-4 h-4 text-amber-400" />
          Logistics & Route Matrix
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          India Transit & Distance Planner
        </h1>
        <p className="text-sm sm:text-base text-gray-400">
          Calculate highway distances, high-speed train hours, and domestic air travel times between key tourist hubs and regional capitals.
        </p>
      </div>

      {/* Main Interactive Tool */}
      <DistanceCalculator />

      {/* Travel Advisory Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
            <Plane className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Domestic Flight Connectivity</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Delhi, Mumbai, Bengaluru, and Jaipur serve as major hubs. Direct flight connections are available to Leh (IXL), Goa (GOI/GOX), and Kochi (COK).
          </p>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Train className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Vande Bharat Express Routes</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Fast semi-high-speed rail routes connect Delhi-Varanasi, Delhi-Dehradun, and Bengaluru-Mysuru, cutting travel time by up to 35%.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Car className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Golden Quadrilateral & Expressways</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Delhi-Mumbai Expressway and Yamuna Expressway enable rapid, scenic road trips with modern wayside rest stops and FASTag tolling.
          </p>
        </div>
      </div>
    </div>
  );
}
