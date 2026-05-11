import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon?: ReactNode;
}) {
  return (
    <section className="border-b border-border gradient-warm">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 md:py-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider">
          {icon}
          {eyebrow}
        </div>
        <h1 className="mt-5 font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          {title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
