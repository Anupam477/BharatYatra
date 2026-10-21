"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Star, MapPin, Heart, ArrowRight, ChevronRight } from "lucide-react";

export default function FeaturedPlacesGrid({ places = [] }) {
  const { wishlist, toggleWishlist, isInWishlist } = useApp();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {places.map((pl) => {
        const isSaved = isInWishlist(pl.id);

        return (
          <div
            key={pl.id}
            className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col group relative"
          >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-900">
              <Link href={`/states/${pl.stateId}/${pl.districtId}/${pl.id}`} className="block w-full h-full">
                <img
                  src={pl.images[0]}
                  alt={pl.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
              </Link>

              {/* Category badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">
                {pl.category}
              </div>

              {/* Wishlist button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist({
                    id: pl.id,
                    name: pl.name,
                    subtitle: `${pl.category} · ${pl.districtName}, ${pl.stateName}`,
                    image: pl.images[0],
                    rating: pl.rating,
                    url: `/states/${pl.stateId}/${pl.districtId}/${pl.id}`,
                  });
                }}
                className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                  isSaved
                    ? "bg-rose-500/30 border-rose-500 text-rose-400 scale-110"
                    : "bg-black/60 border-white/10 text-white/80 hover:text-rose-400 hover:scale-105"
                }`}
                title={isSaved ? "Saved to Wishlist" : "Save to Wishlist"}
              >
                <Heart className={`w-4 h-4 ${isSaved ? "fill-rose-500 text-rose-500" : ""}`} />
              </button>

              {/* Location strip */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs text-amber-300 font-medium flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {pl.districtName}, {pl.stateName}
                </span>

                <div className="flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-lg bg-amber-500 text-gray-950 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-gray-950" />
                  <span>{pl.rating}</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <Link href={`/states/${pl.stateId}/${pl.districtId}/${pl.id}`}>
                  <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {pl.name}
                  </h3>
                </Link>
                <p className="text-xs text-gray-400 line-clamp-2 mt-2 leading-relaxed">
                  {pl.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Entry: <strong className="text-white">{pl.entryFee.split(",")[0]}</strong></span>
                <Link
                  href={`/states/${pl.stateId}/${pl.districtId}/${pl.id}`}
                  className="text-amber-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Explore <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
