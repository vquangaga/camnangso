import type { ReactNode } from "react";

export function InfoCard({
  title,
  icon,
  children,
  tone = "default",
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  tone?: "default" | "warning" | "success" | "accent";
}) {
  const tones = {
    default: "bg-card border-border",
    warning: "bg-destructive/5 border-destructive/20",
    success: "bg-secondary/8 border-secondary/25",
    accent: "bg-accent/20 border-accent/40",
  } as const;
  return (
    <div className={`rounded-2xl border p-6 ${tones[tone]}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
            {icon}
          </span>
        )}
        <h3 className="font-display text-xl">{title}</h3>
      </div>
      <div className="text-foreground/80 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}
