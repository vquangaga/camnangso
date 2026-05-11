import { Link } from "@tanstack/react-router";
import { PawPrint } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-semibold">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground">
              <PawPrint className="w-5 h-5" />
            </span>
            Cẩm Nang Số Chăm Sóc Thú Cưng
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Bộ giải pháp toàn diện cho người nuôi chó mèo trong căn hộ đô thị —
            từ không gian, dinh dưỡng đến tâm lý và văn minh chung cư.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base mb-3">Nội dung</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/khong-gian" className="hover:text-foreground">Không gian sống</Link></li>
            <li><Link to="/y-te" className="hover:text-foreground">Y tế & Dinh dưỡng</Link></li>
            <li><Link to="/tam-ly" className="hover:text-foreground">Tâm lý "Bốn bức tường"</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base mb-3">Tiện ích</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/so-cuu" className="hover:text-foreground">Sơ cứu khẩn cấp</Link></li>
            <li><Link to="/petiquette" className="hover:text-foreground">Petiquette</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cẩm Nang Số. Dự án phi lợi nhuận vì cộng đồng nuôi thú cưng đô thị.
      </div>
    </footer>
  );
}
