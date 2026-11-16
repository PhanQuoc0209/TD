import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  Award,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Building
} from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Giới Thiệu Về Dịch Thuật Thành Đạt | Đơn Vị Dịch Thuật Công Chứng Hàng Đầu",
  description:
    "Tìm hiểu về Dịch Thuật Thành Đạt - Hệ thống dịch thuật công chứng tư pháp lấy ngay chuyên nghiệp tại Hà Nội và Quảng Ninh với hơn 12 năm kinh nghiệm và 35.000+ hồ sơ hoàn thành.",
  alternates: {
    canonical: `${siteConfig.domain}/gioi-thieu`,
  },
}

export default function GioiThieuPage() {
  return (
    <div className="bg-[#F5F8FF] min-h-screen">
      {/* Breadcrumb & Page Banner */}
      <section className="bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#2563EB] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-blue-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">Giới thiệu</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>12+ Năm Đồng Hành Cùng Khách Hàng</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Giới Thiệu Về Dịch Thuật Thành Đạt
            </h1>
            <p className="text-blue-100 text-base sm:text-lg mt-3 leading-relaxed">
              Giải pháp dịch thuật và công chứng tư pháp chuẩn xác, bảo mật, lấy ngay trong ngày phục vụ cá nhân và doanh nghiệp tại Hà Nội & Quảng Ninh.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase">
                <span>Câu chuyện thương hiệu</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] tracking-tight">
                Vị Thế & Sứ Mệnh Của Dịch Thuật Thành Đạt
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Khởi nguồn từ một nhóm các chuyên viên ngôn ngữ và cố vấn pháp lý giàu tâm huyết, <strong>Dịch Thuật Thành Đạt</strong> ra đời với mục tiêu giải quyết triệt để những bất cập lớn mà khách hàng thường gặp phải: chi phí phát sinh mập mờ, thủ tục hành chính tư pháp phức tạp và thời gian trả kết quả chậm trễ.
                </p>
                <p>
                  Sau hơn 12 năm xây dựng và phát triển, Thành Đạt đã trở thành một trong những đơn vị dịch thuật công chứng tư pháp uy tín bậc nhất tại hai địa bàn kinh tế trọng điểm: <strong>Thủ đô Hà Nội</strong> và <strong>Tỉnh Quảng Ninh</strong>.
                </p>
                <p>
                  Chúng tôi không chỉ chuyển đổi ngôn ngữ đơn thuần, mà còn đóng vai trò là chiếc cầu nối pháp lý vững chắc, giúp các bản hợp đồng kinh tế quốc tế có hiệu lực cao nhất, giúp hàng nghìn học sinh - sinh viên mở rộng cánh cửa du học toàn cầu, và giúp hàng chục nghìn cá nhân hoàn thiện thủ tục visa, định cư suôn sẻ.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="text-2xl font-black text-[#2563EB] mb-1">Chuẩn Xác</div>
                  <p className="text-xs text-slate-600">Sai sót 0% đối với số liệu, ngày tháng, tên riêng và thuật ngữ hành chính.</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-2xl font-black text-emerald-600 mb-1">Nhanh Chóng</div>
                  <p className="text-xs text-slate-600">Dịch & lấy dấu công chứng tư pháp lấy ngay trong ngày, hỗ trợ hồ sơ hỏa tốc.</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="text-2xl font-black text-amber-600 mb-1">Bảo Mật</div>
                  <p className="text-xs text-slate-600">Cam kết bảo mật tuyệt đối, ký thỏa thuận NDA pháp lý cho mọi tài liệu.</p>
                </div>
              </div>
            </div>

            {/* Right Card: Credibility & Achievements */}
            <div className="lg:col-span-5 bg-[#F5F8FF] rounded-2xl p-7 border border-blue-200 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#172554] border-b border-blue-200/80 pb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span>Năng Lực & Tiêu Chuẩn Hoạt Động</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Liên kết tư pháp cấp Quận/Huyện</strong>
                    <span className="text-slate-500">Mọi bản dịch công chứng đều có giá trị pháp lý toàn vẹn tại các cơ quan thẩm quyền trong và ngoài nước.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Đội ngũ hơn 200+ dịch giả chính thức</strong>
                    <span className="text-slate-500">Bao gồm cử nhân, thạc sĩ, tiến sĩ chuyên ngành ngôn ngữ và các chuyên gia bản địa.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Quy trình thẩm định 3 lớp khép kín</strong>
                    <span className="text-slate-500">Đảm bảo đối soát 100% từng từ, dấu câu, format bảng biểu trước khi in ấn và đóng dấu.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Mạng lưới cơ sở tiện lợi</strong>
                    <span className="text-slate-500">Văn phòng tại Cầu Giấy (Hà Nội) và Lê Thánh Tông (Hạ Long, Quảng Ninh) cùng hệ thống giao nhận hỏa tốc.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/#bao-gia" className="block">
                  <Button className="w-full font-bold shadow-md" size="lg">
                    <span>Nhận Báo Giá & Tư Vấn Miễn Phí</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Commitment Section */}
      <section className="py-16 sm:py-20 bg-[#F5F8FF] border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] tracking-tight">
              Phục Vụ Trọng Điểm Tại Hà Nội & Quảng Ninh
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Chúng tôi tối ưu hóa quy trình để khách hàng tại hai tỉnh thành luôn nhận được dịch vụ nhanh nhất mà không phải di chuyển xa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#172554]">Trụ Sở Hà Nội</h3>
                  <p className="text-xs text-blue-600">Trung tâm tài chính - giáo dục - ngoại giao</p>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Tọa lạc tại 168 Cầu Giấy, vị trí trung tâm thuận tiện kết nối các quận Cầu Giấy, Ba Đình, Đống Đa, Nam Từ Liêm và Hoàn Kiếm. Chuyên tiếp nhận hồ sơ du học, visa định cư, hồ sơ thầu dự án và tài liệu doanh nghiệp quốc tế.
              </p>
              <div className="pt-2 text-xs text-slate-500 font-medium">
                Hotline hỗ trợ: <strong className="text-blue-700">{siteConfig.hotlineDisplay}</strong>
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#172554]">Chi Nhánh Quảng Ninh</h3>
                  <p className="text-xs text-blue-600">Đầu mối kinh tế biển - du lịch - xuất nhập khẩu</p>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Tọa lạc tại 126 Lê Thánh Tông, TP. Hạ Long. Phục vụ nhanh chóng nhu cầu dịch thuật công chứng cho cá nhân và các doanh nghiệp ngành khai khoáng than, vận tải biển, xuất nhập khẩu cửa khẩu Móng Cái, du lịch Hạ Long và Cẩm Phả.
              </p>
              <div className="pt-2 text-xs text-slate-500 font-medium">
                Hotline hỗ trợ: <strong className="text-blue-700">{siteConfig.hotlineDisplay}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
