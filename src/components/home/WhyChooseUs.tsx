"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Award,
  Users,
  Smile,
  Languages,
  ShieldCheck,
  Headphones
} from "lucide-react"

/**
 * Section: 6 LÝ DO BẠN NÊN CHỌN DỊCH VỤ DỊCH THUẬT CÔNG CHỨNG TẠI THÀNH ĐẠT
 * Designed exactly matching user reference Image 2:
 * 1. Top: Full-width / container CTA banner with background photo:
 *    "TƯ VẤN VIÊN CỦA CHÚNG TÔI TƯ VẤN CHI TIẾT VỀ DỊCH VỤ" + "LIÊN HỆ NGAY"
 * 2. Section Heading:
 *    - Line 1: 6 LÝ DO BẠN NÊN CHỌN DỊCH VỤ DỊCH THUẬT CÔNG CHỨNG (Navy)
 *    - Line 2: TẠI THÀNH ĐẠT (Royal Blue)
 * 3. 6 Cards Grid:
 *    - Box & line rõ ràng, rounded-none (góc vuông sắc nét)
 *    - Blue circle icon on left, title uppercase blue + description on right
 */
export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "KINH NGHIỆM LÂU NĂM",
      description: "Hơn 10 năm thực hiện hàng trăm dự án dịch thuật công chứng đa dạng thể loại."
    },
    {
      icon: Users,
      title: "ĐỘI NGŨ CHUYÊN NGHIỆP",
      description: "Biên dịch viên trình độ cao, am hiểu sâu sắc về các tài liệu mà khách hàng cung cấp."
    },
    {
      icon: Smile,
      title: "CHẤT LƯỢNG VƯỢT TRỘI",
      description: "Quy trình dịch bài bản, biên tập kỹ lưỡng, đảm bảo độ chính xác và phong cách nguyên tác."
    },
    {
      icon: Languages,
      title: "ĐA NGÔN NGỮ",
      description: "Hỗ trợ dịch nhiều ngôn ngữ phổ biến và hiếm, đáp ứng mọi nhu cầu quốc tế."
    },
    {
      icon: ShieldCheck,
      title: "BẢO MẬT CAO",
      description: "Cam kết bảo mật tuyệt đối mọi thông tin và tài liệu của khách hàng."
    },
    {
      icon: Headphones,
      title: "HỖ TRỢ TẬN TÂM",
      description: "Tư vấn nhiệt tình, phản hồi nhanh chóng 24/7 và đồng hành suốt quá trình."
    },
  ]

  return (
    <section className="w-full bg-white">
      {/* 1. Top CTA Banner matching Image 2 */}
      <div className="relative w-full overflow-hidden py-10 sm:py-14 bg-gradient-to-r from-[#0C2A66] via-[#0A255C] to-[#0A2E7A]">
        {/* Subtle background image overlay */}
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity pointer-events-none">
          <Image
            src="/images/service-legal-clean.jpg"
            alt="Tư vấn dịch thuật công chứng"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-5">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase leading-snug">
            TƯ VẤN VIÊN CỦA CHÚNG TÔI TƯ VẤN CHI TIẾT VỀ DỊCH VỤ
          </h3>

          <div>
            <Link href="/dich-thuat-cong-chung#bao-gia-form">
              <button className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                LIÊN HỆ NGAY
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. 6 Lý Do Bạn Nên Chọn... matching Image 2 */}
      <div className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading: Synchronized typography on 1 line */}
          <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] xl:text-[30px] font-extrabold text-[#072B6A] tracking-tight uppercase md:whitespace-nowrap">
              6 LÝ DO BẠN NÊN CHỌN DỊCH VỤ DỊCH THUẬT CÔNG CHỨNG
            </h2>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-extrabold text-[#0066FF] tracking-tight uppercase mt-1 sm:mt-1.5">
              TẠI THÀNH ĐẠT
            </div>
          </div>

          {/* 6 Cards Grid (2 rows x 3 columns) with box & line rõ, rounded-none */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {reasons.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-none p-5 sm:p-6 border border-slate-300 shadow-md hover:shadow-lg hover:border-blue-400 transition-all duration-200 flex items-center gap-4 sm:gap-5"
                >
                  {/* Round Blue Icon on LEFT */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>

                  {/* Content on RIGHT */}
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#0055D4] uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
