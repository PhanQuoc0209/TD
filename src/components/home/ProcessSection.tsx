import React from "react"
import Link from "next/link"
import {
  FileSearch,
  Calculator,
  FileCheck2,
  Send,
  ArrowRight,
  Clock,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: FileSearch,
      title: "Tiếp Nhận & Đánh Giá Tài Liệu",
      desc: "Khách hàng gửi file scan/ảnh qua Zalo hoặc mang trực tiếp tới văn phòng. Chuyên viên Thành Đạt phân tích ngôn ngữ, độ dài, tính chất công chứng tư pháp.",
      time: "10 - 15 phút",
      highlight: "Tiếp nhận 24/7 online"
    },
    {
      num: "02",
      icon: Calculator,
      title: "Báo Giá & Thống Nhất Tiến Độ",
      desc: "Thành Đạt gửi báo giá trọn gói minh bạch, cam kết thời gian hoàn thành chính xác. Phân bổ hồ sơ ngay cho biên dịch viên chuyên ngành phù hợp.",
      time: "Rõ ràng - Minh bạch",
      highlight: "Không phát sinh phụ phí"
    },
    {
      num: "03",
      icon: FileCheck2,
      title: "Dịch Thuật & Lấy Dấu Tư Pháp",
      desc: "Biên dịch viên chuyển ngữ, soát chéo thuật ngữ, hiệu đính định dạng. Trực tiếp thực hiện chứng thực tư pháp tại cơ quan nhà nước có thẩm quyền.",
      time: "Lấy ngay trong ngày",
      highlight: "Chuẩn xác 100% ngữ nghĩa"
    },
    {
      num: "04",
      icon: Send,
      title: "Bàn Giao Bản Dịch & Lưu Trữ",
      desc: "Bàn giao hồ sơ bản cứng đóng dấu giáp lai tận nơi hoặc bản mềm file scan rõ nét qua email/Zalo. Hỗ trợ trích lục sao y thêm bất cứ lúc nào.",
      time: "Giao tận tay đúng hẹn",
      highlight: "Hỏa tốc Hà Nội & Quảng Ninh"
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Quy trình làm việc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
            Quy Trình Dịch Thuật Công Chứng Chuyên Nghiệp 4 Bước
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Quy trình tinh gọn, khép kín, được kiểm soát chặt chẽ giúp tiết kiệm tối đa thời gian và chi phí cho khách hàng.
          </p>
        </div>

        {/* 4 Steps Row/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon
            return (
              <div
                key={idx}
                className="relative bg-[#F5F8FF]/60 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-blue-300/80 group-hover:text-blue-600 transition-colors">
                    {s.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#172554] mb-2 leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 text-blue-700 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{s.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{s.highlight}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process CTA */}
        <div className="mt-12 text-center">
          <Link href="/#bao-gia">
            <Button size="lg" className="font-bold shadow-md shadow-blue-600/25">
              <span>Bắt Đầu Với Bước 1 – Gửi Tài Liệu Ngay</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
