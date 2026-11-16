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
  title: "Dịch Thuật Công Chứng Hà Nội | Lấy Ngay Trong Ngày Tại Cầu Giấy & Các Quận",
  description:
    "Dịch vụ dịch thuật công chứng tư pháp lấy ngay uy tín tại Hà Nội. Trụ sở tại 168 Cầu Giấy, giao nhận tận nơi các quận Cầu Giấy, Ba Đình, Hoàn Kiếm, Đống Đa, Nam Từ Liêm. Đầy đủ dấu đỏ tư pháp nộp các Đại sứ quán.",
  alternates: {
    canonical: `${siteConfig.domain}/dich-thuat-cong-chung-ha-noi`,
  },
}

export default function HaNoiPage() {
  const hanoiDistricts = [
    {
      name: "Quận Cầu Giấy & Nam Từ Liêm",
      detail: "Trụ sở chính Thành Đạt tại 168 Cầu Giấy. Khu vực tập trung nhiều trường đại học lớn (ĐHQGHN, ĐH Sư Phạm, HV Báo Chí) và các tòa nhà văn phòng Duy Tân, Keangnam.",
      time: "Lấy ngay 4 - 6 tiếng"
    },
    {
      name: "Quận Ba Đình & Tây Hồ",
      detail: "Gần Cục Lãnh sự Bộ Ngoại Giao (40 Trần Phú) và các Đại sứ quán ngoại giao. Chuyên xử lý hồ sơ hợp pháp hóa lãnh sự và visa định cư.",
      time: "Lấy trong ngày"
    },
    {
      name: "Quận Đống Đa & Thanh Xuân",
      detail: "Phục vụ nhanh chóng nhu cầu dịch thuật hồ sơ du học, bằng cấp, học bạ, sao kê tài chính và chứng minh thu nhập của học sinh, sinh viên.",
      time: "Lấy ngay trong ngày"
    },
    {
      name: "Quận Hoàn Kiếm & Hai Bà Trưng",
      detail: "Trung tâm hành chính và các ngân hàng lớn. Chuyên dịch hợp đồng thương mại quốc tế, báo cáo kiểm toán tài chính và hồ sơ thầu.",
      time: "Bàn giao tận tay"
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
            <span className="text-white font-semibold">Hà Nội</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>Trụ Sở 168 Cầu Giấy – Hà Nội</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Dịch Thuật Công Chứng Tư Pháp Lấy Ngay Tại Hà Nội
            </h1>
            <p className="text-blue-100 text-base sm:text-lg mt-3 leading-relaxed">
              Dịch và chứng thực tư pháp lấy ngay trong ngày tại 12 quận nội thành Hà Nội. Chuẩn form mẫu quy định của các Đại sứ quán Mỹ, Úc, Canada, Anh, Schengen, Hàn Quốc, Nhật Bản, Trung Quốc.
            </p>
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link href="#bao-gia-hn">
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
                <span>Hotline Hà Nội: {siteConfig.hotlineDisplay}</span>
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
                <span>Ưu thế thủ đô</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] tracking-tight">
                Giải Pháp Dịch Công Chứng Hỏa Tốc Cho Hồ Sơ Nộp Đại Sứ Quán
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Hà Nội là nơi đặt trụ sở của toàn bộ các Đại sứ quán, Tổng Lãnh sự quán, Cục Lãnh sự Bộ Ngoại Giao và các cơ quan tư pháp trung ương. Các tiêu chuẩn xét duyệt hồ sơ tại Hà Nội đòi hỏi tính chính xác tuyệt đối về thuật ngữ, dấu giáp lai và mẫu dịch chuẩn quốc tế.
                </p>
                <p>
                  Với trụ sở thuận tiện tại <strong>168 Cầu Giấy</strong>, Dịch Thuật Thành Đạt có thể bàn giao hồ sơ công chứng tư pháp hỏa tốc trong ngày, giao tận tay khách hàng hoặc giao thẳng tới địa điểm phỏng vấn visa, nộp hồ sơ của bạn.
                </p>
              </div>

              {/* Local Specific Features */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#172554] block">Lấy ngay trong 4 - 8 tiếng:</strong>
                    Nhận hồ sơ trước 10h sáng, trả kết quả có dấu tư pháp ngay buổi chiều cùng ngày cho các giấy tờ cá nhân thông dụng.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#172554] block">Hỗ trợ trọn gói Hợp pháp hóa Lãnh sự:</strong>
                    Đại diện khách hàng thực hiện thủ tục xin tem chứng nhận tại Cục Lãnh sự Bộ Ngoại Giao (Trần Phú, Ba Đình) và các Đại sứ quán.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#172554] block">Shipper hỏa tốc nội thành:</strong>
                    Giao hồ sơ tận văn phòng hoặc nhà riêng tại Cầu Giấy, Nam Từ Liêm, Đống Đa, Ba Đình, Hoàn Kiếm, Thanh Xuân.
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
                  <h3 className="font-bold text-lg text-[#172554]">Trụ Sở Thành Đạt Hà Nội</h3>
                  <p className="text-xs text-blue-600 font-semibold">Tầng 5, 168 Cầu Giấy, Q. Cầu Giấy, Hà Nội</p>
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
                    <span className="font-bold text-slate-900">Phục vụ hỏa tốc:</span>
                    <p className="text-slate-600">Cầu Giấy, Ba Đình, Hoàn Kiếm, Đống Đa, Nam Từ Liêm, Bắc Từ Liêm, Thanh Xuân, Hai Bà Trưng, Tây Hồ, Hà Đông, Long Biên.</p>
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
                  <span>Gửi Ảnh Hồ Sơ Qua Zalo Nhận Báo Giá</span>
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

      {/* District Coverage Grid */}
      <section className="py-16 sm:py-20 bg-[#F5F8FF] border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] tracking-tight">
              Khu Vực Phục Vụ Nhanh Tại Các Quận Hà Nội
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Chỉ cần chụp ảnh tài liệu gửi qua Zalo, nhân viên giao nhận sẽ mang bản công chứng đến tận văn phòng hoặc nhà riêng của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hanoiDistricts.map((d, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-extrabold text-base text-[#172554]">{d.name}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {d.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {d.detail}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-blue-600 flex items-center gap-1">
                  <span>Ship hỏa tốc tận tay</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Anchor */}
      <section id="bao-gia-hn" className="py-16 sm:py-20 bg-white border-t border-blue-100 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuotationForm />
        </div>
      </section>
    </div>
  )
}
