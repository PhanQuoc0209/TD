import React from "react"
import {
  Scale,
  TrendingUp,
  Landmark,
  HeartPulse,
  Wrench,
  HardHat,
  Laptop,
  Palmtree,
  GraduationCap,
  Pickaxe,
  Ship,
  Boxes,
  Flame,
  Leaf,
  Shirt,
  Fish,
  Radio,
  Shield,
  Car,
  Microscope,
  Briefcase
} from "lucide-react"
import { siteConfig } from "@/config/site"

export function IndustriesSection() {
  const iconMap: Record<string, React.ElementType> = {
    Scale,
    TrendingUp,
    Landmark,
    HeartPulse,
    Wrench,
    HardHat,
    Laptop,
    Palmtree,
    GraduationCap,
    Pickaxe,
    Ship,
    Boxes,
    Flame,
    Leaf,
    Shirt,
    Fish,
    Radio,
    Shield,
    Car,
    Microscope
  }

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Chuyên môn hóa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
            Hỗ Trợ Dịch Thuật Chuyên Sâu Hơn 20+ Ngành Nghề
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Mỗi bản dịch được phụ trách bởi biên dịch viên có văn bằng hoặc kinh nghiệm thực chiến trong chính ngành nghề đó, đảm bảo 100% chuẩn thuật ngữ kỹ thuật.
          </p>
        </div>

        {/* 20 Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {siteConfig.industries.map((ind, idx) => {
            const Icon = iconMap[ind.icon] || Briefcase
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-blue-50/70 hover:border-blue-300 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors shadow-xs">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#2563EB] transition-colors leading-tight">
                  {ind.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
