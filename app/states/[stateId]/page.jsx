import Link from "next/link";
import { notFound } from "next/navigation";
import { getStateById, getAllStates } from "@/lib/data";
import StateHeroActions from "@/components/StateHeroActions";
import { MapPin, Calendar, Sparkles, ArrowRight, ChevronRight, Landmark } from "lucide-react";

export function generateStaticParams() {
  const states = getAllStates();
  return states.map((s) => ({ stateId: s.id }));
}

export default async function StateDetailPage({ params }) {
  const { stateId } = await params;
  const state = getStateById(stateId);

  if (!state) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-20">
      {/* State Hero Banner */}
      <section className="relative h-[68vh] min-h-[440px] w-full flex items-end overflow-hidden">
        <img
          src={state.heroImage}
          alt={state.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/states" className="hover:text-amber-400 transition-colors">States</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-amber-400 font-semibold">{state.name}</span>
          </nav>

          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            {state.region} India
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white">
            {state.name}
          </h1>

          <p className="text-lg sm:text-xl text-amber-300 font-medium">
            {state.tagline}
          </p>

          <StateHeroActions stateId={state.id} stateName={state.name} />
        </div>
      </section>

      {/* Overview & Quick Facts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detailed summary */}
          <div className="lg:col-span-2 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              About {state.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {state.description}
            </p>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                Culture & Living Traditions
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {state.culture}
              </p>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">State Dossier</h3>
              <ul className="space-y-4 text-xs sm:text-sm">
                <li className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-gray-400">Capital</span>
                  <strong className="text-white font-semibold">{state.capital}</strong>
                </li>
                <li className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-gray-400">Best Season</span>
                  <strong className="text-amber-400 font-semibold">{state.bestTimeToVisit}</strong>
                </li>
                <li className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-gray-400">Curated Districts</span>
                  <strong className="text-white font-semibold">{state.districts?.length || 0} Districts</strong>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
              💡 <strong>Traveler Advisory:</strong> Check local festivals and book heritage stays in advance during high season ({state.bestTimeToVisit}).
            </div>
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h2 className="text-3xl font-black text-white">
            Districts & Regions in {state.name}
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Explore key districts to see their iconic landmarks, places of worship, and hotel stays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {state.districts?.map((district) => (
            <Link
              key={district.id}
              href={`/states/${state.id}/${district.id}`}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col sm:flex-row group"
            >
              <div className="sm:w-1/2 h-56 sm:h-auto relative overflow-hidden bg-gray-900">
                <img
                  src={district.image}
                  alt={district.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-gray-950 via-transparent to-transparent opacity-80" />
              </div>

              <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                    {district.places?.length || 0} Key Destinations
                  </span>
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                    {district.name}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                    {district.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-gray-400 border-t border-white/10">
                  <span className="text-white font-medium">Explore places</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
