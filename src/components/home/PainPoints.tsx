"use client"

import React from "react"
import {
  CreditCard,
  Clock,
  FileText,
  Headphones,
  ShieldAlert,
  Headset
} from "lucide-react"

/**
 * Section: KHÓ KHĂN CỦA KHÁCH HÀNG KHI TÌM KIẾM ĐƠN VỊ DỊCH CÔNG CHỨNG
 * Requirements per Image 2 & user feedback:
 * 1. Heading matching Image 1: on 1 single line, font style bold navy #072B6A
 * 2. 6 Cards Grid:
 *    - Không bo góc tròn (rounded-none)
 *    - Có box và line rõ (border border-slate-300, shadow-md)
 *    - Blue circular icon on left, vertically centered with text
 *    - Bold uppercase blue title + problem description
 * 3. Bottom note: THÀNH ĐẠT (replaces THANH DAT)
 */
export function PainPoints() {
  const painPoints = [
    {
      icon: CreditCard,
      title: "CHI PHÍ MẬP MỜ",
      description: "Bảng giá dịch vụ không rõ ràng, dễ phát sinh chi phí ngoài dự kiến."
    },
    {
      icon: Clock,
      title: "XỬ LÝ CHẬM",
      description: "Chậm trễ hoàn thành công việc theo đúng tiến độ đã thỏa thuận."
    },
    {
      icon: FileText,
      title: "THỦ TỤC PHỨC TẠP",
      description: "Khách hàng bối rối vì thiếu hướng dẫn về quy trình."
    },
    {
      icon: Headphones,
      title: "TƯ VẤN KÉM",
      description: "Nhân sự thiếu kinh nghiệm, thái độ tư vấn không thân thiện, trả lời khách hàng chậm."
    },
    {
      icon: ShieldAlert,
      title: "BẢO MẬT KÉM",
      description: "Thông tin của khách hàng không bị lộ ra ngoài, không có phương án bảo mật triệt để."
    },
    {
      icon: Headset,
      title: "KHÔNG UY TÍN",
      description: "Quá nhiều đơn vị quảng cáo dịch công chứng, chất lượng chênh lệch, khó chọn."
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Image 1: On 1 single line, font style bold navy */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] xl:text-[30px] font-extrabold text-[#072B6A] tracking-tight uppercase md:whitespace-nowrap">
            KHÓ KHĂN CỦA KHÁCH HÀNG KHI TÌM KIẾM ĐƠN VỊ DỊCH CÔNG CHỨNG
          </h2>
        </div>

        {/* 6 Cards Grid (2 rows x 3 columns) matching Image 2: Box & line rõ, rounded-none */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {painPoints.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-none p-5 sm:p-6 border border-slate-300 shadow-md hover:shadow-lg hover:border-blue-400 transition-all duration-200 flex items-center gap-4 sm:gap-5"
              >
                {/* Round Blue Icon on LEFT */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />
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

        {/* Bottom Centered Summary Note matching Image 2 with brand THÀNH ĐẠT */}
        <div className="mt-10 sm:mt-12 text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-[#0066FF] font-bold">THÀNH ĐẠT</strong> cung cấp dịch vụ dịch thuật công chứng cho nhiều loại giấy tờ quan trọng như hồ sơ du học, visa, giấy tờ cá nhân và tài liệu pháp lý, đảm bảo nhanh chóng, chính xác và hợp pháp.
          </p>
        </div>

      </div>
    </section>
  )
}
