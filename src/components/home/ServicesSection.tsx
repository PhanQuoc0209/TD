"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"

/**
 * Section: CÁC LOẠI HÌNH DỊCH THUẬT CÔNG CHỨNG PHỔ BIẾN TẠI THÀNH ĐẠT
 * Designed exactly matching user reference image:
 * 1. Title on 1 single line (synchronized font, no wrapping of "BIẾN"):
 *    - Line 1: CÁC LOẠI HÌNH DỊCH THUẬT CÔNG CHỨNG PHỔ BIẾN (Navy #072B6A)
 *    - Line 2: TẠI THÀNH ĐẠT (Royal Blue #0066FF)
 * 2. 3 Cards with high-resolution public stock photos:
 *    - HỒ SƠ DU HỌC VÀ VISA (/images/service-visa-clean.jpg)
 *    - GIẤY TỜ CÁ NHÂN (/images/service-personal-clean-cropped.jpg)
 *    - GIẤY TỜ PHÁP LÝ (/images/service-legal-clean.jpg)
 * 3. "Xem tất cả" button navigates to /dich-thuat-cong-chung
 */
export function ServicesSection() {
  const popularServices = [
    {
      id: "du-hoc-visa",
      title: "HỒ SƠ DU HỌC VÀ VISA",
      image: "/images/service-du-hoc-visa-user.jpg",
      description:
        "Dịch thuật công chứng hộ chiếu, bằng cấp, bảng điểm, giấy khai sinh giúp hoàn thiện hồ sơ du học và xin visa",
      href: "/dich-thuat-cong-chung"
    },
    {
      id: "giay-to-ca-nhan",
      title: "GIẤY TỜ CÁ NHÂN",
      image: "/images/service-giay-to-ca-nhan-user.jpg",
      description:
        "Dịch chứng minh nhân dân, hộ khẩu, giấy kết hôn, khai sinh, các giấy tờ tùy thân phục vụ thủ tục hành chính trong",
      href: "/dich-thuat-cong-chung"
    },
    {
      id: "giay-to-phap-ly",
      title: "GIẤY TỜ PHÁP LÝ",
      image: "/images/service-phap-ly-clean.jpg",
      description:
        "Chuyển ngữ hợp đồng, giấy ủy quyền, bản án, quyết định tòa án đảm bảo pháp lý rõ ràng, đúng ngôn ngữ chuyên",
      href: "/dich-thuat-cong-chung"
    }
  ]

  return (
    <section id="dich-vu-pho-bien" className="pt-10 sm:pt-14 pb-14 sm:pb-20 bg-[#F4F8FD] border-b border-blue-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Synchronized web typography on 1 line */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] xl:text-[32px] font-extrabold text-[#072B6A] tracking-tight uppercase md:whitespace-nowrap">
            CÁC LOẠI HÌNH DỊCH THUẬT CÔNG CHỨNG PHỔ BIẾN
          </h2>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-extrabold text-[#0066FF] tracking-tight uppercase mt-1 sm:mt-1.5">
            TẠI THÀNH ĐẠT
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 max-w-3xl mx-auto">
            Thành Đạt cung cấp dịch vụ dịch thuật công chứng cho nhiều loại giấy tờ quan trọng như hồ sơ du học, visa, giấy tờ cá nhân và tài liệu pháp lý, đảm bảo nhanh chóng, chính xác và hợp pháp.
          </p>
        </div>

        {/* 3 Cards Grid with ultra-sharp public stock photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {popularServices.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
            >
              {/* Card Top: High-Res Public Cover Photo */}
              <div className="relative w-full aspect-[314/206] overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                />
              </div>

              {/* Card Bottom: Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                <div>
                  {/* Icon + Title */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <BookOpen className="w-5 h-5 text-[#0066FF] shrink-0" />
                    <h3 className="font-extrabold text-base sm:text-lg text-[#072B6A] uppercase tracking-wide group-hover:text-[#0066FF] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Action Button: When clicked, navigates to /dich-thuat-cong-chung */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/dich-thuat-cong-chung"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-[#005AE2] hover:bg-[#0047BA] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
          >
            <span>Xem tất cả dịch vụ chuyên ngành &amp; Hợp pháp hóa lãnh sự</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
