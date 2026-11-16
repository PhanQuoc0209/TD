import React from "react"
import { siteConfig } from "@/config/site"
import { Award, FileText, Globe2, Smile } from "lucide-react"

export function StatsSection() {
  const icons = [Award, FileText, Globe2, Smile]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#2563EB] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Dấu ấn khẳng định</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Những Con Số Biết Nói Tại Dịch Thuật Thành Đạt
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mt-2">
            Minh chứng rõ nét nhất cho chất lượng, uy tín và sự đồng hành bền chặt cùng hàng chục nghìn khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.stats.map((st, idx) => {
            const Icon = icons[idx] || Award
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-white/15 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 text-amber-300 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                  {st.value}
                </div>
                <div className="text-base font-bold text-blue-200 mb-1">
                  {st.label}
                </div>
                <p className="text-xs text-blue-100/80">
                  {st.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
