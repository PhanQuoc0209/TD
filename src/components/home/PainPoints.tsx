"use client"

import React from "react"
import {
  CreditCard,
  Clock,
  FileText,
  Headphones,
  ShieldAlert,
  Award
} from "lucide-react"

/**
 * Section: KHÓ KHĂN CỦA KHÁCH HÀNG KHI TÌM KIẾM ĐƠN VỊ DỊCH CÔNG CHỨNG
 * Designed exactly matching Image 5:
 * - Clean white cards with natural soft elevation / box-shadow ("phần nổi cho tự nhiên không như theo AI")
 * - Left: Round blue icon circle
 * - Right: Bold uppercase royal blue title + problem description
 * - Bottom: Clean centered summary note
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
      icon: Award,
      title: "KHÔNG UY TÍN",
      description: "Quá nhiều đơn vị quảng cáo dịch công chứng, chất lượng chênh lệch, khó chọn."
    },
  ]

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Image 5 */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B286E] tracking-tight uppercase">
            KHÓ KHĂN CỦA KHÁCH HÀNG KHI TÌM KIẾM ĐƠN VỊ DỊCH CÔNG CHỨNG
          </h2>
        </div>

        {/* 6 Cards Grid (2 rows x 3 columns) matching Image 5: Clean Natural Box Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {painPoints.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex items-start gap-4 sm:gap-5"
              >
                {/* Round Blue Icon on LEFT */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />
                </div>

                {/* Content on RIGHT */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#0047BA] uppercase tracking-wide">
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

        {/* Bottom Centered Summary Note matching Image 5 */}
        <div className="mt-10 sm:mt-12 text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-[#0066FF] font-bold">THANH DAT</strong> cung cấp dịch vụ dịch thuật công chứng cho nhiều loại giấy tờ quan trọng như hồ sơ du học, visa, giấy tờ cá nhân và tài liệu pháp lý, đảm bảo nhanh chóng, chính xác và hợp pháp.
          </p>
        </div>

      </div>
    </section>
  )
}
