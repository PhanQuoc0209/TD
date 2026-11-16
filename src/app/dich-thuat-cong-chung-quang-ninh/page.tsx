import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  MapPin,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
  Truck,
  Building,
  ArrowRight,
  ChevronRight
} from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { QuotationForm } from "@/components/quote/QuotationForm"

export const metadata: Metadata = {
  title: "Dịch Thuật Công Chứng Quảng Ninh | Lấy Ngay Tại Hạ Long, Cẩm Phả, Móng Cái",
  description:
    "Dịch vụ dịch thuật công chứng tư pháp lấy ngay tại tỉnh Quảng Ninh. Văn phòng tại TP. Hạ Long, giao nhận hồ sơ tận nơi tại Cẩm Phả, Móng Cái, Uông Bí, Quảng Yên. Hỗ trợ hơn 50 ngôn ngữ.",
  alternates: {
    canonical: `${siteConfig.domain}/dich-thuat-cong-chung-quang-ninh`,
  },
}

export default function QuangNinhPage() {
  const quangNinhAreas = [
    {
      name: "TP. Hạ Long",
      detail: "Văn phòng trung tâm tại 126 Lê Thánh Tông (P. Bạch Đằng). Hỗ trợ hồ sơ du học, visa, giấy tờ du lịch và du thuyền vịnh Hạ Long.",
      time: "Lấy ngay trong ngày"
    },
    {
      name: "TP. Móng Cái",
      detail: "Hỗ trợ dịch công chứng tiếng Trung, tiếng Anh cho hồ sơ xuất nhập khẩu, mậu dịch biên giới, thủ tục hải quan và cư trú.",
      time: "Giao nhận hỏa tốc 24h"
    },
    {
      name: "TP. Cẩm Phả",
      detail: "Chuyên sâu tài liệu kỹ thuật ngành khai khoáng mỏ than, hợp đồng thương mại vật tư thiết bị và hồ sơ người lao động.",
      time: "Giao nhận tận nơi"
    },
    {
      name: "TP. Uông Bí & Đông Triều",
      detail: "Tiếp nhận hồ sơ du học sinh, bằng cấp chứng chỉ, giấy chứng nhận kết hôn có yếu tố nước ngoài và tài liệu gia đình.",
      time: "Giao nhận hỏa tốc"
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
            <span className="text-white font-semibold">Quảng Ninh</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>Cơ Sở Trực Tiếp Tại TP. Hạ Long – Tỉnh Quảng Ninh</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Dịch Thuật Công Chứng Tư Pháp Tại Quảng Ninh
            </h1>
            <p className="text-blue-100 text-base sm:text-lg mt-3 leading-relaxed">
              Dịch vụ dịch thuật công chứng chuyên nghiệp hàng đầu phục vụ người dân, học sinh du học và các doanh nghiệp xuất nhập khẩu, khai thác than, du lịch biển tại TP. Hạ Long, Cẩm Phả, Móng Cái, Uông Bí.
            </p>
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link href="#bao-gia-qn">
                <Button variant="white" size="lg" className="font-bold">
                  <span>Nhận Báo Giá Trong 10 Phút</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <a
                href={`tel:${siteConfig.hotline}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white text-white font-bold text-sm hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Hotline Quảng Ninh: {siteConfig.hotlineDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Advantages */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase">
                <span>Ưu thế địa phương</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] tracking-tight">
                Tại Sao Khách Hàng Tại Quảng Ninh Tin Chọn Dịch Thuật Thành Đạt?
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Quảng Ninh là trung tâm kinh tế năng động với sự phát triển mạnh mẽ của ngành khai khoáng than, cảng biển nước sâu Cái Lân, du lịch vịnh Hạ Long và khu kinh tế cửa khẩu Móng Cái. Nhu cầu dịch thuật và chứng thực tư pháp các văn bản tiếng Trung, tiếng Anh, tiếng Hàn, tiếng Nhật là vô cùng cấp thiết.
                </p>
                <p>
                  Thay vì phải gửi tài liệu lên Hà Nội chờ đợi nhiều ngày, khách hàng tại Quảng Ninh có thể đến trực tiếp văn phòng của Thành Đạt tại <strong>126 Lê Thánh Tông, TP. Hạ Long</strong> hoặc chỉ cần chụp ảnh gửi qua Zalo để được xử lý ngay trong ngày.
                </p>
              </div>

              {/* Local Specific Features */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#172554] block">Am hiểu đặc thù hồ sơ kinh tế Quảng Ninh:</strong>
                    Chuyên dịch hồ sơ hải quan cửa khẩu Móng Cái, tài liệu kỹ thuật ngành than Cẩm Phả, hợp đồng vận tải biển và chứng chỉ thuyền viên quốc tế.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#172554] block">Giao nhận hồ sơ hỏa tốc toàn tỉnh:</strong>
                    Liên kết với các tuyến xe khách Hạ Long – Móng Cái, Cẩm Phả – Hà Nội và bưu điện chuyển phát tận nhà chỉ trong 12 – 24h.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#172554] block">Dấu đỏ tư pháp hợp lệ tuyệt đối:</strong>
                    Bản dịch có giá trị nộp tại Sở Ngoại vụ Quảng Ninh, Cục Hải quan và các cơ quan nhà nước trên toàn quốc.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Office info card */}
            <div className="lg:col-span-5 bg-[#F5F8FF] rounded-2xl p-7 border border-blue-200 space-y-5">
              <div className="flex items-center gap-3 border-b border-blue-200/80 pb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#172554]">Chi Nhánh Thành Đạt Quảng Ninh</h3>
                  <p className="text-xs text-blue-600 font-semibold">126 Lê Thánh Tông, P. Bạch Đằng, Hạ Long</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900">Giờ mở cửa tiếp nhận:</span>
                    <p className="text-slate-600">{siteConfig.workingHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900">Hotline / Zalo tư vấn:</span>
                    <p className="text-blue-700 font-bold">{siteConfig.hotlineDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900">Giao nhận tận nơi:</span>
                    <p className="text-slate-600">Hạ Long, Cẩm Phả, Móng Cái, Uông Bí, Đông Triều, Quảng Yên, Tiên Yên, Vân Đồn.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={siteConfig.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-[#0068FF] text-white rounded-lg text-xs font-bold hover:bg-blue-600 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Gửi Ảnh Tài Liệu Qua Zalo Báo Giá</span>
                </a>
                <a
                  href={`tel:${siteConfig.hotline}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Gọi Hotline {siteConfig.hotlineDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Areas Grid */}
      <section className="py-16 sm:py-20 bg-[#F5F8FF] border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] tracking-tight">
              Mạng Lưới Phục Vụ Tại Các Địa Bàn Tỉnh Quảng Ninh
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Dù bạn ở đâu tại Quảng Ninh, Thành Đạt luôn có giải pháp giao nhận và bàn giao bản dịch công chứng nhanh chóng nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quangNinhAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-extrabold text-base text-[#172554]">{area.name}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {area.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {area.detail}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-blue-600 flex items-center gap-1">
                  <span>Hỗ trợ online 24/7</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Anchor */}
      <section id="bao-gia-qn" className="py-16 sm:py-20 bg-white border-t border-blue-100 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuotationForm />
        </div>
      </section>
    </div>
  )
}
