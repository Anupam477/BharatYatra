"use client";

import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { X, Heart, Trash2, ArrowRight, Sparkles, MapPin, Star } from "lucide-react";

export default function WishlistDrawer() {
  const { wishlist, toggleWishlist, isWishlistOpen, setIsWishlistOpen, setIsTripPlannerOpen } = useApp();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md glass-panel bg-gray-950/95 border-l border-white/10 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">
                  Your Travel Wishlist
                </h3>
                <span className="text-xs text-gray-400">
                  {wishlist.length} Saved {wishlist.length === 1 ? "Destination" : "Destinations"}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length > 0 ? (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl glass-panel border border-white/10 flex items-center gap-3.5 group hover:border-amber-500/30 transition-all"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover border border-white/10 flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400 truncate flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                      {item.location || item.subtitle}
                    </p>
                    {item.rating && (
                      <div className="flex items-center gap-1 text-[11px] text-amber-400 font-bold mt-1">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{item.rating}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => toggleWishlist(item)}
                      title="Remove from wishlist"
                      className="p-1.5 rounded-lg text-gray-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {item.url && (
                      <Link
                        href={item.url}
                        onClick={() => setIsWishlistOpen(false)}
                        className="p-1.5 rounded-lg text-amber-400 hover:bg-amber-500/10 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-gray-500">
                  <Heart className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-white">Your Wishlist is Empty</h4>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Click the heart icon on any landmark, palace, or backwater to save it here for quick access.
                </p>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          {wishlist.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-gray-900/50 space-y-3">
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  setIsTripPlannerOpen(true);
                }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Sparkles className="w-4 h-4" />
                Plan Itinerary for Saved Places
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
