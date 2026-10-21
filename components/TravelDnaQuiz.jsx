"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Sparkles, Compass, Check, ArrowRight, RotateCcw, Heart, ShieldCheck, Share2 } from "lucide-react";

const QUESTIONS = [
  {
    id: 1,
    title: "1. Your ideal morning in Bharat begins with:",
    options: [
      {
        id: "spiritual",
        label: "Sacred sunrise chants & brass lamps along ancient river ghats",
        tag: "Varanasi / Rishikesh",
        icon: "🪔"
      },
      {
        id: "adventure",
        label: "Crisp mountain wind overlooking snow-draped Himalayan peaks",
        tag: "Manali / Ladakh",
        icon: "🏔️"
      },
      {
        id: "royalty",
        label: "Peacocks strolling in the courtyard of a 400-year-old royal palace",
        tag: "Jaipur / Udaipur",
        icon: "👑"
      },
      {
        id: "coastal",
        label: "Tender coconut water watching traditional houseboats glide past",
        tag: "Kerala / Goa",
        icon: "🌴"
      }
    ]
  },
  {
    id: 2,
    title: "2. Your primary travel philosophy and rhythm:",
    options: [
      {
        id: "spiritual",
        label: "Rejuvenation, mindfulness meditation, and sacred living traditions",
        tag: "Soul Rebirth",
        icon: "🧘"
      },
      {
        id: "adventure",
        label: "High-octane exploration, river rafting, and scenic road trips",
        tag: "Adrenaline",
        icon: "🧗"
      },
      {
        id: "royalty",
        label: "Aristocratic luxury, Michelin-worthy thalis, and architectural grandeur",
        tag: "Opulence",
        icon: "🏰"
      },
      {
        id: "coastal",
        label: "Slow bohemian sunsets, beach shacks, and Ayurvedic therapies",
        tag: "Serenity",
        icon: "🌊"
      }
    ]
  },
  {
    id: 3,
    title: "3. Your ideal travel companion dynamic:",
    options: [
      {
        id: "solo",
        label: "Solo Nomad seeking introspection and serendipitous encounters",
        tag: "Solo Quest",
        icon: "🎒"
      },
      {
        id: "couple",
        label: "Romantic getaway with candlelit palace dinners and private boats",
        tag: "Romantic Pair",
        icon: "❤️"
      },
      {
        id: "family",
        label: "Family celebration with cultural discovery across generations",
        tag: "Family Heritage",
        icon: "👨‍👩‍👧‍👦"
      }
    ]
  }
];

const PERSONAS = {
  spiritual: {
    title: "The Sacred Soul Seeker",
    badge: "SPIRITUAL PILGRIM · मोक्ष साधक",
    stateId: "uttar-pradesh",
    matchCity: "Varanasi & Rishikesh",
    description: "You travel not to escape life, but so life does not escape you. You are deeply drawn to sacred ceremonies, riverfront dusk aartis, and ancient philosophical wisdom.",
    recommendedPlace: "Dashashwamedh Ghat & Triveni Sangam",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80"
  },
  adventure: {
    title: "The Himalayan Mystic",
    badge: "PEAK CONQUEROR · गिरि आरोही",
    stateId: "ladakh",
    matchCity: "Leh Ladakh & Manali",
    description: "You thrive at high altitudes where the air is thin and the spirits soar. Dramatic mountain passes, ancient monasteries, and glacial lakes fuel your adrenaline.",
    recommendedPlace: "Pangong Tso & Solang Valley Rapids",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80"
  },
  royalty: {
    title: "The Royal Chronicler",
    badge: "ROYAL ARISTOCRAT · राजवंशीय पथिक",
    stateId: "rajasthan",
    matchCity: "Jaipur & Udaipur",
    description: "You appreciate the finest expressions of human craftsmanship: sandstone carvings, mirror palaces, royal courtyards, and palatial hospitality fit for Maharajas.",
    recommendedPlace: "Hawa Mahal & Lake Pichola Island Palaces",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
  },
  coastal: {
    title: "The Coastal Bohemian",
    badge: "TROPICAL VOYAGER · सागर पथिक",
    stateId: "kerala",
    matchCity: "Alleppey & North Goa",
    description: "Your soul belongs near tranquil waters, swaying palms, and fresh sea breezes. You cherish tranquil houseboat mornings and cliffside golden hours.",
    recommendedPlace: "Alleppey Kettuvallam & Vagator Cliffs",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
  }
};

export default function TravelDnaQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [resultPersona, setResultPersona] = useState(null);
  const { openTripPlannerWithState } = useApp();

  const handleSelectOption = (questionId, optionId) => {
    const updated = { ...answers, [questionId]: optionId };
    setAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate dominant persona
      const q1 = updated[1] || "royalty";
      const persona = PERSONAS[q1] || PERSONAS.royalty;
      setResultPersona(persona);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResultPersona(null);
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-12 border border-white/10 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 space-y-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Travel DNA Matcher
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          What is Your Bharat Travel Persona?
        </h2>
        <p className="text-xs sm:text-sm text-gray-400">
          Answer 3 intuitive questions to discover your personalized travel archetype and curated destination match.
        </p>
      </div>

      {!resultPersona ? (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Progress bar */}
          <div className="flex items-center justify-between text-xs text-gray-400 font-semibold mb-2">
            <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
            <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% Completed</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Current Question */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {QUESTIONS[currentStep].title}
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {QUESTIONS[currentStep].options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(QUESTIONS[currentStep].id, opt.id)}
                  className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-amber-500/40 hover:bg-white/10 transition-all flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl">{opt.icon}</span>
                    <div>
                      <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors block">
                        {opt.label}
                      </span>
                      <span className="text-[11px] text-gray-400">{opt.tag}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Result Persona Card */
        <div className="max-w-3xl mx-auto glass-panel rounded-3xl overflow-hidden border border-amber-500/30 bg-gray-900/90 shadow-2xl animate-in fade-in zoom-in-95 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={resultPersona.image}
                alt={resultPersona.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-950 via-gray-950/40 to-transparent" />
            </div>

            <div className="p-6 sm:p-8 space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-black uppercase tracking-widest block w-fit">
                  {resultPersona.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {resultPersona.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {resultPersona.description}
                </p>

                <div className="pt-2 text-xs text-gray-400 space-y-1">
                  <div>
                    <span className="text-gray-500">Curated Match: </span>
                    <strong className="text-white">{resultPersona.matchCity}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500">Top Experience: </span>
                    <strong className="text-amber-400">{resultPersona.recommendedPlace}</strong>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openTripPlannerWithState(resultPersona.stateId)}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-gray-950 font-black text-xs text-center shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Match Itinerary</span>
                </button>

                <button
                  onClick={handleReset}
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title="Retake Quiz"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
