import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";

const links = [
  { to: "/", label: "Trang chủ" },
  { to: "/khong-gian", label: "Không gian" },
  { to: "/y-te", label: "Y tế & Dinh dưỡng" },
  { to: "/tam-ly", label: "Tâm lý" },
  { to: "/so-cuu", label: "Sơ cứu" },
  { to: "/petiquette", label: "Petiquette" },
  { to: "/tai-nguyen", label: "Tài nguyên & FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground">
            <PawPrint className="w-5 h-5" />
          </span>
          <span>Cẩm Nang Số</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm rounded-full text-foreground/75 hover:text-foreground hover:bg-muted transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm rounded-full bg-primary/10 text-primary font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-5 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-md text-foreground/80 hover:bg-muted"
              activeProps={{ className: "px-3 py-2 rounded-md bg-primary/10 text-primary font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
