import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope, Syringe, Apple, Calculator, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { Checklist } from "@/components/Checklist";

export const Route = createFileRoute("/y-te")({
  head: () => ({
    meta: [
      { title: "Y Tế & Dinh Dưỡng — Cẩm Nang Số" },
      { name: "description", content: "Sổ tiêm phòng điện tử, công thức calo và chế độ ăn cho chó mèo nuôi căn hộ ít vận động." },
      { property: "og:title", content: "Y tế & dinh dưỡng đô thị cho thú cưng" },
    ],
  }),
  component: YTePage,
});

const dogVaccines = [
  { age: "6–8 tuần", name: "Mũi 5 bệnh lần 1 (Care, Parvo, Viêm gan, Phổi, Lepto)" },
  { age: "10–12 tuần", name: "Mũi 7 bệnh lần 2 + Coronavirus" },
  { age: "14–16 tuần", name: "Mũi 7 bệnh lần 3 + Dại lần 1" },
  { age: "Hằng năm", name: "Tái chủng 7 bệnh + Dại" },
];
const catVaccines = [
  { age: "8–9 tuần", name: "Mũi 4 bệnh lần 1 (FVR, FCV, FPV, Chlamydia)" },
  { age: "12 tuần", name: "Mũi 4 bệnh lần 2" },
  { age: "16 tuần", name: "Dại lần 1 (nếu cho ra ngoài)" },
  { age: "Hằng năm", name: "Tái chủng 4 bệnh + Dại" },
];

function YTePage() {
  return (
    <>
      <PageHero
        eyebrow="Trụ cột 2"
        title="Y tế số & Dinh dưỡng cho thú ít vận động"
        description="Sổ tiêm điện tử, công thức tính calo theo cân nặng và lịch tẩy giun — tất cả có thể chụp màn hình lưu lại."
        icon={<Stethoscope className="w-3.5 h-3.5" />}
        tone="blue"
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-6">
          <Syringe className="w-6 h-6 text-primary" />
          <h2 className="font-display text-3xl">Sổ tay tiêm phòng điện tử</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {[
            { title: "Lịch vaccine cho Chó", data: dogVaccines },
            { title: "Lịch vaccine cho Mèo", data: catVaccines },
          ].map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="p-5 border-b border-border bg-muted/40">
                <h3 className="font-display text-xl">{g.title}</h3>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {g.data.map((r, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="px-5 py-3 font-medium text-primary whitespace-nowrap w-32">{r.age}</td>
                      <td className="px-5 py-3 text-foreground/85">{r.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { t: "Tẩy giun", d: "Mỗi 3 tháng cho chó/mèo trưởng thành. Con non: hàng tháng đến 6 tháng tuổi." },
            { t: "Phòng ve, bọ chét", d: "Nhỏ gáy hoặc viên uống mỗi 30 ngày, kể cả mèo nuôi trong nhà." },
            { t: "Khám tổng quát", d: "1 lần/năm dưới 7 tuổi · 2 lần/năm với thú senior trên 7 tuổi." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-5">
              <h4 className="font-display text-lg">{c.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
          <InfoCard title="Công thức tính calo (RER & MER)" icon={<Calculator className="w-5 h-5" />} tone="accent">
            <p className="text-sm">
              <strong>RER</strong> (Resting Energy Requirement) = 70 × (cân nặng kg)<sup>0.75</sup>
            </p>
            <p className="text-sm">
              <strong>MER</strong> = RER × hệ số hoạt động:
            </p>
            <ul className="text-sm space-y-1.5 ml-4 list-disc marker:text-primary">
              <li>Mèo nuôi nhà, đã triệt sản: × 1.2</li>
              <li>Chó nuôi căn hộ ít vận động: × 1.4</li>
              <li>Đang giảm cân: × 1.0</li>
              <li>Mang thai / cho con bú: × 2.0–4.0</li>
            </ul>
            <p className="text-sm pt-2 border-t border-border">
              <strong>Ví dụ:</strong> Mèo 4kg triệt sản → RER ≈ 198 kcal → MER ≈ 238 kcal/ngày.
            </p>
          </InfoCard>

          <InfoCard title="Chế độ ăn 'ít vận động'" icon={<Apple className="w-5 h-5" />} tone="success">
            <Checklist items={[
              "Chia 2 bữa cố định, không để thức ăn cả ngày — kiểm soát cân nặng.",
              "Protein chiếm ≥ 30% (chó) / ≥ 40% (mèo) khẩu phần khô.",
              "Bổ sung chất xơ (bí đỏ luộc, đậu xanh) giúp no lâu, tránh xin ăn.",
              "Hạn chế treat dưới 10% tổng calo — dùng làm phần thưởng huấn luyện.",
              "Cân thú mỗi 2 tuần, mục tiêu BCS (Body Condition Score) 4–5/9.",
              "TUYỆT ĐỐI tránh: chocolate, nho, hành, tỏi, xylitol, xương nấu chín.",
            ]} />
          </InfoCard>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-12">
        <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
          <div>
            <h4 className="font-display text-lg text-destructive">Dấu hiệu cần đưa đi khám ngay</h4>
            <p className="mt-1 text-sm text-foreground/80">
              Bỏ ăn &gt;24h · nôn liên tục · phân lẫn máu · thở gấp · co giật · niêm mạc nhợt nhạt ·
              đi tiểu rặn không ra (đặc biệt mèo đực — tắc niệu cấp tính trong 24h có thể tử vong).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
