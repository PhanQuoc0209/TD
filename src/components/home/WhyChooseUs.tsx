import React from "react"
import {
  Award,
  CheckCircle2,
  Zap,
  DollarSign,
  ShieldCheck,
  Truck,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export function WhyChooseUs() {
  const iconMap: Record<string, React.ElementType> = {
    Award,
    CheckCircle2,
    Zap,
    DollarSign,
    ShieldCheck,
    Truck
  }

  return (
    <section className="py-16 sm:py-20 bg-[#F5F8FF] border-y border-blue-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Giá trị cốt lõi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
            6 Lý Do Bạn Nên Chọn Dịch Vụ Dịch Thuật Công Chứng Tại Thành Đạt
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Chúng tôi tạo dựng uy tín bền vững bằng chất lượng bản dịch chuẩn xác, tốc độ xử lý vượt trội và sự an tâm tuyệt đối cho mọi khách hàng.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.reasons.map((r, idx) => {
            const Icon = iconMap[r.icon] || CheckCircle2
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-blue-100 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#172554] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors">
                    {r.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#2563EB]">
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Cam kết chuẩn chất lượng Thành Đạt <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-blue-200 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-[#172554]">
              Bạn cần dịch thuật công chứng gấp cho ngày mai?
            </h4>
            <p className="text-slate-600 text-sm">
              Gửi tài liệu ngay hôm nay, chúng tôi xử lý trong đêm để bạn nhận kết quả sớm nhất.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <Link href="/#bao-gia">
              <Button size="lg" className="font-bold shadow-md">
                Gửi Hồ Sơ Báo Giá Ngay
              </Button>
            </Link>
            <a href={`tel:${siteConfig.hotline}`}>
              <Button variant="outline" size="lg" className="font-bold">
                Gọi {siteConfig.hotlineDisplay}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
