"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, MessageSquare } from "lucide-react"
import { siteConfig } from "@/config/site"

export interface CompanyIntroProps {
  title?: string
  paragraphs?: string[]
}

/**
 * Section: DỊCH VỤ DỊCH THUẬT CÔNG CHỨNG TẠI Thành Đạt
 * Requirements:
 * 1. Title centered: DỊCH VỤ DỊCH THUẬT CÔNG CHỨNG TẠI Thành Đạt
 * 2. Left: Office photo (old company logo completely removed, ultra-sharp)
 * 3. Right: 3 balanced paragraphs (equal height with photo, no extra clutter)
 * 4. Bottom: Horizontal full-width contact bar matching Image 4
 */
export function CompanyIntro({
  title = "DỊCH VỤ DỊCH THUẬT CÔNG CHỨNG TẠI THANH DAT",
  paragraphs
}: CompanyIntroProps) {
  return (
    <section className="pt-0 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Image 2 */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-[#0B286E] tracking-tight uppercase">
            {title}
          </h2>
          <div className="w-16 h-1 bg-[#0066FF] mx-auto mt-3 rounded-full" />
        </div>

        {/* 2-Column Content: Photo LEFT, Text RIGHT (Balanced height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Clean, sharp office photo with old company name removed */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-slate-200/90 aspect-[442/344] bg-slate-100 group">
              <Image
                src="/images/office-thanhdat-clean.jpg"
                alt="Văn phòng dịch thuật công chứng THANH DAT"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Balanced editable paragraphs (matching height with photo) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            {paragraphs && paragraphs.length > 0 ? (
              paragraphs.map((p, i) => (
                <p key={i} className="text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))
            ) : (
              <>
                {/* Paragraph 1 */}
                <p className="text-slate-700 leading-relaxed">
                  Với hơn <strong className="text-[#0B286E] font-bold">10.000 tài liệu</strong> đã được dịch và công chứng mỗi năm,{" "}
                  <strong className="text-[#0066FF] font-bold">THANH DAT</strong> là một trong những đơn vị hàng đầu trong lĩnh vực{" "}
                  <Link href="/dich-thuat-cong-chung" className="text-[#0066FF] font-bold hover:underline">
                    dịch thuật công chứng
                  </Link>{" "}
                  tại Việt Nam.
                </p>

                {/* Paragraph 2 */}
                <p className="text-slate-700 leading-relaxed">
                  Chúng tôi cung cấp dịch vụ dịch thuật và công chứng tài liệu đa ngôn ngữ như:{" "}
                  <strong className="text-slate-900">Tiếng Anh, Trung, Nhật, Hàn, Đức, Pháp, Tây Ban Nha,...</strong> với cam kết{" "}
                  <span className="text-[#0B286E] font-semibold">chính xác – hợp pháp – đúng thời hạn</span>.
                </p>

                {/* Paragraph 3 */}
                <p className="text-slate-700 leading-relaxed">
                  Đội ngũ biên dịch viên của THANH DAT đều có <strong className="text-slate-900">chứng chỉ hành nghề</strong>, nhiều năm kinh nghiệm và am hiểu sâu sắc về ngôn ngữ, pháp lý, hành chính. Chúng tôi đã hỗ trợ thành công cho{" "}
                  <strong className="text-[#0B286E] font-bold">hơn 15.000 khách hàng</strong> cá nhân, doanh nghiệp và tổ chức trong và ngoài nước.
                </p>
              </>
            )}
          </div>

        </div>

      </div>

      {/* HORIZONTAL CONTACT TAB (Full-width Dark Navy Bar matching Image 4) */}
      <div className="w-full bg-[#002A72] py-4 sm:py-5 px-4 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3.5 sm:gap-6">
          {/* Button 1: TƯ VẤN MIỄN PHÍ */}
          <Link href="/#bao-gia">
            <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 text-[#0066FF] font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer border border-blue-200">
              <MessageSquare className="w-4 h-4 text-[#0066FF]" />
              <span>TƯ VẤN MIỄN PHÍ</span>
            </button>
          </Link>

          {/* Button 2: Hotline Dial */}
          <a
            href={`tel:${siteConfig.hotline}`}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 text-[#0066FF] font-black text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer border border-blue-200"
          >
            <Phone className="w-4 h-4 text-[#0066FF] fill-[#0066FF]" />
            <span>+84 (0) 862 455 569</span>
          </a>
        </div>
      </div>
    </section>
  )
}
