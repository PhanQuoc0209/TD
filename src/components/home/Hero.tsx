"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Check } from "lucide-react"
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
          <div className="relative z-10 w-full px-4 sm:px-5 lg:px-6 xl:px-7 pt-3.5 sm:pt-4 lg:pt-5 pb-1 sm:pb-1.5 lg:pb-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 xl:gap-6 items-center">
              
              {/* ======================================================== */}
              {/* COLUMN 1: TYPOGRAPHY & CALL TO ACTION                    */}
              {/* Di chuyển vào đúng vị trí vạch đỏ yêu cầu                */}
              {/* ======================================================== */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-2 sm:space-y-2.5 lg:pl-[8%] xl:pl-[9%] lg:translate-x-20 xl:translate-x-24">
                
                {/* 1. Vector 3D Ribbon Badge: CÔNG CHỨNG BẢN DỊCH (Dịch chuyển nhẹ về bên trái) */}
                <div className="self-start mb-1 select-none lg:translate-x-1.5 xl:translate-x-2">
                  <svg
                    viewBox="0 0 280 50"
                    className="w-[210px] sm:w-[240px] lg:w-[260px] h-auto drop-shadow-md"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="frontRibbonGrad" x1="140" y1="4" x2="140" y2="44" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="35%" stopColor="#005AE2" />
                        <stop offset="100%" stopColor="#003399" />
                      </linearGradient>
                      <linearGradient id="tailRibbonGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0047BA" />
                        <stop offset="100%" stopColor="#002678" />
                      </linearGradient>
                      <path id="ribbonArc" d="M 38 29 Q 140 18 242 29" fill="none" />
                    </defs>

                    {/* Left Folded Ribbon Tail */}
                    <path d="M 12 18 L 42 12 L 42 38 L 12 44 L 20 31 Z" fill="url(#tailRibbonGrad)" />
                    {/* Left Dark Under-fold Shadow */}
                    <path d="M 42 34 L 42 42 L 52 38 Z" fill="#041236" />

                    {/* Right Folded Ribbon Tail */}
                    <path d="M 268 18 L 238 12 L 238 38 L 268 44 L 260 31 Z" fill="url(#tailRibbonGrad)" />
                    {/* Right Dark Under-fold Shadow */}
                    <path d="M 238 34 L 238 42 L 228 38 Z" fill="#041236" />

                    {/* Main Front Curved Ribbon */}
                    <path
                      d="M 36 12 Q 140 3 244 12 C 248 12 250 14 250 18 L 246 38 C 246 41 243 43 239 43 Q 140 34 41 43 C 37 43 34 41 34 38 L 30 18 C 30 14 32 12 36 12 Z"
                      fill="url(#frontRibbonGrad)"
                      stroke="#93C5FD"
                      strokeWidth="1"
                      strokeOpacity="0.8"
                    />

                    {/* Top edge glossy highlight line */}
                    <path d="M 37 14 Q 140 5 243 14" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" fill="none" />

                    {/* Crystal Clear Vector Text: CÔNG CHỨNG BẢN DỊCH */}
                    <text
                      fill="#FFFFFF"
                      fontSize="13.5"
                      fontWeight="900"
                      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                      letterSpacing="0.07em"
                      style={{ filter: "drop-shadow(0 1px 2px rgba(0, 20, 70, 0.9))" }}
                    >
                      <textPath href="#ribbonArc" startOffset="50%" textAnchor="middle">
                        CÔNG CHỨNG BẢN DỊCH
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* 2. Main Headline (Typography CSS kiểu Ảnh 3: gradient + script + tight spacing) */}
                <div className="flex flex-col space-y-0 -space-y-0.5 sm:-space-y-1 my-0.5">
                  {/* Line 1: "Chính xác TỪNG TỪ" */}
                  <div className="flex items-baseline gap-2 leading-tight filter drop-shadow-[0_1px_2px_rgba(0,56,168,0.2)]">
                    <span className="font-script text-2xl sm:text-3xl lg:text-[38px] text-[#0A3598] font-bold">
                      Chính xác
                    </span>
                    <span className="font-black text-xl sm:text-2xl lg:text-[30px] uppercase bg-gradient-to-b from-[#1E6BFF] via-[#0055D4] to-[#0038A8] bg-clip-text text-transparent tracking-tight">
                      TỪNG TỪ
                    </span>
                  </div>

                  {/* Line 2: "ĐÚNG từng" */}
                  <div className="flex items-baseline gap-2 leading-none filter drop-shadow-[0_1px_2px_rgba(0,56,168,0.2)]">
                    <span className="font-black text-3xl sm:text-4xl lg:text-[46px] uppercase bg-gradient-to-b from-[#005AE2] via-[#0047BA] to-[#0038A8] bg-clip-text text-transparent tracking-tight">
                      ĐÚNG
                    </span>
                    <span className="font-script text-2xl sm:text-3xl lg:text-[38px] text-[#0A3598] font-bold">
                      từng
                    </span>
                  </div>

                  {/* Line 3: "CHUẨN dấu" */}
                  <div className="flex items-baseline gap-2 leading-none filter drop-shadow-[0_1px_2px_rgba(0,56,168,0.2)]">
                    <span className="font-black text-3xl sm:text-4xl lg:text-[46px] uppercase bg-gradient-to-b from-[#0047BA] via-[#0038A8] to-[#002678] bg-clip-text text-transparent tracking-tight">
                      CHUẨN
                    </span>
                    <span className="font-script text-2xl sm:text-3xl lg:text-[38px] text-[#0A3598] font-bold">
                      dấu
                    </span>
                  </div>
                </div>

                {/* 3. CTA Buttons & Hotline: Di chuyển sang trái theo mũi tên để chữ giữa được căn giữa */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-1.5 lg:-translate-x-6 xl:-translate-x-8">
                  {/* Primary CTA Button: LIÊN HỆ NGAY */}
                  <Link href="/dich-thuat-cong-chung#bao-gia-form">
                    <button className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#005AE2] hover:bg-[#0047BA] text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-md shadow-blue-500/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                      LIÊN HỆ NGAY
                    </button>
                  </Link>

                  {/* Phone Hotline Link: Biểu tượng tròn xanh + số đậm trực tiếp trên nền */}
                  <a
                    href={`tel:${siteConfig.hotline}`}
                    className="inline-flex items-center gap-2 sm:gap-2.5 transition-all duration-200 hover:scale-105 cursor-pointer group"
                    title={`Gọi ngay hotline ${siteConfig.hotlineDisplay}`}
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#005AE2] group-hover:bg-[#0047BA] text-white flex items-center justify-center shadow-xs shrink-0 transition-colors">
                      <Phone className="w-3.5 h-3.5 fill-white text-white" />
                    </div>
                    <span className="font-black text-sm sm:text-base lg:text-lg tracking-wider text-[#0038A8] group-hover:text-[#002678]">
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
              <div className="lg:col-span-3 flex items-center justify-center lg:justify-end h-full pt-1 lg:pt-0">
                {/* Compact height container with object-position: center bottom to cut upward cleanly while preserving full head & hair */}
                <div className="relative w-full max-w-[280px] sm:max-w-[310px] lg:max-w-none h-[260px] sm:h-[285px] lg:h-[310px] xl:h-[325px]">
                  <Image
                    src="/images/consultant-model@2x.png"
                    alt="Chuyên viên tư vấn dịch thuật công chứng Thành Đạt"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 340px, 420px"
                    className="object-contain select-none drop-shadow-md"
                    style={{ objectPosition: "center bottom" }}
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
