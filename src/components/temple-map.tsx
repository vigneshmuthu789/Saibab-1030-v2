import { MAP_EMBED_URL } from "@/lib/constants";

type TempleMapProps = {
  title?: string;
  className?: string;
};

export function TempleMap({ title, className = "" }: TempleMapProps) {
  return (
    <div className={className}>
      {title ? (
        <h3
          className="text-xl font-bold mb-4 text-gray-800 text-left"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 900,
          }}
        >
          {title}
        </h3>
      ) : null}
      <div className="w-full h-[250px] md:h-[280px] rounded-xl overflow-hidden border border-amber-200/40">
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Sai Baba Temple Trust Location - Veda Garden, Mamandoor Village, Tenpadi, Maduranthakam Taluk, Chengalpattu District"
        />
      </div>
    </div>
  );
}
