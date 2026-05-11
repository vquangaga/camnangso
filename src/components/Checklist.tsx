import { Check } from "lucide-react";

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-0.5 grid place-items-center w-6 h-6 shrink-0 rounded-full bg-secondary/15 text-secondary">
            <Check className="w-3.5 h-3.5" strokeWidth={3} />
          </span>
          <span className="text-foreground/85 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
