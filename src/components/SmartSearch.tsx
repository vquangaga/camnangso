import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search, X, Sparkles, ArrowRight } from "lucide-react";

type Entry = {
  title: string;
  to: string;
  section: string;
  keywords: string;
  excerpt: string;
  tone: "pink" | "blue" | "orange" | "green" | "yellow" | "gray";
};

const INDEX: Entry[] = [
  // Không gian
  { title: "Thiết kế không gian sống cho thú cưng", to: "/khong-gian", section: "Không gian", tone: "pink",
    keywords: "không gian căn hộ chung cư cat tree cây mèo cào móng leo trèo zoning khu vực ăn ngủ vệ sinh ánh sáng cửa sổ ban công an toàn lưới bảo vệ",
    excerpt: "Phân vùng ăn — ngủ — vệ sinh — chơi, lắp lưới ban công, cây leo cho mèo." },
  { title: "An toàn ban công và cửa sổ", to: "/khong-gian", section: "Không gian", tone: "pink",
    keywords: "ban công lưới an toàn cửa sổ rơi ngã mèo chó chung cư cao tầng",
    excerpt: "Hướng dẫn chọn lưới, khoảng cách thanh chắn, vật liệu chống rơi." },

  // Y tế
  { title: "Lịch tiêm phòng & tẩy giun", to: "/y-te", section: "Y tế & Dinh dưỡng", tone: "blue",
    keywords: "tiêm phòng vaccine vắc xin dại 5 trong 1 4 trong 1 tẩy giun sán ve rận bọ chét lịch tiêm chó mèo",
    excerpt: "Lịch tiêm chuẩn theo tháng tuổi, các mũi bắt buộc và khuyến nghị." },
  { title: "Triệt sản chó mèo", to: "/y-te", section: "Y tế & Dinh dưỡng", tone: "blue",
    keywords: "triệt sản thiến cắt buồng trứng chi phí lợi ích thời điểm hậu phẫu",
    excerpt: "Thời điểm phù hợp, lợi ích sức khoẻ, hành vi và chi phí tham khảo." },
  { title: "Dinh dưỡng & khẩu phần ăn", to: "/y-te", section: "Y tế & Dinh dưỡng", tone: "blue",
    keywords: "thức ăn hạt khô pate thịt sống barf raw khẩu phần calo cân nặng béo phì chó mèo",
    excerpt: "Cách tính calo, chọn thức ăn theo độ tuổi và tình trạng cơ thể." },

  // Tâm lý
  { title: "Lo âu chia ly khi chủ đi làm", to: "/tam-ly", section: "Tâm lý & Hành vi", tone: "orange",
    keywords: "lo âu chia ly separation anxiety cô đơn sủa hú phá đồ đi làm 8 tiếng kong puzzle feeder",
    excerpt: "Dấu hiệu, bài tập làm quen với việc ở một mình, đồ chơi giải trí." },
  { title: "Huấn luyện cơ bản & enrichment", to: "/tam-ly", section: "Tâm lý & Hành vi", tone: "orange",
    keywords: "huấn luyện clicker training reward enrichment làm giàu giác quan trò chơi trí tuệ",
    excerpt: "Lệnh cơ bản, củng cố tích cực và 7 ý tưởng enrichment trong nhà." },

  // Sơ cứu
  { title: "Sơ cứu khi thú cưng bị hóc", to: "/so-cuu", section: "Sơ cứu khẩn cấp", tone: "green",
    keywords: "sơ cứu hóc dị vật nghẹn heimlich chó mèo cấp cứu",
    excerpt: "Thao tác Heimlich biến thể cho chó nhỏ và chó lớn." },
  { title: "Ngộ độc & danh sách thực phẩm cấm", to: "/so-cuu", section: "Sơ cứu khẩn cấp", tone: "green",
    keywords: "ngộ độc socola chocolate hành tỏi nho xylitol thuốc người thực phẩm cấm",
    excerpt: "Triệu chứng, sơ cứu ban đầu và khi nào cần đến bác sĩ ngay." },
  { title: "Sốc nhiệt mùa hè", to: "/so-cuu", section: "Sơ cứu khẩn cấp", tone: "green",
    keywords: "sốc nhiệt say nắng nóng mùa hè giải nhiệt làm mát chó mèo",
    excerpt: "Cách hạ thân nhiệt an toàn, tránh sai lầm chườm đá trực tiếp." },

  // Petiquette
  { title: "Petiquette thang máy & hành lang", to: "/petiquette", section: "Petiquette", tone: "yellow",
    keywords: "petiquette thang máy hành lang chung cư hàng xóm rọ mõm dây xích lễ phép",
    excerpt: "Quy tắc dắt thú cưng trong khu vực chung, nhường chỗ, dọn vệ sinh." },
  { title: "Tiếng ồn & xử lý sủa quá mức", to: "/petiquette", section: "Petiquette", tone: "yellow",
    keywords: "tiếng ồn sủa hú đêm khuya hàng xóm phàn nàn cách hạn chế",
    excerpt: "Nguyên nhân thường gặp và phương pháp giảm sủa nhân văn." },

  // Tài nguyên
  { title: "Danh bạ phòng khám 24/7", to: "/tai-nguyen", section: "Tài nguyên & FAQ", tone: "gray",
    keywords: "phòng khám thú y 24/7 cấp cứu hà nội hồ chí minh đà nẵng số điện thoại địa chỉ",
    excerpt: "5 phòng khám hoạt động 24/7 với địa chỉ và hotline." },
  { title: "Ngân sách dự trù nuôi thú cưng", to: "/tai-nguyen", section: "Tài nguyên & FAQ", tone: "gray",
    keywords: "ngân sách chi phí tiền hàng tháng hàng năm nuôi chó mèo tiết kiệm",
    excerpt: "Bảng chi phí tham khảo theo tháng, theo năm." },
  { title: "Checklist sản phẩm cho người mới nuôi", to: "/tai-nguyen", section: "Tài nguyên & FAQ", tone: "gray",
    keywords: "checklist sản phẩm cần mua người mới nuôi chó mèo starter kit",
    excerpt: "Danh sách đồ dùng cơ bản cho mèo, chó và bộ y tế gia đình." },
  { title: "FAQ: Câu hỏi thường gặp", to: "/tai-nguyen", section: "Tài nguyên & FAQ", tone: "gray",
    keywords: "faq câu hỏi thường gặp nhận nuôi adoption budget vệ sinh tiếng ồn",
    excerpt: "8 câu hỏi phổ biến nhất về việc nuôi thú cưng tại đô thị." },
];

// remove Vietnamese diacritics for fuzzy match
function norm(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function score(entry: Entry, q: string) {
  const nq = norm(q).trim();
  if (!nq) return 0;
  const tokens = nq.split(/\s+/).filter(Boolean);
  const hay = norm(`${entry.title} ${entry.section} ${entry.keywords} ${entry.excerpt}`);
  let s = 0;
  for (const t of tokens) {
    if (!hay.includes(t)) return 0; // require all tokens present
    if (norm(entry.title).includes(t)) s += 5;
    if (norm(entry.section).includes(t)) s += 2;
    if (norm(entry.keywords).includes(t)) s += 3;
    s += 1;
  }
  return s;
}

const toneRing: Record<Entry["tone"], string> = {
  pink: "bg-pastel-pink text-pastel-pink-ink",
  blue: "bg-pastel-blue text-pastel-blue-ink",
  orange: "bg-pastel-orange text-pastel-orange-ink",
  green: "bg-pastel-green text-pastel-green-ink",
  yellow: "bg-pastel-yellow text-pastel-yellow-ink",
  gray: "bg-muted text-foreground",
};

const SUGGESTIONS = ["tiêm phòng", "ban công", "sốc nhiệt", "lo âu chia ly", "phòng khám 24/7", "ngộ độc socola"];

export function SmartSearch({ trigger = "button" }: { trigger?: "button" | "icon" }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  // Cmd/Ctrl + K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const results = useMemo(() => {
    if (!q.trim()) return [] as Array<Entry & { _s: number }>;
    return INDEX.map((e) => ({ ...e, _s: score(e, q) }))
      .filter((e) => e._s > 0)
      .sort((a, b) => b._s - a._s)
      .slice(0, 8);
  }, [q]);

  const go = (to: string) => {
    setOpen(false);
    setQ("");
    navigate({ to });
  };

  return (
    <>
      {trigger === "icon" ? (
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md hover:bg-muted text-foreground/80"
          aria-label="Tìm kiếm"
        >
          <Search className="w-5 h-5" />
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/40 text-sm text-foreground/70 hover:bg-muted transition-colors min-w-[200px]"
          aria-label="Tìm kiếm thông minh"
        >
          <Search className="w-4 h-4" />
          <span className="flex-1 text-left">Tìm kiếm…</span>
          <kbd className="hidden lg:inline text-[10px] px-1.5 py-0.5 rounded bg-background border border-border text-foreground/60">
            Ctrl K
          </kbd>
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-start justify-center p-4 pt-[10vh]"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-background shadow-2xl border border-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Sparkles className="w-5 h-5 text-primary" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Hỏi bất cứ điều gì: 'tiêm phòng', 'ban công', 'sốc nhiệt'…"
                className="flex-1 bg-transparent outline-none text-base placeholder:text-foreground/40"
              />
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded hover:bg-muted text-foreground/60"
                aria-label="Đóng"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {!q.trim() ? (
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-foreground/50 mb-3">
                    Gợi ý phổ biến
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setQ(s)}
                        className="px-3 py-1.5 rounded-full text-sm bg-muted hover:bg-muted/70 text-foreground/80 transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 text-xs uppercase tracking-wider text-foreground/50 mb-3">
                    Truy cập nhanh
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { to: "/khong-gian", label: "Không gian", tone: "pink" as const },
                      { to: "/y-te", label: "Y tế & Dinh dưỡng", tone: "blue" as const },
                      { to: "/tam-ly", label: "Tâm lý", tone: "orange" as const },
                      { to: "/so-cuu", label: "Sơ cứu", tone: "green" as const },
                      { to: "/petiquette", label: "Petiquette", tone: "yellow" as const },
                      { to: "/tai-nguyen", label: "Tài nguyên & FAQ", tone: "gray" as const },
                    ].map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg border border-border hover:bg-muted/50"
                      >
                        <span className="flex items-center gap-2 text-sm">
                          <span className={`w-2.5 h-2.5 rounded-full ${toneRing[p.tone]}`} />
                          {p.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-foreground/40" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="p-10 text-center text-sm text-foreground/60">
                  Không tìm thấy kết quả cho{" "}
                  <span className="font-medium text-foreground">"{q}"</span>.
                  <div className="mt-2 text-xs">Thử từ khoá ngắn hơn hoặc bỏ dấu.</div>
                </div>
              ) : (
                <ul className="py-2">
                  {results.map((r) => (
                    <li key={`${r.to}-${r.title}`}>
                      <button
                        onClick={() => go(r.to)}
                        className="w-full text-left px-4 py-3 hover:bg-muted/60 flex items-start gap-3 group"
                      >
                        <span
                          className={`shrink-0 mt-0.5 px-2 py-0.5 rounded-full text-[11px] font-medium ${toneRing[r.tone]}`}
                        >
                          {r.section}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block font-medium text-foreground">{r.title}</span>
                          <span className="block text-sm text-foreground/60 line-clamp-1">
                            {r.excerpt}
                          </span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground/70 mt-1" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="px-4 py-2 border-t border-border bg-muted/30 text-[11px] text-foreground/50 flex items-center justify-between">
              <span>Tìm kiếm thông minh — bỏ dấu vẫn ra kết quả</span>
              <span className="hidden sm:inline">
                <kbd className="px-1.5 py-0.5 rounded bg-background border border-border">Esc</kbd>{" "}
                để đóng
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
