import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  Clock,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Stamp,
  AlertCircle
} from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { QuotationForm } from "@/components/quote/QuotationForm"

export const metadata: Metadata = {
  title: "Dịch Thuật Công Chứng Tư Pháp Lấy Ngay Trong Ngày | Dịch Thuật Thành Đạt",
  description:
    "Dịch vụ dịch thuật công chứng tư pháp lấy ngay uy tín tại Hà Nội và Quảng Ninh. Đầy đủ dấu đỏ Phòng Tư pháp cấp Quận/Huyện, chuẩn xác 100%, bảo mật tuyệt đối cho hồ sơ du học, visa, xuất nhập khẩu.",
  alternates: {
    canonical: `${siteConfig.domain}/dich-thuat-cong-chung`,
  },
}

export default function DichThuatCongChungPage() {
  const priceList = [
    {
      group: "Nhóm 1: Ngôn ngữ phổ biến",
      langs: "Tiếng Anh, Tiếng Trung Quốc",
      pricePerDoc: "Từ 45.000đ – 65.000đ/trang",
      notaryFee: "Theo quy định nhà nước (từ 20.000đ/dấu)",
      time: "Lấy ngay trong ngày (4 - 8 tiếng)",
      badge: "Lấy ngay siêu tốc"
    },
    {
      group: "Nhóm 2: Ngôn ngữ châu Á & châu Âu phổ thông",
      langs: "Tiếng Hàn, Tiếng Nhật, Tiếng Pháp, Tiếng Đức, Tiếng Nga",
      pricePerDoc: "Từ 75.000đ – 110.000đ/trang",
      notaryFee: "Theo quy định nhà nước",
      time: "Trong ngày hoặc 24 giờ",
      badge: "Hồ sơ du học - Visa"
    },
    {
      group: "Nhóm 3: Ngôn ngữ khu vực & chuyên sâu",
      langs: "Tiếng Tây Ban Nha, Tiếng Ý, Tiếng Thái Lan, Tiếng Lào, Tiếng Campuchia",
      pricePerDoc: "Từ 110.000đ – 160.000đ/trang",
      notaryFee: "Theo quy định nhà nước",
      time: "1 – 2 ngày làm việc",
      badge: "Chuẩn xác 100%"
    },
    {
      group: "Nhóm 4: Ngôn ngữ hiếm & kỹ thuật sâu",
      langs: "Tiếng Bồ Đào Nha, Tiếng Hà Lan, Tiếng Séc, Tiếng Ba Lan, Tiếng Ả Rập",
      pricePerDoc: "Báo giá theo độ khó tài liệu",
      notaryFee: "Theo quy định nhà nước",
      time: "2 – 3 ngày làm việc",
      badge: "Dịch giả chuyên gia"
    }
  ]

  return (
    <div className="bg-[#F5F8FF] min-h-screen">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#2563EB] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-blue-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">Dịch thuật công chứng</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Stamp className="w-3.5 h-3.5 text-amber-300" />
              <span>Chứng Thực Tư Pháp Nhà Nước</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Dịch Thuật Công Chứng Tư Pháp Lấy Ngay
            </h1>
            <p className="text-blue-100 text-base sm:text-lg mt-3 leading-relaxed">
              Dịch và chứng thực tư pháp lấy ngay trong ngày tại <strong>Hà Nội</strong> và <strong>Quảng Ninh</strong> (Hạ Long, Cẩm Phả, Móng Cái). Dấu đỏ hợp pháp nộp các Đại sứ quán và cơ quan hành chính toàn cầu.
            </p>
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link href="#bang-gia">
                <Button variant="white" size="lg" className="font-bold">
                  <span>Xem Bảng Giá Minh Bạch</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="#bao-gia-form">
                <Button variant="outline" size="lg" className="font-bold border-white text-white hover:bg-white/10">
                  Gửi File Báo Giá Trong 10 Phút
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Status & Value Explanation */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase">
                <span>Giá trị pháp lý</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] tracking-tight">
                Bản Dịch Công Chứng Tư Pháp Tại Thành Đạt Có Giá Trị Ra Sao?
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Theo Luật Công chứng và Nghị định số 23/2015/NĐ-CP của Chính phủ, bản dịch công chứng hợp lệ là bản dịch do người dịch đã đăng ký chữ ký mẫu tại Phòng Tư pháp cấp Quận/Huyện thực hiện và được Công chứng viên hoặc Trưởng phòng Tư pháp chứng thực chữ ký.
                </p>
                <p>
                  Tại <strong>Dịch Thuật Thành Đạt</strong>, mọi bản dịch công chứng đều tuân thủ chặt chẽ các quy định pháp luật:
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#172554] block">Con dấu đỏ tư pháp chuẩn nhà nước:</strong>
                    Có giá trị nộp tại tất cả các Đại sứ quán, Tổng Lãnh sự quán, Cục Lãnh sự Bộ Ngoại Giao, các trường đại học quốc tế và tòa án.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#172554] block">Đóng dấu giáp lai từng trang:</strong>
                    Bản dịch được đính kèm bản sao y/bản chụp gốc, đóng dấu giáp lai nổi hoặc mực đỏ bảo đảm tính toàn vẹn của chuỗi tài liệu.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#172554] block">Bảo hành nội dung trọn đời:</strong>
                    Thành Đạt chịu trách nhiệm hoàn toàn về tính chuẩn xác của bản dịch đối chiếu với văn bản gốc đã cung cấp.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Same-Day Timeline Guide */}
            <div className="lg:col-span-5 bg-[#F5F8FF] rounded-2xl p-7 border border-blue-200 space-y-5">
              <h3 className="text-lg font-bold text-[#172554] flex items-center gap-2 border-b border-blue-200/80 pb-3">
                <Clock className="w-5 h-5 text-amber-500" />
                <span>Lộ Trình Lấy Ngay Trong Ngày</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Trước 09h30 sáng:</strong>
                    <span>Khách hàng gửi file scan/chụp qua Zalo hoặc mang tài liệu tới văn phòng Thành Đạt tại Hà Nội hoặc Hạ Long.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 block">10h00 – 13h30:</strong>
                    <span>Biên dịch viên chuyển ngữ cấp tốc, chuyển qua tổ hiệu đính rà soát và in ấn theo form chuẩn tư pháp.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 block">14h00 – 16h30:</strong>
                    <span>Chuyên viên Thành Đạt trực tiếp trình ký và lấy dấu tư pháp tại Phòng Tư pháp hoặc Văn phòng Công chứng.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <strong className="text-emerald-700 block">Từ 16h30 – 17h30:</strong>
                    <span>Bàn giao bản cứng tận tay khách hàng hoặc gửi chuyển phát nhanh hỏa tốc về địa chỉ của bạn.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Áp dụng cho các giấy tờ nhân thân thông dụng dưới 10 trang (CCCD, khai sinh, bằng tốt nghiệp, học bạ, lý lịch tư pháp...).
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section id="bang-gia" className="py-16 sm:py-20 bg-[#F5F8FF] border-t border-blue-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Bảng giá minh bạch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
              Bảng Giá Dịch Thuật Công Chứng Tham Khảo
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Báo giá trọn gói, rõ ràng, không có bất kỳ khoản phụ phí phát sinh. Chiết khấu hấp dẫn cho hồ sơ dày trang hoặc dự án thầu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-blue-400 transition-all duration-300 group"
              >
                <div>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full inline-block mb-3">
                    {item.badge}
                  </span>
                  <h3 className="font-bold text-base text-[#172554] mb-2">{item.group}</h3>
                  <p className="text-xs text-slate-500 mb-4">{item.langs}</p>

                  <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block mb-0.5">Phí dịch thuật:</span>
                      <strong className="text-sm text-[#2563EB]">{item.pricePerDoc}</strong>
                    </div>

                    <div>
                      <span className="text-slate-400 block mb-0.5">Lệ phí công chứng tư pháp:</span>
                      <span className="text-slate-700 font-medium">{item.notaryFee}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block mb-0.5">Tiến độ hoàn thành:</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.time}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link href="#bao-gia-form">
                    <Button variant="outlineBlue" size="sm" className="w-full font-bold">
                      Nhận Báo Giá Chính Xác
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-6 italic">
            * Đơn giá có thể thay đổi tùy thuộc vào mật độ chữ, tính chất chuyên ngành và yêu cầu gấp ngoài giờ. Liên hệ ngay để nhận báo giá chuẩn xác trong 10 phút.
          </p>
        </div>
      </section>

      {/* Quotation Form Section */}
      <section id="bao-gia-form" className="py-16 sm:py-20 bg-white border-t border-blue-100 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuotationForm />
        </div>
      </section>
    </div>
  )
}
