import { createFileRoute } from "@tanstack/react-router";
import { Library, MapPin, ShoppingBag, Wallet, CalendarClock, HelpCircle, Download, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InfoCard } from "@/components/InfoCard";
import { Checklist } from "@/components/Checklist";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/tai-nguyen")({
  head: () => ({
    meta: [
      { title: "Tài Nguyên & FAQ — Cẩm Nang Số" },
      { name: "description", content: "Danh bạ phòng khám 24/7, checklist sản phẩm, ngân sách dự trù, lịch trình ngày và câu hỏi thường gặp khi nuôi thú cưng đô thị." },
      { property: "og:title", content: "Tài nguyên thực chiến cho người nuôi thú cưng đô thị" },
    ],
  }),
  component: TaiNguyenPage,
});

const clinics = [
  { name: "Bệnh viện Thú y PetHealth", area: "Hà Nội · 5 cơ sở", phone: "1900 633 815", note: "Cấp cứu 24/7, có khoa nội trú và phẫu thuật chuyên sâu." },
  { name: "AnimalCare", area: "Hà Nội · Đống Đa, Cầu Giấy, Long Biên", phone: "024 3232 6688", note: "Mạnh về nội khoa mèo, có máy siêu âm Doppler." },
  { name: "Procare Vet Clinic", area: "TP.HCM · Quận 2, Quận 7", phone: "028 6685 5557", note: "Khoa da liễu và dị ứng, hỗ trợ tiếng Anh." },
  { name: "Saigon Pet Clinic", area: "TP.HCM · Quận 1, Bình Thạnh", phone: "028 6296 6044", note: "Cấp cứu 24/7, dịch vụ taxi thú cưng." },
  { name: "New Pet Hospital", area: "Đà Nẵng · Hải Châu", phone: "0236 3654 379", note: "Khoa răng hàm mặt và nội soi tiêu hoá." },
];

const monthly = [
  { item: "Thức ăn hạt premium (mèo 4kg)", cost: "350.000 – 600.000đ" },
  { item: "Pate / thức ăn ướt 2 bữa/tuần", cost: "200.000 – 400.000đ" },
  { item: "Cát vệ sinh (15kg)", cost: "180.000 – 300.000đ" },
  { item: "Phòng ve, bọ chét (1 liều)", cost: "150.000 – 350.000đ" },
  { item: "Tẩy giun (3 tháng/lần · trung bình)", cost: "30.000 – 50.000đ" },
  { item: "Đồ chơi xoay vòng + treat", cost: "100.000 – 200.000đ" },
  { item: "Quỹ dự phòng y tế (gửi tiết kiệm)", cost: "300.000 – 500.000đ" },
];
const yearly = [
  { item: "Vaccine tái chủng + dại", cost: "500.000 – 900.000đ" },
  { item: "Khám tổng quát + xét nghiệm máu", cost: "800.000 – 1.500.000đ" },
  { item: "Cạo vôi răng (gây mê nhẹ)", cost: "1.500.000 – 3.000.000đ" },
  { item: "Triệt sản (nếu chưa)", cost: "1.200.000 – 3.500.000đ" },
];

const schedule = [
  { time: "06:30", t: "Đi vệ sinh + uống nước · thay nước mới · dọn khay cát" },
  { time: "07:00", t: "Bữa sáng (50% khẩu phần ngày) · 5 phút âu yếm" },
  { time: "07:30 – 12:00", t: "Chủ đi làm — bật nhạc nhẹ/TV động vật, để puzzle feeder" },
  { time: "12:30", t: "Treat nhỏ giữa ngày (nếu có người về) · 5 phút chơi cần câu" },
  { time: "18:00", t: "Đi dạo 20–30 phút (chó) · cần câu mèo 10 phút" },
  { time: "19:00", t: "Bữa tối (50% khẩu phần) · huấn luyện 5 lệnh × 5 lần" },
  { time: "20:30", t: "Snuffle mat hoặc hide & seek 15 phút" },
  { time: "22:00", t: "Vệ sinh cuối ngày · ngủ trong ổ cố định, tắt đèn lớn" },
];

const faqs = [
  {
    q: "Chung cư cấm nuôi thú cưng — tôi vẫn nuôi được không?",
    a: "Theo Luật Nhà ở 2014 và Thông tư 02/2016, ban quản trị có quyền ban hành nội quy. Nếu nội quy đã được hội nghị nhà chung cư thông qua và cấm rõ, bạn không nên nuôi. Hãy đọc kỹ nội quy trước khi nhận căn hộ. Nếu nội quy chỉ 'hạn chế' (yêu cầu rọ mõm, dây dắt, tiêm phòng) thì bạn được phép nuôi nếu tuân thủ đầy đủ — dùng mẫu cam kết ở trang Petiquette để chủ động làm việc với BQL.",
  },
  {
    q: "Một mình tôi đi làm 9 tiếng/ngày, có nên nuôi mèo/chó?",
    a: "Mèo trưởng thành đã triệt sản có thể ở một mình 8–10 tiếng nếu có đủ nước, đồ chơi xoay vòng và một bạn cùng loài. Chó dưới 6 tháng tuyệt đối KHÔNG nên — nên cân nhắc gửi daycare hoặc thuê pet-sitter giữa ngày. Chó trưởng thành: tối đa 6 tiếng/lần, cần đi vệ sinh giữa giờ.",
  },
  {
    q: "Có nên triệt sản cho boss?",
    a: "Có, trừ khi bạn nuôi sinh sản chuyên nghiệp. Lợi ích: giảm 90% nguy cơ ung thư tuyến vú nếu triệt trước kỳ động dục đầu, loại bỏ ung thư tinh hoàn, giảm hành vi đánh dấu lãnh thổ và bỏ nhà đi. Thời điểm tốt nhất: 5–8 tháng tuổi với mèo, 6–12 tháng với chó (chó lớn cỡ giant chờ 12–18 tháng để đảm bảo phát triển xương).",
  },
  {
    q: "Chi phí trung bình mỗi tháng là bao nhiêu?",
    a: "Một bé mèo 4kg nuôi căn hộ tốn khoảng 1.3 – 2.4 triệu/tháng. Một bé chó cỡ vừa khoảng 2 – 4 triệu/tháng. Đừng quên quỹ dự phòng — một ca cấp cứu có thể lên tới 10–30 triệu. Bạn có thể tham khảo bảng chi tiết ở mục 'Ngân sách dự trù'.",
  },
  {
    q: "Boss đi vệ sinh sai chỗ — phải làm sao?",
    a: "Nguyên nhân phổ biến: khay cát bẩn, vị trí khay không yên tĩnh, đang stress (chuyển nhà, có thành viên mới), hoặc bệnh tiết niệu. Kiểm tra theo thứ tự: (1) khám bác sĩ loại trừ bệnh, (2) tăng số khay = số mèo + 1, (3) đổi loại cát, (4) chuyển vị trí khay, (5) khử mùi chỗ cũ bằng enzyme — TUYỆT ĐỐI không dùng amoniac vì gần giống nước tiểu sẽ kích thích đi lại.",
  },
  {
    q: "Có nên cho boss ăn cơm với cá người ăn không?",
    a: "Không nên là khẩu phần chính. Cơm trắng thiếu protein và taurine (mèo thiếu taurine sẽ mù và suy tim). Cá người ăn thường mặn, có xương nhỏ dễ hóc. Nếu muốn tự nấu, cần tham vấn bác sĩ dinh dưỡng để cân đối — đơn giản nhất vẫn là dùng hạt + pate chất lượng + topping luộc nhạt (ức gà, bí đỏ).",
  },
  {
    q: "Boss bị kêu/sủa quá nhiều, hàng xóm phàn nàn?",
    a: "Bước 1: Quay video khi vắng nhà để xác định nguyên nhân (lo âu xa chủ, tiếng động ngoài, đói, đau). Bước 2: Áp dụng quy trình giải mẫn cảm 4 tuần (xem trang Tâm lý). Bước 3: Chủ động sang xin lỗi hàng xóm + tặng món quà nhỏ + cam kết lộ trình cải thiện. Bước 4: Nếu nặng, dùng pheromone Adaptil/Feliway và tham vấn behaviorist.",
  },
  {
    q: "Tôi muốn nhận nuôi từ trại — quy trình thế nào?",
    a: "Các trạm nhận nuôi uy tín: Hanoi Pet Adoption, Saigon Time, AnimalsAsia. Quy trình thường: (1) điền form khảo sát điều kiện sống, (2) phỏng vấn 30 phút, (3) thăm nhà (home check), (4) ký cam kết và đóng phí 500k–1.5tr (đã bao tiêm phòng + triệt sản). Trại sẽ theo dõi 1–3 tháng đầu để đảm bảo bé thích nghi.",
  },
];

function TaiNguyenPage() {
  return (
    <>
      <PageHero
        eyebrow="Trụ cột bổ sung"
        title="Tài nguyên thực chiến & câu hỏi thường gặp"
        description="Danh bạ phòng khám 24/7, checklist sản phẩm cần mua khi mới nhận boss, ngân sách dự trù minh bạch, lịch trình ngày mẫu và FAQ tổng hợp."
        icon={<Library className="w-3.5 h-3.5" />}
      />

      {/* Danh bạ phòng khám */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-6 h-6 text-primary" />
          <h2 className="font-display text-3xl">Danh bạ phòng khám 24/7</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          Lưu lại số điện thoại 3 phòng khám gần bạn nhất vào danh bạ với tên có dấu sao —
          khi cấp cứu, mỗi giây đều quý.
        </p>
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="px-5 py-3 font-medium">Tên phòng khám</th>
                  <th className="px-5 py-3 font-medium">Khu vực</th>
                  <th className="px-5 py-3 font-medium">Hotline</th>
                  <th className="px-5 py-3 font-medium">Đặc điểm</th>
                </tr>
              </thead>
              <tbody>
                {clinics.map((c) => (
                  <tr key={c.name} className="border-t border-border">
                    <td className="px-5 py-4 font-medium text-foreground">{c.name}</td>
                    <td className="px-5 py-4 text-muted-foreground">{c.area}</td>
                    <td className="px-5 py-4 text-primary font-medium whitespace-nowrap">{c.phone}</td>
                    <td className="px-5 py-4 text-foreground/80">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Checklist sản phẩm */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <h2 className="font-display text-3xl">Checklist sản phẩm khi mới nhận boss</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <InfoCard title="Cho mèo" tone="success">
              <Checklist items={[
                "2 khay vệ sinh + 1 dự phòng (loại có nắp giảm bụi)",
                "Cát đậu nành/bentonite cao cấp (15kg trữ sẵn)",
                "Bát ăn + bát nước inox (không nhựa — dễ gây mụn cằm)",
                "Đài phun nước tự động 2L có lọc than",
                "Cat tree ≥ 1.5m + ổ ngủ ấm",
                "Cây cào móng sisal + 5 món đồ chơi xoay vòng",
                "Lồng vận chuyển cứng (di chuyển khám bệnh)",
                "Pheromone Feliway diffuser (3 tháng đầu)",
              ]} />
            </InfoCard>
            <InfoCard title="Cho chó" tone="success">
              <Checklist items={[
                "Dây dắt cuộn rút ≤ 3m + dây cố định 1.2m + rọ mõm vừa cỡ",
                "Vòng cổ có thẻ tên + AirTag/định vị GPS",
                "Bát ăn nâng cao + bát chậm (puzzle feeder)",
                "Tã huấn luyện 50 miếng + xịt enzyme khử mùi",
                "Ổ nệm chống cào + chăn mỏng",
                "Đồ chơi cao su Kong + dây kéo + bóng tennis",
                "Bộ chải lông phù hợp giống (chải mỗi 2–3 ngày)",
                "Áo mưa + áo lạnh (chó ngắn lông trong mùa đông)",
            ]} />
            </InfoCard>
            <InfoCard title="Bộ y tế cơ bản" tone="warning">
              <Checklist items={[
                "Nhiệt kế điện tử đo hậu môn",
                "Nước muối sinh lý 0.9% (rửa mắt, vết thương)",
                "Băng gạc, băng thun co giãn, kéo đầu tù",
                "Povidine 10% sát khuẩn",
                "Nhíp gắp ve",
                "Ống tiêm bơm thuốc 5ml (không kim)",
                "Loa che cổ (Elizabethan collar) size phù hợp",
                "Túi đựng phân phân huỷ sinh học (mang theo 24/7)",
              ]} />
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Ngân sách */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Wallet className="w-6 h-6 text-primary" />
          <h2 className="font-display text-3xl">Ngân sách dự trù minh bạch</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="px-5 py-4 bg-secondary/15 border-b border-border">
              <h3 className="font-display text-xl">Chi phí hàng tháng</h3>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {monthly.map((r) => (
                  <tr key={r.item} className="border-b border-border last:border-0">
                    <td className="px-5 py-3 text-foreground/85">{r.item}</td>
                    <td className="px-5 py-3 text-right font-medium text-primary whitespace-nowrap">{r.cost}</td>
                  </tr>
                ))}
                <tr className="bg-muted/40">
                  <td className="px-5 py-3 font-display text-base">Tổng / tháng</td>
                  <td className="px-5 py-3 text-right font-display text-base text-primary">~ 1.3 – 2.4 triệu</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="px-5 py-4 bg-accent/30 border-b border-border">
              <h3 className="font-display text-xl">Chi phí định kỳ năm</h3>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {yearly.map((r) => (
                  <tr key={r.item} className="border-b border-border last:border-0">
                    <td className="px-5 py-3 text-foreground/85">{r.item}</td>
                    <td className="px-5 py-3 text-right font-medium text-primary whitespace-nowrap">{r.cost}</td>
                  </tr>
                ))}
                <tr className="bg-muted/40">
                  <td className="px-5 py-3 font-display text-base">Tổng / năm</td>
                  <td className="px-5 py-3 text-right font-display text-base text-primary">~ 4 – 9 triệu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-5 text-sm text-muted-foreground italic">
          * Giá tham khảo tại Hà Nội/TP.HCM năm 2026. Chưa tính chi phí cấp cứu đột xuất —
          khuyến nghị duy trì quỹ dự phòng tối thiểu 10 triệu hoặc bảo hiểm thú cưng.
        </p>
      </section>

      {/* Lịch trình ngày */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-6">
            <CalendarClock className="w-6 h-6 text-primary" />
            <h2 className="font-display text-3xl">Lịch trình ngày mẫu (chủ đi làm 9–18h)</h2>
          </div>
          <ol className="relative border-l-2 border-primary/30 ml-3 space-y-5">
            {schedule.map((s) => (
              <li key={s.time} className="pl-6 relative">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <p className="font-display text-lg text-primary">{s.time}</p>
                <p className="text-foreground/85">{s.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-6 h-6 text-primary" />
          <h2 className="font-display text-3xl">Câu hỏi thường gặp (FAQ)</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="font-display text-lg text-left hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Tài liệu tải về */}
      <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="font-display text-3xl flex items-center gap-3">
              <Download className="w-7 h-7" /> Tài liệu in & gửi BQL
            </h3>
            <p className="mt-3 opacity-95">
              In trang Petiquette để lấy mẫu cam kết, in trang Sơ cứu để dán tủ lạnh,
              chụp màn hình bảng vaccine để mang theo khi đi khám. Mọi nội dung đều thiết kế
              để chia sẻ và in ấn miễn phí.
            </p>
          </div>
          <a
            href="https://docs.lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Hướng dẫn sử dụng <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
