import { createFileRoute } from "@tanstack/react-router";
import { Users, Building2, Trees, MessageCircle, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { Checklist } from "@/components/Checklist";

export const Route = createFileRoute("/petiquette")({
  head: () => ({
    meta: [
      { title: "Petiquette — Quy Tắc Ứng Xử Văn Minh" },
      { name: "description", content: "Bộ quy tắc ứng xử văn minh khi nuôi thú cưng tại chung cư: thang máy, hành lang, công viên." },
      { property: "og:title", content: "Petiquette — văn minh chung cư cùng thú cưng" },
    ],
  }),
  component: PetiquettePage,
});

function PetiquettePage() {
  return (
    <>
      <PageHero
        eyebrow="Trụ cột 5"
        title="Petiquette — Văn minh sống chung"
        description="Một boss hư không phải lỗi của boss, mà là của con sen. Đây là bộ quy tắc giúp cộng đồng chung cư yêu mến thú cưng của bạn."
        icon={<Users className="w-3.5 h-3.5" />}
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-6">
        <InfoCard title="Trong thang máy" icon={<Building2 className="w-5 h-5" />}>
          <Checklist items={[
            "Luôn rọ mõm với chó > 10kg, ôm/đặt giỏ với chó nhỏ và mèo.",
            "Đứng góc trong cùng, quay mặt vào tường, dây dắt ngắn ≤ 50cm.",
            "Hỏi trước khi vào: 'Anh/chị có ngại thú cưng không ạ?'",
            "Nếu có người sợ — chủ động chờ thang sau, không tranh luận.",
            "Mang theo khăn giấy lau ngay nếu boss đi vệ sinh đột xuất.",
          ]} />
        </InfoCard>

        <InfoCard title="Hành lang chung" icon={<ShieldCheck className="w-5 h-5" />}>
          <Checklist items={[
            "Không thả rông ngoài hành lang dù chỉ 1 phút — luôn có dây dắt.",
            "Không để boss sủa/cào cửa hàng xóm khi nghe tiếng chân.",
            "Không phơi đồ pet (chăn, đệm) ở khu vực chung.",
            "Đóng cửa nhẹ nhàng — tránh boss giật mình sủa dây chuyền.",
          ]} />
        </InfoCard>

        <InfoCard title="Công viên & sảnh" icon={<Trees className="w-5 h-5" />}>
          <Checklist items={[
            "Mang ít nhất 3 túi nilon dọn phân — kể cả đi 5 phút.",
            "Tránh khung giờ cao điểm trẻ con tan học (16:30–18:00).",
            "Hỏi chủ trước khi cho boss tới gần thú cưng khác.",
            "Không cho ăn vặt thú cưng người khác (dị ứng/bệnh truyền nhiễm).",
            "Tra cứu danh sách công viên cho phép thú cưng trên website BQL phường.",
          ]} />
        </InfoCard>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-6 h-6 text-primary" />
            <h2 className="font-display text-3xl">Mẫu cam kết gửi Ban Quản Lý chung cư</h2>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="font-display text-lg mb-4">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p className="text-sm text-muted-foreground mb-6">Độc lập – Tự do – Hạnh phúc</p>
            <p className="font-display text-2xl">BẢN CAM KẾT NUÔI THÚ CƯNG VĂN MINH</p>
            <div className="mt-5 space-y-3 text-foreground/85">
              <p>Tôi tên: ___________________ · Căn hộ: _______ · SĐT: _______________</p>
              <p>Loài/giống: __________ · Tên: __________ · Cân nặng: ______ · Đã tiêm phòng: ☐ Có ☐ Chưa</p>
              <p className="font-medium pt-3">Tôi xin cam kết:</p>
              <ol className="list-decimal ml-5 space-y-1.5 text-sm">
                <li>Tiêm phòng dại định kỳ và xuất trình giấy chứng nhận khi BQL yêu cầu.</li>
                <li>Luôn dùng dây dắt và rọ mõm (với chó &gt; 10kg) ở khu vực chung.</li>
                <li>Dọn phân và lau dọn vệ sinh ngay nếu có sự cố.</li>
                <li>Không để thú cưng gây tiếng ồn quá 22:00 – trước 7:00.</li>
                <li>Chịu trách nhiệm bồi thường nếu thú cưng gây thương tích/thiệt hại.</li>
              </ol>
              <p className="pt-4 text-right italic">…………, ngày … tháng … năm 20…</p>
              <p className="text-right italic">Người cam kết</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16 text-center">
        <h3 className="font-display text-3xl">Văn minh là tấm vé thông hành</h3>
        <p className="mt-4 text-lg text-muted-foreground">
          Mỗi hành động lịch sự của bạn hôm nay là một viên gạch xây nên cộng đồng chung cư
          thân thiện với thú cưng cho thế hệ sau.
        </p>
      </section>
    </>
  );
}
