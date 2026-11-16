"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Check } from "lucide-react"
import { siteConfig } from "@/config/site"

/**
 * Hero Banner:
 * 1. Typography Spacing (Issue 1):
 *    - Reduced vertical distance between headline lines (line-height reduced, -space-y-0.5/1)
 *    - Reduced margins between elements (compact, cohesive grouping)
 *    - No overlapping, Vietnamese accents perfectly preserved
 * 2. Model Head Display (Issue 2):
 *    - Generous headroom padding added to consultant-model@2x
 *    - object-fit: contain and object-position: center top
 *    - Ample container height, head & hair 100% visible and unclipped
 * 3. Exact 24px Balanced Spacing:
 *    - Header to banner: exactly 24px (pt-[24px])
 *    - Banner to next section: exactly 24px (pb-[24px])
 * 4. Preserved:
 *    - Blue color palette, background gradient & lighting
 *    - Two blue content cards
 *    - "LIÊN HỆ NGAY >" button & Hotline 0862 455 569
 *    - Rectangular sharp corners ("Đặc biệt không bo góc tròn": rounded-none)
 */
export function Hero() {
  return (
    <section className="w-full bg-white pt-[24px] pb-[24px] my-0">
      {/* Container: Full width with subtle white side margins */}
      <div className="w-full max-w-[1920px] mx-auto px-2 sm:px-3 md:px-4">
        
        {/* Banner Box: Sharp rectangular edges (rounded-none), no round corners */}
        <div className="relative w-full rounded-none overflow-hidden bg-gradient-to-r from-[#7AB0FD] via-[#9DC6FE] to-[#7DAFFD] border border-blue-200/90 shadow-md">
          
          {/* Background Lighting & Light Streaks */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Soft central radiant aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-white/30 rounded-full blur-3xl" />
            
            {/* Speed light rays radiating across banner */}
            <div className="absolute top-[32%] left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="absolute top-[68%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            
            {/* Subtle dotted pattern for depth */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          </div>

          {/* Banner Content Grid */}
          <div className="relative z-10 w-full p-4 sm:p-5 lg:p-6 xl:p-7">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 xl:gap-6 items-center">
              
              {/* ======================================================== */}
              {/* COLUMN 1: TYPOGRAPHY & CALL TO ACTION (Lg: col-span-5) */}
              {/* ======================================================== */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-2 sm:space-y-2.5">
                
                {/* 1. Ribbon Tag: CÔNG CHỨNG BẢN DỊCH */}
                <div className="self-start">
                  <div className="inline-flex items-center px-3.5 py-1 bg-[#0047BA] text-white rounded-md shadow-md border-t border-blue-300/40 text-xs sm:text-[13px] font-black uppercase tracking-wider">
                    <span>CÔNG CHỨNG BẢN DỊCH</span>
                  </div>
                </div>

                {/* 2. Main Headline (Thu hẹp khoảng cách, giảm line-height, chữ gần nhau) */}
                <div className="flex flex-col space-y-0 -space-y-0.5 sm:-space-y-1 my-0.5">
                  {/* Line 1: "Chính xác TỪNG TỪ" */}
                  <div className="flex items-baseline gap-2 leading-tight">
                    <span className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#0B3598] font-bold drop-shadow-xs">
                      Chính xác
                    </span>
                    <span className="font-black text-xl sm:text-2xl lg:text-3xl text-[#0066FF] tracking-tight uppercase">
                      TỪNG TỪ
                    </span>
                  </div>

                  {/* Line 2: "ĐÚNG từng" */}
                  <div className="flex items-baseline gap-2 leading-none">
                    <span className="font-black text-3xl sm:text-4xl lg:text-5xl text-[#0047BA] tracking-tight uppercase leading-none drop-shadow-xs">
                      ĐÚNG
                    </span>
                    <span className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#0B3598] font-bold">
                      từng
                    </span>
                  </div>

                  {/* Line 3: "CHUẨN dấu" */}
                  <div className="flex items-baseline gap-2 leading-none">
                    <span className="font-black text-3xl sm:text-4xl lg:text-5xl text-[#0038A8] tracking-tight uppercase leading-none drop-shadow-xs">
                      CHUẨN
                    </span>
                    <span className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#0B3598] font-bold">
                      dấu
                    </span>
                  </div>
                </div>

                {/* 3. CTA Buttons & Hotline Form: Khoảng cách gọn gàng */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-1.5">
                  {/* Primary CTA Button: LIÊN HỆ NGAY > */}
                  <Link href="/#bao-gia">
                    <button className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#005AE2] hover:bg-[#0047BA] text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center gap-1.5 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                      <span>LIÊN HỆ NGAY</span>
                      <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </button>
                  </Link>

                  {/* Phone Hotline Link: Clear & Properly formatted */}
                  <a
                    href={`tel:${siteConfig.hotline}`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white text-[#0038A8] border border-blue-300/60 shadow-xs transition-all duration-200 hover:scale-105 cursor-pointer"
                    title={`Gọi ngay hotline ${siteConfig.hotlineDisplay}`}
                  >
                    <div className="w-7 h-7 rounded-full bg-[#005AE2] text-white flex items-center justify-center shadow-xs shrink-0">
                      <Phone className="w-3.5 h-3.5 fill-white" />
                    </div>
                    <span className="font-black text-sm sm:text-base tracking-wider text-[#0038A8]">
                      {siteConfig.hotlineDisplay}
                    </span>
                  </a>
                </div>

              </div>

              {/* ======================================================== */}
              {/* COLUMN 2: TWO BLUE FEATURE CARDS (Lg: col-span-4)       */}
              {/* ======================================================== */}
              <div className="lg:col-span-4 flex flex-col space-y-2.5 sm:space-y-3">
                
                {/* Card 1: DỊCH VÀ CÔNG CHỨNG CÁC LOẠI GIẤY TỜ */}
                <div className="bg-[#003399] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-white shadow-lg border border-blue-400/25">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-white text-[#003399] flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                    </div>
                    <h3 className="font-black text-xs sm:text-[13px] uppercase tracking-wide leading-tight">
                      DỊCH VÀ CÔNG CHỨNG CÁC LOẠI GIẤY TỜ:
                    </h3>
                  </div>
                  <ul className="space-y-1 text-[11px] sm:text-xs text-blue-100 font-medium pl-2">
                    <li className="flex items-start gap-1.5">
                      <span className="text-white text-base leading-none">•</span>
                      <span>Giấy khai sinh, CMND, hộ chiếu, hộ khẩu</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-white text-base leading-none">•</span>
                      <span>Bằng cấp, bảng điểm, chứng chỉ</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-white text-base leading-none">•</span>
                      <span>Hợp đồng, giấy ủy quyền, hồ sơ du học &amp; lao động</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2: KẾT NỐI TRỰC TIẾP & CAM KẾT */}
                <div className="bg-[#003399] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-white shadow-lg border border-blue-400/25 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white text-[#003399] flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                    </div>
                    <span className="font-black text-xs sm:text-[13px] uppercase tracking-wide leading-tight">
                      KẾT NỐI TRỰC TIẾP VỚI PHÒNG CÔNG CHỨNG NHÀ NƯỚC
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white text-[#003399] flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                    </div>
                    <span className="font-black text-xs sm:text-[13px] uppercase tracking-wide leading-tight">
                      CAM KẾT HOÀN THÀNH NHANH TRONG 1 – 2 NGÀY LÀM VIỆC
                    </span>
                  </div>
                </div>

              </div>

              {/* ======================================================== */}
              {/* COLUMN 3: CONSULTANT MODEL (Lg: col-span-3)             */}
              {/* ======================================================== */}
              <div className="lg:col-span-3 flex items-center justify-center lg:justify-end h-full pt-2 lg:pt-0">
                {/* Ample height container with object-position: center top to ensure complete head & hair visibility */}
                <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-none h-[290px] sm:h-[330px] lg:h-[360px] xl:h-[380px]">
                  <Image
                    src="/images/consultant-model@2x.png"
                    alt="Chuyên viên tư vấn dịch thuật công chứng Thành Đạt"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 340px, 420px"
                    className="object-contain select-none drop-shadow-md"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
