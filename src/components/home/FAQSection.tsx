"use client"

import React, { useState } from "react"
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react"
import { siteConfig } from "@/config/site"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [filter, setFilter] = useState<string>("all")

  const filteredFaqs = filter === "all"
    ? siteConfig.faqs
    : siteConfig.faqs.filter((f) => f.category === filter)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Giải đáp thắc mắc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
            FAQ – Khách Hàng Thường Quan Tâm Về Dịch Vụ
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Tất cả những thắc mắc thường gặp về thủ tục dịch thuật công chứng tư pháp, thời gian lấy hồ sơ và chi phí thực hiện.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-[#2563EB] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Tất cả câu hỏi
          </button>
          <button
            onClick={() => setFilter("quy-trinh")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "quy-trinh"
                ? "bg-[#2563EB] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Quy trình & Tiến độ
          </button>
          <button
            onClick={() => setFilter("gia-ca")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "gia-ca"
                ? "bg-[#2563EB] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Chi phí & Báo giá
          </button>
          <button
            onClick={() => setFilter("dia-phuong")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === "dia-phuong"
                ? "bg-[#2563EB] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Hà Nội & Quảng Ninh
          </button>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white transition-all shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-blue-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#172554]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-600 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Direct consultation callout */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-3">
          <p className="font-bold text-[#172554] text-sm sm:text-base">
            Bạn có câu hỏi riêng về trường hợp hồ sơ đặc biệt của mình?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href={`tel:${siteConfig.hotline}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Gọi tư vấn: {siteConfig.hotlineDisplay}</span>
            </a>
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0068FF] text-white font-bold text-xs hover:bg-blue-600 transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat Zalo giải đáp ngay</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
