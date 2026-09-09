"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { AudioPlayerButton } from "@/components/audio-player-button";

// Grouped navigation items for better organization
const getNavGroups = (lang: "en" | "ta"): Array<{ id: string; items: Array<{ href: string; label: string }> }> => [
  {
    id: "main",
    items: [
      { href: "/", label: translations[lang].nav.home },
      { href: "/about-sai-baba", label: translations[lang].nav.aboutSaiBaba },
      { href: "/temple-info", label: translations[lang].nav.templeInfo },
    ],
  },
  {
    id: "spiritual",
    items: [
      { href: "/aarti-bhajans", label: translations[lang].nav.aartiBhajans },
      { href: "/devotion", label: translations[lang].nav.devotion },
    ],
  },
  {
    id: "community",
    items: [
      { href: "/events", label: translations[lang].nav.events },
      { href: "/gallery", label: translations[lang].nav.gallery },
      { href: "/goshla", label: translations[lang].nav.goshala },
    ],
  },
  {
    id: "support",
    items: [
      { href: "/donations", label: translations[lang].nav.donations },
      { href: "/contact", label: translations[lang].nav.contact },
    ],
  },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const languages = [
    { code: "en" as const, label: "English" },
    { code: "ta" as const, label: "தமிழ்" },
  ];

  const navGroups = getNavGroups(language);
  const allNavItems = navGroups.flatMap((group) => group.items);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <nav 
        className="fixed top-0 left-0 right-0 z-[70] shadow-md"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)"
        }}
      >
      {/* Top Bar - Language Selector & Logo */}
      <div 
        className="border-b border-amber-300/50 w-full"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="w-full px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
            {/* Logo & Text - Left */}
            <Link 
              href="/" 
              className="flex items-center gap-2 lg:gap-3 hover:opacity-90 transition-opacity duration-200 flex-shrink-0"
            >
              <div className="relative w-7 h-7 lg:w-8 lg:h-8 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/home/logo.jpeg"
                  alt="Om Logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <span 
                className="text-xs lg:text-lg font-serif font-extrabold text-divine-saffron leading-tight"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                <span className="lg:hidden block">
                  Shri Shirdi Vijaya Sainatha<br />Gurumoorthy Temple
                </span>
                <span className="hidden lg:block whitespace-nowrap">
                  Shri Shirdi Vijaya Sainatha Gurumoorthy Temple
                </span>
              </span>
            </Link>

            {/* Text Slider - Desktop Only (Top Bar) */}
            <div className="hidden lg:flex flex-1 mx-4 overflow-hidden relative">
              <div className="animate-scroll-text whitespace-nowrap text-sm text-gray-700 font-medium flex items-center">
                {language === "en" ? (
                  <>
                    <span className="inline-block mr-8">Om Sai Ram - Divine Blessings</span>
                    <span className="inline-block mr-8">Shraddha aur Saburi - Faith and Patience</span>
                    <span className="inline-block mr-8">Why fear when I am here?</span>
                    <span className="inline-block mr-8">Om Sai Ram - Divine Blessings</span>
                    <span className="inline-block mr-8">Shraddha aur Saburi - Faith and Patience</span>
                    <span className="inline-block mr-8">Why fear when I am here?</span>
                  </>
                ) : (
                  <>
                    <span className="inline-block mr-8">ஓம் சாய் ராம் - தெய்வீக ஆசீர்வாதங்கள்</span>
                    <span className="inline-block mr-8">ஷ்ரத்தா அவுர் சபுரி - நம்பிக்கை மற்றும் பொறுமை</span>
                    <span className="inline-block mr-8">நான் இங்கே இருக்கும்போது ஏன் பயப்பட வேண்டும்?</span>
                    <span className="inline-block mr-8">ஓம் சாய் ராம் - தெய்வீக ஆசீர்வாதங்கள்</span>
                    <span className="inline-block mr-8">ஷ்ரத்தா அவுர் சபுரி - நம்பிக்கை மற்றும் பொறுமை</span>
                    <span className="inline-block mr-8">நான் இங்கே இருக்கும்போது ஏன் பயப்பட வேண்டும்?</span>
                  </>
                )}
              </div>
            </div>

            {/* Language Selector - Right */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="relative">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-divine-saffron hover:bg-white/30 transition-all duration-200"
                  style={{ fontWeight: 500 }}
                >
                  <Globe className="w-4 h-4" />
                  <span>{languages.find(l => l.code === language)?.label || "English"}</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    languageOpen && "rotate-180"
                  )} />
                </button>
                
                {/* Language Dropdown */}
                {languageOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-amber-200/40 overflow-hidden min-w-[140px] z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLanguageOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                          "hover:bg-divine-cream hover:text-divine-saffron",
                          language === lang.code
                            ? "bg-divine-cream text-divine-saffron"
                            : "text-gray-700"
                        )}
                        style={{ fontWeight: 500 }}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <AudioPlayerButton inline />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Page Links */}
      <div 
        className="border-b border-amber-400/40"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        <div className="w-full px-4 lg:px-6">
          <div className="flex items-center justify-between lg:justify-center h-14 max-w-7xl mx-auto">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              {allNavItems.map((item, index) => (
                <div key={item.href} className="flex items-center">
                  {index > 0 && (
                    <div className="w-px h-4 bg-white/30 mx-2 lg:mx-3" />
                  )}
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-2 lg:px-3 py-1.5 text-xs lg:text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap",
                      "hover:bg-white/20 hover:text-white",
                      pathname === item.href
                        ? "text-white bg-white/15"
                        : "text-white/90"
                    )}
                    style={{ fontWeight: 500 }}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white rounded-full" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Text Slider - Mobile Only */}
            <div className="flex-1 mx-2 lg:hidden overflow-hidden">
              <div className="relative h-full flex items-center">
                <div className="animate-scroll-text whitespace-nowrap text-sm text-white/90 font-medium">
                  {language === "en" ? (
                    <>
                      <span className="inline-block mr-8">Om Sai Ram - Divine Blessings</span>
                      <span className="inline-block mr-8">Shraddha aur Saburi - Faith and Patience</span>
                      <span className="inline-block mr-8">Why fear when I am here?</span>
                      <span className="inline-block mr-8">Om Sai Ram - Divine Blessings</span>
                      <span className="inline-block mr-8">Shraddha aur Saburi - Faith and Patience</span>
                      <span className="inline-block mr-8">Why fear when I am here?</span>
                    </>
                  ) : (
                    <>
                      <span className="inline-block mr-8">ஓம் சாய் ராம் - தெய்வீக ஆசீர்வாதங்கள்</span>
                      <span className="inline-block mr-8">ஷ்ரத்தா அவுர் சபுரி - நம்பிக்கை மற்றும் பொறுமை</span>
                      <span className="inline-block mr-8">நான் இங்கே இருக்கும்போது ஏன் பயப்பட வேண்டும்?</span>
                      <span className="inline-block mr-8">ஓம் சாய் ராம் - தெய்வீக ஆசீர்வாதங்கள்</span>
                      <span className="inline-block mr-8">ஷ்ரத்தா அவுர் சபுரி - நம்பிக்கை மற்றும் பொறுமை</span>
                      <span className="inline-block mr-8">நான் இங்கே இருக்கும்போது ஏன் பயப்பட வேண்டும்?</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button - Right Side */}
            <div className="lg:hidden flex items-center ml-auto">
              <button
                className="p-2.5 rounded-lg text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X size={22} className="transition-transform duration-200" />
                ) : (
                  <Menu size={22} className="transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Slide-in Menu */}
          <div
            className={cn(
              "fixed top-0 right-0 h-screen w-80 max-w-[85vw] z-[80] lg:hidden transform transition-transform duration-300 ease-in-out",
              "shadow-2xl",
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
            style={{
              background: GRADIENTS.dark,
            }}
          >
            <div className="flex flex-col h-screen">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <span 
                  className="text-lg font-serif font-extrabold text-white"
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
                <nav className="space-y-1 px-2">
                  {allNavItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3.5 text-base font-medium rounded-lg transition-all duration-200 mx-2",
                        "hover:bg-white/20 hover:text-white hover:pl-6",
                        pathname === item.href
                          ? "text-white bg-white/15 border-l-4 border-white"
                          : "text-white/90"
                      )}
                      style={{ fontWeight: 500 }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-4 border-t border-white/20">
                <div className="text-center">
                  <p className="text-white/80 text-sm">Om Sai Ram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close language dropdown */}
      {languageOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setLanguageOpen(false)}
        />
      )}
    </nav>
    </>
  );
}

