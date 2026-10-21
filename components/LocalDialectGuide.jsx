"use client";

import { useState } from "react";
import { Volume2, Sparkles, MessageCircle, Globe, Check } from "lucide-react";

const PHRASES = [
  {
    phrase: "Khamma Ghani",
    script: "खम्मा घणी",
    language: "Rajasthani",
    region: "Rajasthan",
    meaning: "Royal Greeting & Deep Respect (Used like Hello / Blessings)",
    pronounceText: "Khamma Ghani",
    tip: "Respond with 'Ghani Khamma' with hands folded in namaste.",
  },
  {
    phrase: "Padharo Mhare Desh",
    script: "पधारो म्हारे देश",
    language: "Marwari",
    region: "Rajasthan",
    meaning: "Welcome to my beloved land!",
    pronounceText: "Padhaaro Mhaare Desh",
    tip: "Heard welcoming travelers into royal havelis and palaces.",
  },
  {
    phrase: "Julley!",
    script: "ཇུ་ལེགས། (Julley)",
    language: "Ladakhi / Bhoti",
    region: "Ladakh",
    meaning: "Universal word for Hello, Thank You, and Peace",
    pronounceText: "Julley",
    tip: "Said with a warm smile and slight bow across Himalayan mountain passes.",
  },
  {
    phrase: "Namaskaram",
    script: "നമസ്കാരം",
    language: "Malayalam",
    region: "Kerala",
    meaning: "Respectful divine greeting",
    pronounceText: "Namaskaram",
    tip: "Used when meeting locals on backwaters or at spice estates.",
  },
  {
    phrase: "Radhe Radhe",
    script: "राधे राधे",
    language: "Braj Bhasha",
    region: "Uttar Pradesh",
    meaning: "Sacred devotional greeting invoking love & grace",
    pronounceText: "Radhe Radhe",
    tip: "Universal greeting in Varanasi, Mathura, and along the holy Ganga.",
  },
  {
    phrase: "Deu boro dis dium",
    script: "देवान बरें दीस दीवंचें",
    language: "Konkani",
    region: "Goa",
    meaning: "May God grant you a wonderful day!",
    pronounceText: "Deu boro dis dium",
    tip: "A traditional warm Goan greeting across old Latin quarters.",
  },
];

export default function LocalDialectGuide() {
  const [playingPhrase, setPlayingPhrase] = useState(null);

  const speakPhrase = (phraseText) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phraseText);
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      utterance.lang = "hi-IN";

      setPlayingPhrase(phraseText);
      utterance.onend = () => setPlayingPhrase(null);
      utterance.onerror = () => setPlayingPhrase(null);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-12 border border-white/10 space-y-8 bg-gradient-to-br from-gray-950 via-[#0a101d] to-gray-950 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            Linguistic Etiquette Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Sounds of the Land: Bhasha & Boli Guide
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-1">
            Tap the speaker icon on any traditional greeting to hear authentic speech synthesis. Connecting with locals in their native tongue opens every door.
          </p>
        </div>
      </div>

      {/* Phrase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PHRASES.map((item, idx) => {
          const isSpeaking = playingPhrase === item.pronounceText;

          return (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-amber-500/30 transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-black px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {item.language} · {item.region}
                  </span>

                  {/* Audio Speak button */}
                  <button
                    onClick={() => speakPhrase(item.pronounceText)}
                    className={`p-2 rounded-xl transition-all cursor-pointer ${
                      isSpeaking
                        ? "bg-amber-500 text-gray-950 scale-110 shadow-lg shadow-amber-500/25"
                        : "bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10"
                    }`}
                    title="Listen to pronunciation"
                  >
                    <Volume2 className={`w-4 h-4 ${isSpeaking ? "animate-pulse" : ""}`} />
                  </button>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                    "{item.phrase}"
                  </h3>
                  <span className="text-xs text-amber-400/80 font-medium font-serif block mt-0.5">
                    {item.script}
                  </span>
                </div>

                <p className="text-xs text-gray-300 font-medium">
                  {item.meaning}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-gray-400">
                💡 <strong className="text-gray-300">Cultural Tip:</strong> {item.tip}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
