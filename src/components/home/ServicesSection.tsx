"use client"

import React from "react"
import Link from "next/link"
import {
  FileCheck2,
  GraduationCap,
  Building2,
  Cpu,
  Stamp,
  Users,
  ArrowRight,
  Clock,
  Check,
  Send,
  Phone,
  MessageCircle
} from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const iconMap: Record<string, React.ElementType> = {
    FileCheck: FileCheck2,
    GraduationCap: GraduationCap,
    Building2: Building2,
    Cpu: Cpu,
    Stamp: Stamp,
    Users: Users
  }

  return (
    <section id="dich-vu" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Dịch vụ cốt lõi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
            CÁC LOẠI HÌNH DỊCH THUẬT CÔNG CHỨNG PHỔ BIẾN
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Thành Đạt cung cấp dịch vụ dịch thuật công chứng cho nhiều loại giấy tờ quan trọng như hồ sơ du học, visa, giấy tờ cá nhân và tài liệu pháp lý, đảm bảo nhanh chóng, chính xác và hợp pháp tại Hà Nội & Quảng Ninh.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((svc) => {
            const Icon = iconMap[svc.icon] || FileCheck2
            return (
              <div
                key={svc.id}
                id={svc.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative group ${
                  svc.isPopular
                    ? "border-blue-400 bg-gradient-to-b from-blue-50/50 via-white to-white shadow-lg ring-1 ring-blue-400/30"
                    : "border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-xl"
                }`}
              >
                {/* Popular tag */}
                {svc.isPopular && (
                  <div className="absolute -top-3 right-6 bg-[#2563EB] text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full shadow-sm tracking-wide uppercase">
                    Phổ biến nhất
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#172554] leading-snug group-hover:text-[#2563EB] transition-colors uppercase">
                        {svc.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500">
                        <span className="flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                          <Clock className="w-3 h-3" />
                          <span>{svc.turnaroundTime}</span>
                        </span>
                        <span className="text-slate-400 font-medium">•</span>
                        <span className="text-[#2563EB] font-bold">{svc.priceFrom}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {svc.description}
                  </p>

                  {/* Direct hotline consultation callout on card */}
                  <div className="mb-4 p-2.5 bg-slate-50 rounded-lg flex items-center justify-between border border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">Tư vấn nhanh:</span>
                    <a
                      href={`tel:${siteConfig.hotline}`}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                      <span>{siteConfig.hotlineDisplay}</span>
                    </a>
                  </div>

                  {/* Key Features list */}
                  <div className="space-y-2 mb-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Ưu điểm dịch vụ:
                    </span>
                    {svc.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Common documents sample */}
                  <div className="bg-blue-50/50 p-3 rounded-xl mb-4 border border-blue-100 text-xs">
                    <span className="font-semibold text-slate-700 block mb-1 text-[11px]">
                      Giấy tờ tiếp nhận phổ biến:
                    </span>
                    <ul className="text-slate-600 space-y-1 list-disc list-inside">
                      {svc.commonDocs.slice(0, 2).map((doc, idx) => (
                        <li key={idx} className="truncate">
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/dich-vu-dich-thuat#${svc.id}`}
                    className="text-xs font-bold text-[#2563EB] hover:text-blue-800 flex items-center gap-1 transition-colors"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link href="/#bao-gia">
                    <Button size="sm" variant={svc.isPopular ? "default" : "secondary"}>
                      <Send className="w-3 h-3 mr-1" />
                      <span>Báo giá</span>
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Conversion CTA Banner inspired directly by Vạn Tín */}
        <div className="mt-14 bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#2563EB] rounded-2xl p-6 sm:p-8 text-white text-center shadow-xl space-y-4">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-amber-300 uppercase">
            CLICK NÚT LIÊN HỆ NGAY PHÍA DƯỚI ĐÂY ĐỂ ĐƯỢC
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            TƯ VẤN VIÊN CỦA CHÚNG TÔI TƯ VẤN CHI TIẾT VỀ DỊCH VỤ
          </h3>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link href="/#bao-gia">
              <Button size="lg" variant="white" className="font-bold shadow-md">
                <Send className="w-4 h-4 mr-1 text-[#2563EB]" />
                <span>LIÊN HỆ BÁO GIÁ NGAY</span>
              </Button>
            </Link>
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0068FF] text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAT ZALO VỚI TƯ VẤN VIÊN</span>
            </a>
            <a
              href={`tel:${siteConfig.hotline}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>GỌI HOTLINE: {siteConfig.hotlineDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
