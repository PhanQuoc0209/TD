import React from "react"
import Link from "next/link"
import { Globe2, ArrowRight, CheckCircle2 } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export function LanguagesGrid() {
  return (
    <section className="py-16 sm:py-20 bg-[#F5F8FF] border-b border-blue-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Đa ngôn ngữ toàn cầu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
            Hỗ Trợ Hơn 50+ Ngôn Ngữ Dịch Thuật & Công Chứng
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Từ các ngôn ngữ thông dụng trong hồ sơ du học, visa, xuất nhập khẩu đến các thứ tiếng hiếm và kỹ thuật cao.
          </p>
        </div>

        {/* 20 languages Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {siteConfig.languages.map((lang) => (
            <div
              key={lang.code}
              className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{lang.flag}</span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      lang.level === "PhoBien"
                        ? "bg-blue-50 text-blue-700"
                        : lang.level === "ChuyenSau"
                        ? "bg-indigo-50 text-indigo-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {lang.level === "PhoBien"
                      ? "Phổ biến"
                      : lang.level === "ChuyenSau"
                      ? "Chuyên sâu"
                      : "Ngôn ngữ hiếm"}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-[#172554] group-hover:text-[#2563EB] transition-colors">
                  {lang.name}
                </h3>
                <span className="text-[11px] text-slate-400 font-medium block mb-2">
                  {lang.nativeName}
                </span>

                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {lang.description}
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-600">
                <span>Dịch & Công chứng</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Link href="/ngon-ngu">
            <Button variant="navy" size="lg" className="font-bold">
              <span>Xem Bảng Chi Tiết Tất Cả Ngôn Ngữ & Báo Giá</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
