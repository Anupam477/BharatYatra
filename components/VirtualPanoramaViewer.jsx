"use client";

import { useState, useRef } from "react";
import { Eye, Compass, MoveHorizontal, Sparkles, MapPin, Maximize2 } from "lucide-react";

const PANORAMAS = [
  {
    id: "taj",
    name: "Taj Mahal Sunrise Vista",
    location: "Agra, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2400&q=90",
    trivia: "The four minarets were deliberately tilted slightly outwards so that in the event of an earthquake, they would fall away from the central dome.",
  },
  {
    id: "pangong",
    name: "Pangong Tso Sapphire Waters",
    location: "Leh, Ladakh (4,225m)",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=2400&q=90",
    trivia: "Pangong Tso completely freezes over in winter despite being saline water. It shifts colors from cobalt blue to turquoise throughout the day.",
  },
  {
    id: "munnar",
    name: "Munnar Rolling Emerald Tea Valleys",
    location: "Idukki, Kerala",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2400&q=90",
    trivia: "Home to Anamudi, the highest peak in South India at 2,695m, and the rare Neelakurinji shrub which blooms once every twelve years.",
  },
  {
    id: "jaipur",
    name: "Amer Fort Ramparts & Maota Lake",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2400&q=90",
    trivia: "Constructed with red sandstone and marble, Amer Fort features the Sheesh Mahal where a single candle flame is reflected across thousands of mirrors.",
  },
];

export default function VirtualPanoramaViewer() {
  const [activeScene, setActiveScene] = useState(PANORAMAS[0]);
  const [dragOffset, setDragOffset] = useState(50); // percentage 0 to 100
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    startXRef.current = e.clientX;

    setDragOffset((prev) => {
      // Smooth sensitivity
      const next = prev - deltaX * 0.12;
      return Math.min(Math.max(next, 0), 100);
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-12 border border-white/10 space-y-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
            <Eye className="w-4 h-4 text-sky-400" />
            Virtual Panoramic Viewport
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Panoramic Immersion Portal
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-1">
            Click & drag horizontally across the high-resolution viewport to look across India's most breathtaking horizons.
          </p>
        </div>

        {/* Scene Switchers */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {PANORAMAS.map((scene) => (
            <button
              key={scene.id}
              onClick={() => {
                setActiveScene(scene);
                setDragOffset(50);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeScene.id === scene.id
                  ? "bg-sky-500 text-gray-950 shadow-md shadow-sky-500/20 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {scene.name.split(" ")[0]} {scene.name.split(" ")[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Panorama Canvas */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative h-80 sm:h-[460px] w-full rounded-3xl overflow-hidden border border-white/15 bg-black cursor-grab active:cursor-grabbing shadow-2xl select-none"
      >
        {/* Background Image shifted by drag */}
        <div
          className="absolute inset-0 w-[160%] -left-[30%] h-full transition-transform ease-out duration-100"
          style={{
            transform: `translateX(${(dragOffset - 50) * -0.5}%) scale(1.05)`,
            backgroundImage: `url(${activeScene.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Ambient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-black/30 pointer-events-none" />

        {/* Center Drag Guide Cue */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white/90 flex items-center gap-2 pointer-events-none shadow-xl">
          <MoveHorizontal className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Drag horizontally to Pan View</span>
        </div>

        {/* Scene Info Strip Bottom */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
          <div className="space-y-1.5 max-w-lg">
            <span className="text-xs text-amber-300 font-bold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {activeScene.location}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow-lg">
              {activeScene.name}
            </h3>
            <p className="text-xs text-gray-300 line-clamp-2 drop-shadow bg-black/40 backdrop-blur-sm p-2 rounded-xl border border-white/10">
              💡 {activeScene.trivia}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
