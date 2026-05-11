import { createFileRoute } from "@tanstack/react-router";
import { Brain, Dices, Volume2, HeartCrack, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { Checklist } from "@/components/Checklist";

export const Route = createFileRoute("/tam-ly")({
  head: () => ({
    meta: [
      { title: "Tâm Lý 'Bốn Bức Tường' — Cẩm Nang Số" },
      { name: "description", content: "Indoor games, làm quen tiếng ồn chung cư, giải pháp cho hội chứng lo âu khi xa chủ." },
      { property: "og:title", content: "Tâm lý thú cưng nuôi căn hộ" },
    ],
  }),
  component: TamLyPage,
});

function TamLyPage() {
  return (
    <>
      <PageHero
        eyebrow="Trụ cột 3"
        title="Tâm lý học 'Bốn bức tường'"
        description="Bốn bức tường có thể là nhà tù hoặc thiên đường — phụ thuộc vào cách bạn kích thích trí não cho boss mỗi ngày."
        icon={<Brain className="w-3.5 h-3.5" />}
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Dices className="w-6 h-6 text-primary" />
          <h2 className="font-display text-3xl">Indoor games — vận động trí não trong nhà</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { t: "Snuffle mat", d: "Thảm khứu giác giấu thức ăn — 15 phút bằng 1 giờ đi dạo về mặt trí não." },
            { t: "Puzzle feeder", d: "Bát ăn chậm hình mê cung, kéo dài bữa ăn lên 20–30 phút." },
            { t: "Hide & seek", d: "Giấu treat sau ghế, dưới khăn — kích thích bản năng săn mồi." },
            { t: "Tug-of-war", d: "Kéo dây 5 phút × 2 lần/ngày, dạy lệnh 'thả' để rèn kỷ luật." },
            { t: "Cần câu mèo", d: "10 phút/lần, 2 lần/ngày — kết thúc bằng 'mồi' thật để không hụt hẫng." },
            { t: "Box fort", d: "Thùng carton xếp chồng — mèo cực thích tự khám phá." },
          ].map((g) => (
            <div key={g.t} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
              <h4 className="font-display text-xl">{g.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{g.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
          <InfoCard title="Làm quen tiếng ồn đô thị" icon={<Volume2 className="w-5 h-5" />}>
            <p className="text-sm">Quy trình giải mẫn cảm 4 tuần (desensitization):</p>
            <Checklist items={[
              "Tuần 1: Mở ghi âm tiếng thang máy / còi xe ở mức 10% âm lượng, thưởng treat khi thú bình tĩnh.",
              "Tuần 2: Tăng lên 30% âm lượng, kết hợp lệnh 'ngồi'.",
              "Tuần 3: 60% âm lượng + tập đeo dây dắt trong nhà.",
              "Tuần 4: Đưa ra hành lang chung cư đứng 5 phút, sau đó vào thang máy không nhấn tầng.",
              "Tuyệt đối không la mắng khi sủa/kêu — chỉ phớt lờ và thưởng khi yên.",
            ]} />
          </InfoCard>

          <InfoCard title="Hội chứng lo âu khi xa chủ" icon={<HeartCrack className="w-5 h-5" />} tone="warning">
            <p className="text-sm font-medium">Dấu hiệu nhận biết:</p>
            <ul className="text-sm ml-4 list-disc marker:text-destructive space-y-1">
              <li>Sủa/hú liên tục ngay khi chủ vừa khóa cửa</li>
              <li>Cào cửa, phá đồ đạc trong 30 phút đầu</li>
              <li>Đi vệ sinh sai chỗ dù đã được huấn luyện</li>
              <li>Bỏ ăn cả ngày khi ở một mình</li>
            </ul>
            <p className="text-sm font-medium pt-2 border-t border-border">Giải pháp 5 bước:</p>
            <Checklist items={[
              "Không 'chào tạm biệt' lê thê — đi luôn, về cũng tỉnh bơ 5 phút.",
              "Để lại áo có mùi chủ + đồ chơi nhồi pate đông lạnh (Kong).",
              "Camera 2 chiều để nói chuyện khi cần — webcam 300k đủ dùng.",
              "Tập 'vắng mặt' tăng dần: 1 phút → 5 → 15 → 60 phút.",
              "Trường hợp nặng: kết hợp pheromone (Adaptil/Feliway) + tham vấn bác sĩ.",
            ]} />
          </InfoCard>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16">
        <div className="rounded-3xl bg-secondary text-secondary-foreground p-10">
          <Lightbulb className="w-8 h-8" />
          <h3 className="mt-4 font-display text-3xl">Quy tắc 15-15-15</h3>
          <p className="mt-3 opacity-95">
            <strong>15 phút</strong> chơi vận động trí não · <strong>15 phút</strong> tương tác âu yếm ·
            <strong> 15 phút</strong> ngắm cảnh ngoài cửa sổ — mỗi ngày. Đủ để bốn bức tường trở thành thiên đường.
          </p>
        </div>
      </section>
    </>
  );
}
