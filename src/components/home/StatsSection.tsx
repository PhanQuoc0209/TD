"use client"

import React from "react"

/**
 * Section: NHỮNG CON SỐ BIẾT NÓI TẠI THÀNH ĐẠT
 * Designed exactly matching user reference Image 2:
 * - 4 rounded-2xl cards with soft light blue background #DFECFD
 * - Large vibrant blue stat number (#0066FF)
 * - Dark blue label below
 */
export function StatsSection() {
  const stats = [
    {
      value: "10,000+",
      label: "dự án đã hoàn thành"
    },
    {
      value: "100+",
      label: "cặp ngôn ngữ hỗ trợ"
    },
    {
      value: "3,500+",
      label: "dịch giả chuyên nghiệp"
    },
    {
      value: "98%",
      label: "khách hàng hài lòng"
    }
  ]

  return (
    <section id="thong-ke" className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] xl:text-[30px] font-extrabold text-[#072B6A] tracking-tight uppercase">
            NHỮNG CON SỐ BIẾT NÓI TẠI THÀNH ĐẠT
          </h2>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#DFECFD] rounded-2xl p-6 sm:p-8 text-center border border-blue-200/80 shadow-xs hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:-translate-y-1 hover:bg-[#D4E6FD] transition-all duration-300 cursor-pointer"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0066FF] tracking-tight mb-1 sm:mb-2">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#072B6A]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
