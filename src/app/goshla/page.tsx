import Image from "next/image";
import { GoshlaDonateButton } from "@/components/goshla-donate-button";
import { Card } from "@/components/ui/card";
const SIDE_IMAGES = {
  left: "/goshla/new%20%20(2).png",
  right: "/goshla/new%20%20(1).png",
} as const;

const BOTTOM_IMAGES = [
  { src: "/goshla/cow%2001.webp", alt: "கோசாலை — பசு" },
  { src: "/goshla/go%20shala%20kachi%20periyava.webp", alt: "கோசாலை காட்சி" },
  {
    src: "/goshla/1000_F_189540001_HcPchAU3Und1YH2WevhTVgMlilOJwQu3.webp",
    alt: "கோசாலை",
  },
  { src: "/goshla/Cow.webp", alt: "பசு" },
  { src: "/goshla/20260124_093300.jpg.webp", alt: "கோசாலை தருணம்" },
  { src: "/goshla/20260124_115836.jpg.webp", alt: "கோசாலை சேவை" },
] as const;

const SIDE_IMAGE_FRAME =
  "relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-inner ring-1 ring-amber-600/20";

export default function GoshlaPage() {
  return (
    <div className="min-h-screen w-full max-w-none bg-divine-cream/30 py-4 md:py-6">
      <section
        className="w-full max-w-none overflow-hidden border-y border-amber-400/70 shadow-md"
        style={{
          background:
            "linear-gradient(165deg, #fde68a 0%, #fef3c7 35%, #fffbeb 55%, #fde68a 100%)",
        }}
      >
        <div className="w-full px-2 sm:px-3 md:px-4 py-5 sm:py-6 md:py-8">
          <div className="mb-5 grid w-full grid-cols-1 items-center gap-3 sm:gap-4 md:mb-6 lg:grid-cols-12 lg:gap-4">
            <div className="lg:col-span-3">
              <div className={SIDE_IMAGE_FRAME}>
                <Image
                  src={SIDE_IMAGES.left}
                  alt="மஹா பெரியவா"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            </div>

            <div className="order-first w-full min-w-0 lg:order-none lg:col-span-6">
              <Card className="border-amber-300/60 bg-white/95 px-4 py-5 text-center shadow-lg backdrop-blur-sm sm:px-6 sm:py-6 md:px-8">
                <h1 className="text-[0.95rem] sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold leading-snug tracking-tight text-red-600 drop-shadow-sm break-words [overflow-wrap:anywhere]">
                  ஸ்ரீ சந்திரசேகரேந்திர சரஸ்வதி சுவாமிகள்
                </h1>
                <h2 className="mt-1.5 text-[0.8rem] sm:text-sm md:text-base lg:text-lg xl:text-xl font-extrabold leading-snug text-red-600 break-words [overflow-wrap:anywhere]">
                  ஸ்ரீ மஹாபெரியவா கோசாலை
                </h2>
              </Card>
            </div>
            <div className="lg:col-span-3">
              <div className={SIDE_IMAGE_FRAME}>
                <Image
                  src={SIDE_IMAGES.right}
                  alt="மஹா பெரியவா"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>

          <div
            className="w-full border-t border-amber-500/30 pt-3 md:pt-4"
            aria-label="Goshala gallery"
          >
            <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-4">
              {BOTTOM_IMAGES.map((item) => (
                <div
                  key={item.src}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-inner ring-1 ring-amber-600/20"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA directly under the banner (full width strip, button centered) */}
      <div className="mt-0 flex w-full justify-center border-b border-amber-400/50 bg-gradient-to-b from-amber-100/90 to-divine-cream/40 px-4 py-4 md:py-5">
        <GoshlaDonateButton />
      </div>
    </div>
  );
}
