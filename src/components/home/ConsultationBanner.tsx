import React from "react"
import { MessageSquare, Phone } from "lucide-react"
import { siteConfig } from "@/config/site"

export function ConsultationBanner() {
  return (
    <section className="w-full bg-[#002A72] py-3 sm:py-4 border-y border-[#001F54] shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
        {/* Nút 1: Tư Vấn Miễn Phí */}
        <a
          href={siteConfig.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full bg-white text-[#0055D4] hover:bg-slate-100 font-bold text-xs sm:text-sm uppercase tracking-wide shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-[#0055D4] shrink-0" />
          <span>TƯ VẤN MIỄN PHÍ</span>
        </a>

        {/* Nút 2: Hotline +84 (0) 862 455 569 */}
        <a
          href={`tel:${siteConfig.hotline}`}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full bg-white text-[#0055D4] hover:bg-slate-100 font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Phone className="w-4 h-4 text-[#0055D4] shrink-0 fill-[#0055D4]" />
          <span>+84 (0) 862 455 569</span>
        </a>
      </div>
    </section>
  )
}
