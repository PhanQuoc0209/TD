import React from "react"
import Link from "next/link"
import {
  ShieldCheck,
  Award,
  Users2,
  CheckCircle2,
  ArrowRight,
  FileCheck2,
  MapPin
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutIntro() {
  return (
    <section className="py-16 sm:py-20 bg-[#F5F8FF] border-y border-blue-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Highlights with Trust Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-100 space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#172554]">
                      Dịch Thuật Thành Đạt
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold">
                      Uy tín đã được khẳng định qua 12+ năm
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-sm text-[#172554]">Chứng thực tư pháp hợp pháp</strong>
                      <span className="text-slate-500">
                        Liên kết trực tiếp với Phòng Tư pháp và Văn phòng Công chứng nhà nước tại Hà Nội & Quảng Ninh.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Users2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-sm text-[#172554]">Hơn 200+ dịch giả & chuyên gia</strong>
                      <span className="text-slate-500">
                        Cử nhân ngôn ngữ, thạc sĩ du học sinh bản địa và chuyên gia pháp lý, tài chính, y tế.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-sm text-[#172554]">Quy trình kiểm soát chất lượng 3 lớp</strong>
                      <span className="text-slate-500">
                        Biên dịch → Soát lỗi chéo → Công chứng viên thẩm định hình thức, không để xảy ra sai sót.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Office locations quick pill */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#172554]">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Hệ thống cơ sở phục vụ:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 font-medium">
                    <div className="p-2 bg-blue-50/70 rounded-lg">
                      <span className="font-bold text-[#172554] block">TP. Hà Nội:</span>
                      168 Cầu Giấy
                    </div>
                    <div className="p-2 bg-blue-50/70 rounded-lg">
                      <span className="font-bold text-[#172554] block">Quảng Ninh:</span>
                      126 Lê Thánh Tông, Hạ Long
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Intro Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
              <span>Về chúng tôi</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight leading-tight">
              Dịch Thuật Thành Đạt – Đối Tác Ngôn Ngữ & Pháp Lý Tin Cậy Tại Quảng Ninh & Hà Nội
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Được thành lập với sứ mệnh mang đến giải pháp dịch thuật công chứng chuẩn xác, nhanh chóng và bảo mật cao nhất, <strong>Dịch thuật Thành Đạt</strong> đã đồng hành cùng hơn <strong>35.000 khách hàng</strong> cá nhân, du học sinh, người lao động và hàng trăm doanh nghiệp tại khu vực phía Bắc.
              </p>

              <p>
                Chúng tôi thấu hiểu rằng: mỗi văn bản, mỗi trang hồ sơ du học, hợp đồng kinh tế hay hồ sơ thầu đều gắn liền với những dấu mốc quan trọng trong cuộc đời và sự phát triển của bạn. Vì vậy, tôn chỉ làm việc của Thành Đạt luôn là <em>“Chính xác trong từng con chữ – Chuẩn mực về mặt pháp lý – Tận tâm trong từng tiến độ”</em>.
              </p>
            </div>

            {/* Key commitments grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>100% Chấp thuận tại các Đại sứ quán & Cơ quan Tư pháp</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Lấy bản dịch & công chứng ngay trong ngày</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Báo giá trọn gói minh bạch – Không phụ thu</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Bảo mật dữ liệu tuyệt đối theo tiêu chuẩn NDA</span>
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/gioi-thieu">
                <Button variant="navy" size="lg" className="font-bold">
                  <span>Tìm Hiểu Thêm Về Thành Đạt</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>

              <Link href="/#bao-gia">
                <Button variant="outlineBlue" size="lg" className="font-bold">
                  Nhận Báo Giá Nhanh
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
