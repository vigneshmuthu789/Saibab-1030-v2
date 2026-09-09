"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AudioEnablePrompt } from "@/components/audio-enable-prompt";

interface AudioContextType {
  isPlaying: boolean;
  togglePlayPause: () => Promise<void>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const AUDIO_SRC = "/audio/music.mp3";

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEnablePrompt, setShowEnablePrompt] = useState(false);
  const manuallyPausedRef = useRef(false);

  const startPlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || manuallyPausedRef.current) return false;

    try {
      audio.volume = 0.5;
      await audio.play();
      setIsPlaying(true);
      setShowEnablePrompt(false);
      sessionStorage.setItem("audioPlaying", "true");
      sessionStorage.removeItem("audioManuallyPaused");
      sessionStorage.removeItem("audioPromptDismissed");
      return true;
    } catch {
      setIsPlaying(false);
      return false;
    }
  }, []);

  const dismissPrompt = useCallback(() => {
    setShowEnablePrompt(false);
    sessionStorage.setItem("audioPromptDismissed", "true");
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    manuallyPausedRef.current =
      sessionStorage.getItem("audioManuallyPaused") === "true";
    const promptDismissed =
      sessionStorage.getItem("audioPromptDismissed") === "true";

    const tryAutoPlay = async () => {
      if (manuallyPausedRef.current) return;

      const started = await startPlayback();
      if (!started && !promptDismissed) {
        setShowEnablePrompt(true);
      }
    };

    if (audio.readyState >= 2) {
      void tryAutoPlay();
    } else {
      audio.addEventListener("canplaythrough", () => void tryAutoPlay(), {
        once: true,
      });
      audio.addEventListener("loadeddata", () => void tryAutoPlay(), {
        once: true,
      });
    }

    const unlockOnInteraction = async () => {
      if (!manuallyPausedRef.current && audio.paused) {
        const started = await startPlayback();
        if (started) {
          setShowEnablePrompt(false);
        }
      }
    };

    const interactionEvents = ["click", "touchstart", "keydown", "pointerdown"] as const;
    interactionEvents.forEach((event) => {
      document.addEventListener(event, () => void unlockOnInteraction(), {
        once: true,
        passive: true,
      });
    });

    const handlePlay = () => {
      setIsPlaying(true);
      setShowEnablePrompt(false);
      sessionStorage.setItem("audioPlaying", "true");
    };

    const handlePause = () => {
      setIsPlaying(false);
      if (!manuallyPausedRef.current) {
        sessionStorage.setItem("audioPlaying", "false");
      }
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [startPlayback]);

  const togglePlayPause = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        manuallyPausedRef.current = true;
        sessionStorage.setItem("audioManuallyPaused", "true");
        sessionStorage.setItem("audioPlaying", "false");
        audio.pause();
        setIsPlaying(false);
        setShowEnablePrompt(false);
      } else {
        manuallyPausedRef.current = false;
        sessionStorage.removeItem("audioManuallyPaused");
        sessionStorage.removeItem("audioPromptDismissed");
        await startPlayback();
      }
    } catch (error) {
      console.error("Error toggling audio:", error);
    }
  }, [isPlaying, startPlayback]);

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlayPause }}>
      {children}
      {showEnablePrompt && !isPlaying && (
        <AudioEnablePrompt
          onEnable={() => void startPlayback()}
          onDismiss={dismissPrompt}
        />
      )}
      <audio
        ref={audioRef}
        loop
        autoPlay
        playsInline
        preload="auto"
        className="hidden"
      >
        <source src={AUDIO_SRC} type="audio/mpeg" />
      </audio>
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
