import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Stethoscope, Brain, Siren, Users, ArrowRight, Sparkles, MapPin, QrCode, Clock, PawPrint, Heart, Star } from "lucide-react";
import heroImg from "@/assets/hero-pets.jpg";
import { Blobs, Sprinkles, FunMarquee, Sticker } from "@/components/Decor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cẩm Nang Số — Chăm Sóc Thú Cưng Đô Thị" },
      { name: "description", content: "5 trụ cột chăm sóc chó mèo trong căn hộ: Không gian, Y tế, Tâm lý, Sơ cứu và Petiquette." },
    ],
  }),
  component: HomePage,
});

const pillars = [
  { to: "/khong-gian", icon: Home,        title: "Không gian sống",     desc: "Tối ưu căn hộ nhỏ: góc ăn, góc vệ sinh, an toàn ban công.",  bg: "bg-pastel-pink",   ink: "text-pastel-pink-ink",   ring: "hover:border-pastel-pink-ink/40" },
  { to: "/y-te",       icon: Stethoscope, title: "Y tế & Dinh dưỡng",   desc: "Sổ tiêm điện tử, công thức calo cho thú ít vận động.",      bg: "bg-pastel-blue",   ink: "text-pastel-blue-ink",   ring: "hover:border-pastel-blue-ink/40" },
  { to: "/tam-ly",     icon: Brain,       title: "Tâm lý 4 bức tường",  desc: "Indoor games, làm quen tiếng ồn, xử lý lo âu xa chủ.",      bg: "bg-pastel-orange", ink: "text-pastel-orange-ink", ring: "hover:border-pastel-orange-ink/40" },
  { to: "/so-cuu",     icon: Siren,       title: "Sơ cứu khẩn cấp",     desc: "Hóc dị vật, sốc nhiệt, ngộ độc — xử lý trong 60 giây.",     bg: "bg-pastel-green",  ink: "text-pastel-green-ink",  ring: "hover:border-pastel-green-ink/40" },
  { to: "/petiquette", icon: Users,       title: "Petiquette",          desc: "Quy tắc thang máy, công viên, hành lang chung cư.",         bg: "bg-pastel-yellow", ink: "text-pastel-yellow-ink", ring: "hover:border-pastel-yellow-ink/40" },
] as const;

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-warm grain" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Phiên bản 1.0 · Cập nhật 2026
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] text-foreground">
              Cẩm Nang Số <br />
              <span className="text-primary italic">Chăm Sóc Thú Cưng</span> <br />
              Môi Trường Đô Thị
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Từ căn hộ 30m² đến chung cư 30 tầng — bộ tài liệu thực chiến giúp bạn
              nuôi chó mèo khỏe, vui và văn minh giữa lòng thành phố.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/khong-gian"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Bắt đầu khám phá <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/so-cuu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-muted transition-colors font-medium"
              >
                <Siren className="w-4 h-4 text-destructive" /> Sơ cứu khẩn cấp
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "5", v: "Trụ cột chính" },
                { k: "60s", v: "Mẹo nhanh" },
                { k: "100%", v: "Thực chiến" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-primary">{s.k}</dt>
                  <dd className="text-sm text-muted-foreground mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <img src={heroImg} alt="Chó và mèo trong căn hộ ấm cúng" width={1536} height={1024} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 5 trụ cột */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-sm uppercase tracking-wider text-primary font-medium">Mục lục</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">5 trụ cột của cẩm nang</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Mỗi trụ cột là một bộ checklist + infographic có thể chụp màn hình lưu lại để dùng khi cần.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className={`group rounded-2xl border border-border bg-card p-7 hover:shadow-lg transition-all ${p.ring}`}
            >
              <span className={`grid place-items-center w-12 h-12 rounded-xl ${p.bg} ${p.ink}`}>
                <p.icon className="w-6 h-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.desc}</p>
              <span className={`mt-5 inline-flex items-center gap-1 text-sm font-medium ${p.ink} group-hover:gap-2 transition-all`}>
                Xem chi tiết <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Điểm khác biệt */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-secondary font-medium">Điểm khác biệt</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Không lý thuyết — chỉ thực chiến.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Thay vì khuyên chung chung "hãy dắt chó đi dạo", chúng tôi chỉ rõ
              <span className="text-foreground font-medium"> công viên nào ở phường Thanh Xuân cho phép mang thú cưng</span>,
              cách chọn dây dắt trợ lực cho chó lớn trong không gian hẹp, và mã QR đến phòng khám gần nhất.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: MapPin, t: "Bản đồ thú y", d: "Tra cứu phòng khám 24/7 gần bạn." },
              { icon: QrCode, t: "Mã QR liên kết", d: "Dẫn tới video, biểu mẫu, tài liệu PDF." },
              { icon: Clock, t: "60 giây mẹo nhanh", d: "Video short-form đính kèm từng mục." },
              { icon: Users, t: "Chuẩn cộng đồng", d: "Bộ Petiquette gửi BQL chung cư." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-card border border-border p-5">
                <c.icon className="w-6 h-6 text-primary" />
                <h4 className="mt-3 font-display text-lg">{c.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl">
          Sẵn sàng để boss của bạn sống vui hơn?
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Bắt đầu với trụ cột phù hợp nhất với hoàn cảnh của bạn ngay hôm nay.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/khong-gian" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            Tối ưu căn hộ
          </Link>
          <Link to="/tam-ly" className="px-6 py-3 rounded-full border border-border bg-background hover:bg-muted transition-colors font-medium">
            Hiểu tâm lý boss
          </Link>
        </div>
      </section>
    </>
  );
}
