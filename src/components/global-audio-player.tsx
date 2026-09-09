"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

type GlobalAudioPlayerProps = {
  inline?: boolean;
};

export function GlobalAudioPlayer({ inline = false }: GlobalAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const manuallyPausedRef = useRef(false);

  // Auto-play on page load and continue across page navigations unless manually stopped
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Check if user manually paused in this session
    const wasManuallyPaused = sessionStorage.getItem("audioManuallyPaused") === "true";
    // Check if audio was playing before navigation
    const wasPlaying = sessionStorage.getItem("audioPlaying") === "true";

    const tryAutoPlay = async () => {
      // Don't auto-play if user manually paused
      if (wasManuallyPaused) {
        setIsPlaying(false);
        return;
      }

      // If was playing before, continue playing
      if (wasPlaying || !wasManuallyPaused) {
        try {
          // Set volume to a reasonable level
          audio.volume = 0.5;
          await audio.play();
          setIsPlaying(true);
          sessionStorage.setItem("audioPlaying", "true");
        } catch (error) {
          // Auto-play was prevented by browser policy
          // This is normal - browsers require user interaction for audio
          setIsPlaying(false);
          sessionStorage.setItem("audioPlaying", "false");
        }
      }
    };

    // Wait for audio to be ready
    const handleCanPlay = () => {
      tryAutoPlay();
    };

    if (audio.readyState >= 2) {
      // Audio is already loaded
      tryAutoPlay();
    } else {
      // Wait for audio to be ready
      audio.addEventListener("canplaythrough", handleCanPlay, { once: true });
      audio.addEventListener("loadeddata", handleCanPlay, { once: true });
    }

    // Track playing state from user interactions
    const handlePlay = () => {
      setIsPlaying(true);
      sessionStorage.setItem("audioPlaying", "true");
      sessionStorage.removeItem("audioManuallyPaused");
      manuallyPausedRef.current = false;
    };
    
    const handlePause = () => {
      setIsPlaying(false);
      sessionStorage.setItem("audioPlaying", "false");
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("loadeddata", handleCanPlay);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        // Mark as manually paused
        manuallyPausedRef.current = true;
        sessionStorage.setItem("audioManuallyPaused", "true");
        sessionStorage.setItem("audioPlaying", "false");
      } else {
        await audio.play();
        setIsPlaying(true);
        // Clear manual pause flag when user resumes
        manuallyPausedRef.current = false;
        sessionStorage.removeItem("audioManuallyPaused");
        sessionStorage.setItem("audioPlaying", "true");
      }
    } catch (error) {
      console.error("Error toggling audio:", error);
    }
  };

  return (
    <div className={cn(inline ? "relative z-10" : "fixed bottom-4 right-4 z-50")}>
      <button
        onClick={togglePlayPause}
        className={cn(
          "rounded-full bg-divine-saffron text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110",
          inline ? "w-10 h-10" : "w-14 h-14"
        )}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className={cn(inline ? "w-4 h-4" : "w-6 h-6")} />
        ) : (
          <Play className={cn(inline ? "w-4 h-4" : "w-6 h-6")} />
        )}
      </button>
      <audio
        ref={audioRef}
        loop
        autoPlay
        preload="auto"
        className="hidden"
      >
        <source src="/audio/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

