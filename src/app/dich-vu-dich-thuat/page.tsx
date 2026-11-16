import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  FileCheck2,
  GraduationCap,
  Building2,
  Cpu,
  Stamp,
  Users,
  CheckCircle2,
  Clock,
  ChevronRight,
  ShieldCheck,
  Send,
  Zap
} from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dịch Vụ Dịch Thuật & Công Chứng Chuyên Nghiệp | Dịch Thuật Thành Đạt",
  description:
    "Danh mục toàn diện các dịch vụ dịch thuật công chứng tư pháp, hồ sơ du học, visa, giấy tờ doanh nghiệp, dịch chuyên ngành y tế, kỹ thuật và hợp pháp hóa lãnh sự tại Hà Nội & Quảng Ninh.",
  alternates: {
    canonical: `${siteConfig.domain}/dich-vu-dich-thuat`,
  },
}

export default function DichVuPage() {
  const iconMap: Record<string, React.ElementType> = {
    FileCheck: FileCheck2,
    GraduationCap: GraduationCap,
    Building2: Building2,
    Cpu: Cpu,
    Stamp: Stamp,
    Users: Users
  }

  return (
    <div className="bg-[#F5F8FF] min-h-screen">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#2563EB] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-blue-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">Dịch vụ dịch thuật</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Chính Xác – Chuẩn Pháp Lý – Đúng Tiến Độ</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Dịch Vụ Dịch Thuật & Công Chứng Toàn Diện
            </h1>
            <p className="text-blue-100 text-base sm:text-lg mt-3 leading-relaxed">
              Đáp ứng mọi nhu cầu chuyển ngữ và chứng thực tư pháp cho hơn 50 ngôn ngữ, từ hồ sơ cá nhân khẩn đến các dự án thầu đa quốc gia quy mô lớn.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {siteConfig.services.map((svc, index) => {
            const Icon = iconMap[svc.icon] || FileCheck2
            const isEven = index % 2 === 1

            return (
              <div
                key={svc.id}
                id={svc.id}
                className="scroll-mt-28 rounded-2xl border border-slate-200/90 p-6 sm:p-10 bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left Column: Information */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                          Dịch vụ #{index + 1}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#172554]">
                          {svc.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {svc.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold uppercase text-slate-400 block tracking-wider">
                        Đặc điểm nổi bật:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {svc.features.map((feat, fidx) => (
                          <div key={fidx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Common documents */}
                    <div className="pt-2">
                      <span className="text-xs font-bold uppercase text-slate-400 block tracking-wider mb-2">
                        Giấy tờ tài liệu thường nhận dịch:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {svc.commonDocs.map((doc, didx) => (
                          <span
                            key={didx}
                            className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200"
                          >
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Pricing & Fast Action Card */}
                  <div className="lg:col-span-5 bg-[#F5F8FF] rounded-xl p-6 sm:p-7 border border-blue-200/90 space-y-4">
                    <div className="flex items-center justify-between border-b border-blue-200/80 pb-3">
                      <span className="text-xs font-bold text-slate-500 uppercase">Mức giá tham khảo</span>
                      <span className="text-base font-extrabold text-[#2563EB]">{svc.priceFrom}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-blue-200/80 pb-3">
                      <span className="text-xs font-bold text-slate-500 uppercase">Thời gian xử lý</span>
                      <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{svc.turnaroundTime}</span>
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 pt-1">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Kèm dấu chứng thực tư pháp hợp pháp</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Giao nhận hồ sơ tận nơi tại HN & QN</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link href="/#bao-gia" className="block">
                        <Button className="w-full font-bold shadow-md" size="lg">
                          <Send className="w-4 h-4 mr-1" />
                          <span>Yêu Cầu Báo Giá Dịch Vụ Này</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
