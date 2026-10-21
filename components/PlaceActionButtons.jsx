"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Heart, Sparkles, Share2, Check, Copy } from "lucide-react";

export default function PlaceActionButtons({ place, state, district }) {
  const { toggleWishlist, isInWishlist, openTripPlannerWithState } = useApp();
  const [copied, setCopied] = useState(false);

  const isSaved = isInWishlist(place.id);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Wishlist toggle */}
      <button
        onClick={() =>
          toggleWishlist({
            id: place.id,
            name: place.name,
            subtitle: `${place.category} · ${district.name}, ${state.name}`,
            image: place.images[0],
            rating: place.rating,
            url: `/states/${state.id}/${district.id}/${place.id}`,
          })
        }
        className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
          isSaved
            ? "bg-rose-500/20 border-rose-500/40 text-rose-300 shadow-lg shadow-rose-500/10"
            : "bg-white/5 hover:bg-white/10 text-gray-300 border-white/10"
        }`}
      >
        <Heart className={`w-4 h-4 ${isSaved ? "fill-rose-500 text-rose-500" : ""}`} />
        <span>{isSaved ? "Saved in Wishlist" : "Save to Wishlist"}</span>
      </button>

      {/* AI Plan Trigger */}
      <button
        onClick={() => openTripPlannerWithState(state.id)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all cursor-pointer shadow-md shadow-amber-500/10"
      >
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span>Generate AI Itinerary</span>
      </button>

      {/* Share / Copy Link */}
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs font-bold transition-all cursor-pointer"
        title="Share link"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
        <span>{copied ? "Link Copied!" : "Share"}</span>
      </button>
    </div>
  );
}
