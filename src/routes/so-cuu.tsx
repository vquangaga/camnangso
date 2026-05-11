import { createFileRoute } from "@tanstack/react-router";
import { Siren, Phone, Thermometer, Pill, Wind } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";

export const Route = createFileRoute("/so-cuu")({
  head: () => ({
    meta: [
      { title: "Sơ Cứu Khẩn Cấp — Cẩm Nang Số" },
      { name: "description", content: "Hướng dẫn xử lý nhanh hóc dị vật, sốc nhiệt, ngộ độc và các tình huống cấp cứu thường gặp." },
      { property: "og:title", content: "Sơ cứu khẩn cấp cho thú cưng" },
    ],
  }),
  component: SoCuuPage,
});

const cases = [
  {
    icon: Wind,
    title: "Hóc dị vật",
    signs: "Ho khan, cào miệng, thở rít, lưỡi tím tái",
    steps: [
      "Mở miệng, gắp dị vật bằng nhíp NẾU thấy rõ — KHÔNG mò mù.",
      "Chó nhỏ/mèo: dốc ngược đầu, vỗ mạnh giữa hai vai 5 lần.",
      "Chó lớn: ôm bụng từ phía sau, đẩy mạnh lên trên 5 lần (Heimlich).",
      "Vẫn không ra → đến phòng khám gần nhất ngay, gọi điện báo trước.",
    ],
  },
  {
    icon: Thermometer,
    title: "Sốc nhiệt (heatstroke)",
    signs: "Thở hổn hển dữ dội, chảy dãi đặc, lưỡi đỏ tươi, lờ đờ, nhiệt độ > 40°C",
    steps: [
      "Đưa vào nơi mát, BẬT điều hòa 25°C — KHÔNG dùng nước đá lạnh.",
      "Lau cơ thể bằng khăn ướt nước thường, đặc biệt bẹn, nách, gan bàn chân.",
      "Cho uống nước nhỏ từng ngụm, không ép.",
      "Liên hệ bác sĩ ngay cả khi đã hạ nhiệt — tổn thương nội tạng có thể đến muộn.",
    ],
  },
  {
    icon: Pill,
    title: "Ngộ độc thức ăn",
    signs: "Nôn liên tục, run rẩy, co giật, chảy dãi, tiêu chảy có máu",
    steps: [
      "Xác định chất độc (chocolate, hành, xylitol, thuốc người, bả chuột…).",
      "KHÔNG tự gây nôn nếu không có chỉ định bác sĩ — một số chất ăn mòn nguy hiểm hơn khi nôn.",
      "Chụp ảnh bao bì / mẫu chất nghi ngờ mang theo.",
      "Gọi đường dây nóng phòng khám 24/7 trước khi di chuyển.",
    ],
  },
];

function SoCuuPage() {
  return (
    <>
      <PageHero
        eyebrow="Trụ cột 4"
        title="Sơ cứu khẩn cấp trong 60 giây vàng"
        description="Mỗi tình huống dưới đây có 'cửa sổ vàng' rất ngắn. Lưu màn hình trang này — bạn sẽ biết phải làm gì."
        icon={<Siren className="w-3.5 h-3.5" />}
        tone="green"
      />

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-12">
        <div className="rounded-3xl bg-destructive text-destructive-foreground p-8 flex items-start gap-5">
          <Phone className="w-10 h-10 shrink-0" />
          <div>
            <h3 className="font-display text-2xl">Hotline thú y 24/7</h3>
            <p className="mt-2 opacity-95">
              Trước khi sơ cứu, hãy gọi phòng khám gần nhất để được hướng dẫn theo trường hợp cụ thể.
              Bệnh viện thú y PetHealth · AnimalCare · Procare đều có đường dây cấp cứu đêm.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-8 grid lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <InfoCard key={c.title} title={c.title} icon={<c.icon className="w-5 h-5" />} tone="warning">
            <p className="text-sm">
              <span className="font-medium text-destructive">Dấu hiệu:</span> {c.signs}
            </p>
            <ol className="text-sm space-y-2 ml-0 list-none counter-reset-[step] pt-2 border-t border-border">
              {c.steps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid place-items-center shrink-0 w-6 h-6 rounded-full bg-destructive text-destructive-foreground text-xs font-bold">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </InfoCard>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16">
        <h3 className="font-display text-3xl mb-6">Bộ sơ cứu cần có sẵn ở nhà</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Nước muối sinh lý 0.9%",
            "Băng gạc, băng thun co giãn",
            "Nhiệt kế điện tử (đo hậu môn)",
            "Nhíp gắp + kéo đầu tù",
            "Than hoạt tính (theo chỉ định BS)",
            "Dung dịch sát khuẩn Povidine",
            "Thuốc nhỏ mắt nước muối vô trùng",
            "Số điện thoại 3 phòng khám gần nhất dán tủ lạnh",
          ].map((i) => (
            <div key={i} className="rounded-xl bg-card border border-border px-4 py-3 text-sm">
              {i}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
