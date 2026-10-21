"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music, Sparkles } from "lucide-react";

export default function AmbientAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVibe, setCurrentVibe] = useState("meditation"); // "meditation" | "flute" | "monsoon"
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Pentatonic notes for peaceful Indian Raag Bhupali (frequencies in Hz)
  const RAAG_BHUPALI = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25];

  const playPentatonicNote = (ctx) => {
    if (!ctx || ctx.state === "suspended") return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const note = RAAG_BHUPALI[Math.floor(Math.random() * RAAG_BHUPALI.length)];
      osc.type = "sine";
      osc.frequency.setValueAtTime(note, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.0);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 4.2);
    } catch (e) {
      console.warn("Audio note error:", e);
    }
  };

  const startAmbient = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      isPlayingRef.current = true;
      setIsPlaying(true);

      // Play initial chord
      playPentatonicNote(audioCtxRef.current);

      // Loop meditative notes
      timerRef.current = setInterval(() => {
        if (isPlayingRef.current && audioCtxRef.current) {
          playPentatonicNote(audioCtxRef.current);
        }
      }, 2400);
    } catch (err) {
      console.warn("Audio init error:", err);
    }
  };

  const stopAmbient = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "running") {
      audioCtxRef.current.suspend();
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbient();
    } else {
      startAmbient();
    }
  };

  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleSound}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-xl cursor-pointer ${
          isPlaying
            ? "bg-amber-500/20 border-amber-500/40 text-amber-300 shadow-amber-500/20 scale-105"
            : "bg-gray-950/80 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
        }`}
        title="Toggle Ambient Sounds of Bharat (Bansuri Meditation Harmonics)"
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5">
              <span className="w-1 h-3 bg-amber-400 rounded-full animate-bounce" />
              <span className="w-1 h-4 bg-amber-400 rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-1 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
            <span className="text-xs font-bold tracking-wide">Raag Harmonics</span>
            <Volume2 className="w-4 h-4 text-amber-400" />
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-medium">Sounds of Bharat</span>
            <VolumeX className="w-4 h-4 text-gray-500" />
          </>
        )}
      </button>
    </div>
  );
}
