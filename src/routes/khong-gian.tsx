import { createFileRoute } from "@tanstack/react-router";
import { Home, Utensils, Bath, Gamepad2, Shield, Sofa } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { Checklist } from "@/components/Checklist";

export const Route = createFileRoute("/khong-gian")({
  head: () => ({
    meta: [
      { title: "Không Gian Sống — Cẩm Nang Số" },
      { name: "description", content: "Tối ưu căn hộ nhỏ cho chó mèo: góc chức năng, vật liệu, an toàn ban công cao tầng." },
      { property: "og:title", content: "Không gian sống cho thú cưng đô thị" },
    ],
  }),
  component: KhongGianPage,
});

function KhongGianPage() {
  return (
    <>
      <PageHero
        eyebrow="Trụ cột 1"
        title="Không gian sống tối ưu cho căn hộ nhỏ"
        description="30m² vẫn đủ chỗ cho boss nếu bạn biết phân vùng đúng cách. Đây là bản đồ chi tiết cho từng centimet."
        icon={<Home className="w-3.5 h-3.5" />}
        tone="pink"
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-6">
        <InfoCard title="Góc ăn uống" icon={<Utensils className="w-5 h-5" />}>
          <Checklist items={[
            "Đặt cách xa khay vệ sinh tối thiểu 1.5m để tránh stress khi ăn.",
            "Bát ăn nâng cao 10–15cm cho chó cỡ vừa, giảm áp lực cổ và tiêu hóa.",
            "Thảm silicon chống trượt phía dưới để dễ lau dầu mỡ.",
            "Bình nước tự động dung tích ≥ 2L, lọc than hoạt tính thay mỗi 30 ngày.",
            "Lưu lịch cho ăn cố định 2 bữa/ngày — tránh free-feeding gây béo phì.",
          ]} />
        </InfoCard>

        <InfoCard title="Góc vệ sinh" icon={<Bath className="w-5 h-5" />}>
          <Checklist items={[
            "Mèo: 1 khay/cá thể + 1 khay dự phòng, cát đổ dày 5–7cm.",
            "Chó: tấm tã huấn luyện đặt cố định một vị trí, thay khi ướt 50%.",
            "Lót sàn nhựa PVC dưới khay — chặn nước tiểu thấm xuống gạch men.",
            "Khử mùi bằng enzyme (không dùng amoniac — kích thích đi bậy lại).",
            "Thông gió tự nhiên hoặc quạt hút mini 5W chạy 24/7.",
          ]} />
        </InfoCard>

        <InfoCard title="Góc chơi & nghỉ" icon={<Gamepad2 className="w-5 h-5" />}>
          <Checklist items={[
            "Cat tree cao tối thiểu 1.5m — mèo cần leo trèo bù không gian ngang.",
            "Ổ ngủ đặt nơi yên tĩnh, tránh lối đi và cửa ra vào.",
            "Đồ chơi xoay vòng 3–4 món/tuần để duy trì sự mới lạ.",
            "Khu cào móng (sisal) sát cửa — thay vì sofa.",
            "Khoảng trống ≥ 2m² cho bài tập kéo dây và đuổi bắt.",
          ]} />
        </InfoCard>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
          <InfoCard title="Vật liệu nội thất nên chọn" icon={<Sofa className="w-5 h-5" />} tone="success">
            <Checklist items={[
              "Sofa bọc vải microfiber hoặc da PU — chống cào, lau bằng khăn ẩm.",
              "Rèm cuốn polyester thay vì rèm vải dài chấm sàn (mèo hay leo).",
              "Sàn SPC/laminate AC4 chống trầy, tránh sàn gỗ tự nhiên dễ ố nước tiểu.",
              "Thảm trải nên là loại module 50×50cm — hỏng ô nào thay ô đó.",
              "Tránh nến thơm, tinh dầu tràm trà, cây trầu bà, lily — độc với mèo.",
            ]} />
          </InfoCard>

          <InfoCard title="An toàn ban công & cửa sổ" icon={<Shield className="w-5 h-5" />} tone="warning">
            <Checklist items={[
              "Lưới an toàn inox 304 ô ≤ 5×5cm cho toàn bộ ban công từ tầng 4 trở lên.",
              "Khóa chốt cửa sổ trượt — mèo nặng 4kg đủ sức mở cửa lùa.",
              "Không đặt ghế, kệ sát lan can (bệ phóng cho mèo).",
              "Cây cảnh ban công: chọn cây không độc (cỏ mèo, hương thảo, basil).",
              "Dây sạc, dây rèm cuộn gọn — phòng nuốt phải gây tắc ruột.",
            ]} />
          </InfoCard>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 text-center">
          <h3 className="font-display text-3xl">Sơ đồ căn hộ mẫu 45m²</h3>
          <p className="mt-3 opacity-90">
            Phòng khách – Góc chơi · Hành lang – Góc ăn · Nhà tắm phụ – Khay vệ sinh ·
            Cửa sổ phòng ngủ – Cat tree leo trèo. Tỷ lệ vàng: 60% sinh hoạt người / 40% thú cưng.
          </p>
        </div>
      </section>
    </>
  );
}
