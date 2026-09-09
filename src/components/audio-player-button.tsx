"use client";

import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAudio } from "@/contexts/audio-context";

type AudioPlayerButtonProps = {
  inline?: boolean;
};

export function AudioPlayerButton({ inline = false }: AudioPlayerButtonProps) {
  const { isPlaying, togglePlayPause } = useAudio();

  return (
    <div className={cn(inline ? "relative z-10" : "fixed bottom-4 right-4 z-50")}>
      <button
        onClick={() => void togglePlayPause()}
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
    </div>
  );
}
