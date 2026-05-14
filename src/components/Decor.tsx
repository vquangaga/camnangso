import { Sparkles, Heart, Star, PawPrint } from "lucide-react";

/** Floating colorful blobs as background */
export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="blob bg-pastel-pink hidden sm:block" style={{ width: "min(40vw,320px)", height: "min(40vw,320px)", top: -80, left: -60 }} />
      <span className="blob bg-pastel-blue" style={{ width: "min(50vw,280px)", height: "min(50vw,280px)", top: 40, right: -80 }} />
      <span className="blob bg-pastel-yellow hidden sm:block" style={{ width: "min(55vw,360px)", height: "min(55vw,360px)", bottom: -120, left: "30%" }} />
      <span className="blob bg-pastel-green" style={{ width: "min(45vw,240px)", height: "min(45vw,240px)", bottom: -60, right: 40 }} />
    </div>
  );
}

/** Sprinkled stickers (paws, hearts, sparkles) — purely decorative */
export function Sprinkles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden hidden sm:block">
      <PawPrint className="absolute w-6 h-6 sm:w-8 sm:h-8 text-pastel-pink-ink/60 float-slow" style={{ top: "10%", left: "6%", ['--r' as any]: "-18deg" }} />
      <Heart className="absolute w-5 h-5 sm:w-6 sm:h-6 text-pastel-orange-ink/70 float-med fill-pastel-orange" style={{ top: "22%", right: "10%", ['--r' as any]: "12deg" }} />
      <Sparkles className="absolute w-6 h-6 sm:w-7 sm:h-7 text-pastel-yellow-ink/80 float-fast" style={{ top: "60%", left: "4%" }} />
      <Star className="absolute w-4 h-4 sm:w-5 sm:h-5 text-pastel-blue-ink/70 float-slow fill-pastel-blue" style={{ top: "70%", right: "8%", ['--r' as any]: "8deg" }} />
      <PawPrint className="absolute w-5 h-5 sm:w-6 sm:h-6 text-pastel-green-ink/60 float-med" style={{ bottom: "8%", left: "40%", ['--r' as any]: "20deg" }} />
    </div>
  );
}

/** Marquee strip — bouncy moving text band */
export function FunMarquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-foreground text-background py-3">
      <div className="marquee flex gap-10 whitespace-nowrap will-change-transform">
        {loop.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-3 font-display text-lg">
            <PawPrint className="w-4 h-4 text-pastel-yellow" />
            {t}
            <Sparkles className="w-4 h-4 text-pastel-pink" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** A playful sticker badge */
export function Sticker({
  children,
  className = "",
  rotate = -6,
  tone = "pink",
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  tone?: "pink" | "blue" | "orange" | "green" | "yellow";
}) {
  const map: Record<string, string> = {
    pink: "bg-pastel-pink text-pastel-pink-ink",
    blue: "bg-pastel-blue text-pastel-blue-ink",
    orange: "bg-pastel-orange text-pastel-orange-ink",
    green: "bg-pastel-green text-pastel-green-ink",
    yellow: "bg-pastel-yellow text-pastel-yellow-ink",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-display text-sm sticker-shadow ${map[tone]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
