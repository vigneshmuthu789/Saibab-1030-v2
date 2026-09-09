"use client";

import { Music } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

type AudioEnablePromptProps = {
  onEnable: () => void;
  onDismiss: () => void;
};

export function AudioEnablePrompt({ onEnable, onDismiss }: AudioEnablePromptProps) {
  const { language } = useLanguage();
  const t = translations[language].audio;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] w-[min(100%-2rem,28rem)]"
      role="region"
      aria-label={t.tapToEnable}
    >
      <button
        type="button"
        onClick={onEnable}
        className="w-full flex items-center gap-3 rounded-2xl border border-amber-300/60 bg-white/95 px-4 py-3.5 text-left shadow-xl backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-divine-saffron text-white">
          <Music className="h-5 w-5" />
        </span>
        <span className="flex-1">
          <span className="block text-sm font-semibold text-gray-800">{t.tapToEnable}</span>
          <span className="block text-xs text-gray-600 mt-0.5">{t.tapHint}</span>
        </span>
      </button>
      <button
        type="button"
        onClick={onDismiss}
        className="mt-3 w-full rounded-xl border border-amber-300/50 bg-white/90 px-4 py-2.5 text-center text-sm font-semibold text-gray-800 shadow-md backdrop-blur-sm transition-colors hover:bg-white hover:text-divine-saffron hover:border-amber-400/70"
      >
        {t.notNow}
      </button>
    </div>
  );
}
