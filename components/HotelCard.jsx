"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { formatCurrency } from "@/lib/currency";
import { Star, MapPin, Check, Wifi, Sparkles, X, Calendar, User, ShieldCheck } from "lucide-react";

export default function HotelCard({ hotel }) {
  const { currency } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [booked, setBooked] = useState(false);
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState("2026-11-15");

  if (!hotel) return null;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      setModalOpen(false);
    }, 2200);
  };

  return (
    <>
      <div className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group">
        <div>
          {/* Hotel Image with price badge */}
          <div className="relative h-52 w-full overflow-hidden bg-gray-900">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
            
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-bold text-amber-300 flex items-center gap-1 shadow-lg">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{hotel.rating}</span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="text-xs text-white/95 bg-gray-950/80 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400" />
                <span className="truncate max-w-[200px]">{hotel.location}</span>
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="p-6 space-y-3">
            <h4 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors line-clamp-1">
              {hotel.name}
            </h4>

            {/* Amenities tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {hotel.amenities?.map((amenity, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1 font-medium"
                >
                  <Check className="w-3 h-3 text-emerald-400" />
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-2">
          <div>
            <span className="text-[11px] text-gray-400 block font-medium">Starting from</span>
            <span className="text-xl font-black text-amber-400">
              {formatCurrency(hotel.pricePerNight, currency)}
            </span>
            <span className="text-[10px] text-gray-500"> / night</span>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black text-xs transition-all shadow-md shadow-amber-500/20 cursor-pointer"
          >
            Check Rates
          </button>
        </div>
      </div>

      {/* Booking Inquiry Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-md glass-panel bg-gray-950/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                Luxury Stay Reservation
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                {hotel.name}
              </h3>
              <p className="text-xs text-gray-400">{hotel.location}</p>
            </div>

            {booked ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-gray-950 flex items-center justify-center mx-auto font-black">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-400">Inquiry Confirmed!</h4>
                <p className="text-xs text-gray-300">
                  The concierge at {hotel.name} has received your reservation request for {guests} guests. You will receive a direct WhatsApp/Email itinerary confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Tariff Rate</span>
                  <strong className="text-amber-400 font-bold text-sm">
                    {formatCurrency(hotel.pricePerNight, currency)} / night
                  </strong>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value={1}>1 Adult (Solo Explorer)</option>
                    <option value={2}>2 Adults (Couple / Pair)</option>
                    <option value={3}>3 Adults (Family)</option>
                    <option value={4}>4+ Adults (Group)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-gray-950 font-black text-xs shadow-lg shadow-amber-500/20 hover:brightness-110 cursor-pointer"
                  >
                    Send Reservation Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
