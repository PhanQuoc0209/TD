"use client"

import React from "react"
import {
  FileEdit,
  Receipt,
  Network,
  CheckCircle2,
  FileSearch,
  Handshake
} from "lucide-react"

/**
 * Section: QUY TRÌNH DỊCH THUẬT CÔNG CHỨNG CHUYÊN NGHIỆP
 * Designed exactly matching user reference Image 1:
 * - 6 steps in 2 columns (md/lg)
 * - Step 1 and Step 6 highlighted in solid royal blue (#0066FF) with white circular icon
 * - Steps 2, 3, 4, 5 with blue outline circular icon and blue title
 */
export function ProcessSection() {
  const steps = [
    {
      num: "BƯỚC 1: TIẾP NHẬN",
      desc: "Thành Đạt tiếp nhận thông tin và yêu cầu của khách hàng từ các kênh 24/7",
      icon: FileEdit,
      isHighlighted: true
    },
    {
      num: "BƯỚC 2: TƯ VẤN DỊCH VỤ",
      desc: "Chuyên gia Thành Đạt phân tích và đề xuất giải pháp dịch vụ tối ưu cho nhu cầu khách hàng.",
      icon: Receipt,
      isHighlighted: false
    },
    {
      num: "BƯỚC 3: KÝ KẾT HỢP ĐỒNG",
      desc: "Thành Đạt và khách hàng ký cam kết bảo mật, hợp đồng sau khi thống nhất phương án.",
      icon: Network,
      isHighlighted: false
    },
    {
      num: "BƯỚC 4: CHUẨN BỊ DỰ ÁN",
      desc: "Thành Đạt phân bổ đội ngũ chuyên biệt và chuẩn bị hồ sơ kỹ thuật, thuật ngữ, tiến độ dự án.",
      icon: CheckCircle2,
      isHighlighted: false
    },
    {
      num: "BƯỚC 5: TRIỂN KHAI",
      desc: "Thành Đạt triển khai dự án qua dịch thuật, hiệu đính, QC, thẩm định và rà soát linh động.",
      icon: FileSearch,
      isHighlighted: false
    },
    {
      num: "BƯỚC 6: BÀN GIAO",
      desc: "Thành Đạt thực hiện bàn giao tài liệu theo thống nhất, và thực hiện bảo hành chất lượng khi phát sinh.",
      icon: Handshake,
      isHighlighted: true
    }
  ]

  return (
    <section id="quy-trinh" className="py-14 sm:py-20 bg-[#F4F8FD] border-b border-blue-100/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] xl:text-[30px] font-extrabold text-[#072B6A] tracking-tight uppercase">
            QUY TRÌNH DỊCH THUẬT CÔNG CHỨNG CHUYÊN NGHIỆP
          </h2>
        </div>

        {/* 6 Steps Grid: 2 columns on md/lg, matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7">
          {steps.map((s, idx) => {
            const Icon = s.icon
            if (s.isHighlighted) {
              return (
                <div
                  key={idx}
                  className="bg-[#0066FF] text-white rounded-2xl shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_26px_rgba(0,102,255,0.5)] p-5 sm:p-6 flex items-start gap-4 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-full bg-white text-[#0066FF] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-tight text-white">
                      {s.num}
                    </h3>
                    <p className="text-blue-100 text-xs sm:text-sm mt-1.5 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              )
            }

            return (
              <div
                key={idx}
                className="bg-transparent hover:bg-white/80 rounded-2xl p-5 sm:p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:border hover:border-blue-200 group"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#0066FF] text-[#0066FF] bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform mt-0.5 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-tight text-[#0066FF]">
                    {s.num}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
