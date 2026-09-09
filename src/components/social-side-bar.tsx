"use client";

import Link from "next/link";
import {
  Mail,
  Youtube,
  Facebook,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type SocialSideBarProps = {
  whatsappUrl: string;
  youtubeUrl: string;
  facebookUrl: string;
  instagramUrl: string;
};

export function SocialSideBar({
  whatsappUrl,
  youtubeUrl,
  facebookUrl,
  instagramUrl,
}: SocialSideBarProps) {
  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col overflow-hidden rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#E8F8EE] hover:bg-[#D8F2E3] text-white p-3 flex items-center justify-center transition-colors duration-200"
          aria-label="Open WhatsApp chat"
        >
          <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
        </a>

        <Link
          href="/contact"
          className="bg-divine-saffron hover:bg-divine-saffron-dark text-white p-3 flex items-center justify-center transition-colors duration-200"
          aria-label="Go to Contact Us page"
        >
          <Mail className="w-4 h-4" />
        </Link>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF0000] hover:bg-[#E00000] text-white p-3 flex items-center justify-center transition-colors duration-200"
          aria-label="Open YouTube page"
        >
          <Youtube className="w-4 h-4" />
        </a>

        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1877F2] hover:bg-[#0F67DA] text-white p-3 flex items-center justify-center transition-colors duration-200"
          aria-label="Open Facebook page"
        >
          <Facebook className="w-4 h-4" />
        </a>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white p-3 flex items-center justify-center transition-opacity duration-200"
          aria-label="Open Instagram page"
        >
          <Instagram className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
