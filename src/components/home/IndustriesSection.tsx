"use client"

import React from "react"
import {
  Sprout,
  Wrench,
  Megaphone,
  TrendingUp,
  BookOpen,
  Key,
  Microscope,
  Leaf,
  Landmark,
  Pill,
  HeartPulse,
  Radio,
  HardHat,
  Truck,
  Scissors,
  Scale
} from "lucide-react"

/**
 * Section: HỖ TRỢ DỊCH THUẬT CÔNG CHỨNG HƠN 20+ NGÀNH NGHỀ
 * Designed exactly matching user reference image:
 * - 16 cards (8 columns x 2 rows on desktop)
 * - CSS style: rounded-2xl, border-2 border-blue-200, luminous blue halo glow shadow
 * - Navy icon on top, bold uppercase navy title below
 */
export function IndustriesSection() {
  const industries = [
    { name: "NÔNG NGHIỆP", icon: Sprout },
    { name: "KỸ THUẬT", icon: Wrench },
    { name: "MARKETING", icon: Megaphone },
    { name: "TÀI CHÍNH", icon: TrendingUp },
    { name: "GIÁO DỤC", icon: BookOpen },
    { name: "KHÁCH SẠN", icon: Key },
    { name: "KHOA HỌC", icon: Microscope },
    { name: "MÔI TRƯỜNG", icon: Leaf },
    { name: "NGÂN HÀNG", icon: Landmark },
    { name: "DƯỢC PHẨM", icon: Pill },
    { name: "Y TẾ", icon: HeartPulse },
    { name: "VIỄN THÔNG", icon: Radio },
    { name: "XÂY DỰNG", icon: HardHat },
    { name: "VẬN TẢI", icon: Truck },
    { name: "MAY MẶC", icon: Scissors },
    { name: "LUẬT PHÁP", icon: Scale }
  ]

  return (
    <section id="nganh-nghe" className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] xl:text-[30px] font-extrabold text-[#072B6A] tracking-tight uppercase">
            HỖ TRỢ DỊCH THUẬT CÔNG CHỨNG HƠN 20+ NGÀNH NGHỀ
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2.5 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-[#072B6A] font-bold">Thành Đạt</strong> cung cấp dịch vụ dịch thuật công chứng chuyên nghiệp, hỗ trợ hơn 20 lĩnh vực ngành nghề khác nhau, đảm bảo nhanh chóng và chính xác.
          </p>
        </div>

        {/* 16 Industries Grid - 8 columns on lg, 4 on sm, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
          {industries.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-blue-200/90 shadow-[0_0_18px_rgba(59,130,246,0.28)] hover:shadow-[0_0_24px_rgba(37,99,235,0.48)] hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center p-3 sm:p-3.5 aspect-square cursor-pointer group"
              >
                <div className="flex-1 flex items-center justify-center">
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-[#072B6A] group-hover:text-[#0055D4] group-hover:scale-110 transition-all duration-300 stroke-[2.2]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black text-[#072B6A] group-hover:text-[#0055D4] uppercase tracking-tight text-center transition-colors line-clamp-1">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
