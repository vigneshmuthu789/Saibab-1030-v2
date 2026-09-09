import type { Metadata } from "next";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/contexts/language-context";
import { AudioProvider } from "@/contexts/audio-context";
import { SocialSideBar } from "@/components/social-side-bar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["800", "900"],
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Sai Baba Vedha Garden - Divine Blessings",
  description: "Experience the divine presence of Sai Baba at Vedha Garden",
  icons: {
    icon: "/home/logo.jpeg",
    shortcut: "/home/logo.jpeg",
    apple: "/home/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        <LanguageProvider>
          <AudioProvider>
            <Navigation />
            <main className="min-h-screen pt-[120px]">{children}</main>
            <Footer />
            <SocialSideBar
              whatsappUrl={SOCIAL_LINKS.whatsapp}
              youtubeUrl={SOCIAL_LINKS.youtube}
              facebookUrl={SOCIAL_LINKS.facebook}
              instagramUrl={SOCIAL_LINKS.instagram}
            />
          </AudioProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

