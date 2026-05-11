import type { ReactNode } from "react";

type Tone = "pink" | "blue" | "orange" | "green" | "yellow" | "warm";

const toneStyles: Record<Tone, { bg: string; chip: string }> = {
  pink:   { bg: "bg-pastel-pink",   chip: "bg-pastel-pink-ink/10 text-pastel-pink-ink" },
  blue:   { bg: "bg-pastel-blue",   chip: "bg-pastel-blue-ink/10 text-pastel-blue-ink" },
  orange: { bg: "bg-pastel-orange", chip: "bg-pastel-orange-ink/10 text-pastel-orange-ink" },
  green:  { bg: "bg-pastel-green",  chip: "bg-pastel-green-ink/10 text-pastel-green-ink" },
  yellow: { bg: "bg-pastel-yellow", chip: "bg-pastel-yellow-ink/10 text-pastel-yellow-ink" },
  warm:   { bg: "gradient-warm",    chip: "bg-primary/10 text-primary" },
};

export function PageHero({
  eyebrow,
  title,
  description,
  icon,
  tone = "warm",
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon?: ReactNode;
  tone?: Tone;
}) {
  const t = toneStyles[tone];
  return (
    <section className={`border-b border-border ${t.bg}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 md:py-24">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${t.chip}`}>
          {icon}
          {eyebrow}
        </div>
        <h1 className="mt-5 font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          {title}
        </h1>
        <p className="mt-5 text-lg text-foreground/70 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
