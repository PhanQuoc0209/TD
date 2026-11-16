"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Globe2, Search, ArrowRight, ChevronRight, CheckCircle2, Send } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export default function NgonNguPage() {
  const [search, setSearch] = useState("")
  const [filterLevel, setFilterLevel] = useState<string>("all")

  const filteredLanguages = siteConfig.languages.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.nativeName.toLowerCase().includes(search.toLowerCase()) ||
      l.description.toLowerCase().includes(search.toLowerCase())

    const matchesFilter = filterLevel === "all" || l.level === filterLevel

    return matchesSearch && matchesFilter
  })

  return (
    <div className="bg-[#F5F8FF] min-h-screen">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#2563EB] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-blue-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">Ngôn ngữ hỗ trợ</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Globe2 className="w-3.5 h-3.5 text-amber-300" />
              <span>Mạng Lưới Dịch Giả Quốc Tế</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Danh Mục Hơn 50+ Ngôn Ngữ Dịch Thuật & Công Chứng
            </h1>
            <p className="text-blue-100 text-base sm:text-lg mt-3 leading-relaxed">
              Dịch thuật Thành Đạt hỗ trợ chuyển ngữ hai chiều giữa tiếng Việt và hơn 50 thứ tiếng trên thế giới, đảm bảo chuẩn xác về thuật ngữ pháp lý và văn hóa bản địa.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="py-8 bg-white border-b border-slate-200/80 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm tên ngôn ngữ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Level filter tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setFilterLevel("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  filterLevel === "all"
                    ? "bg-[#2563EB] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Tất cả ({siteConfig.languages.length})
              </button>
              <button
                onClick={() => setFilterLevel("PhoBien")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  filterLevel === "PhoBien"
                    ? "bg-[#2563EB] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Phổ biến nhất
              </button>
              <button
                onClick={() => setFilterLevel("ChuyenSau")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  filterLevel === "ChuyenSau"
                    ? "bg-[#2563EB] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Châu Âu & Chuyên sâu
              </button>
              <button
                onClick={() => setFilterLevel("Hiem")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  filterLevel === "Hiem"
                    ? "bg-[#2563EB] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Ngôn ngữ hiếm
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-14 sm:py-18 bg-[#F5F8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredLanguages.map((lang) => (
              <div
                key={lang.code}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{lang.flag}</span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        lang.level === "PhoBien"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : lang.level === "ChuyenSau"
                          ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {lang.level === "PhoBien"
                        ? "Phổ biến"
                        : lang.level === "ChuyenSau"
                        ? "Chuyên sâu"
                        : "Ngôn ngữ hiếm"}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-[#172554] group-hover:text-[#2563EB] transition-colors">
                    {lang.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-semibold block mb-3">
                    {lang.nativeName}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {lang.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Có công chứng</span>
                  </span>
                  <Link
                    href="/#bao-gia"
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-0.5"
                  >
                    <span>Báo giá</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredLanguages.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <Globe2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-bold text-slate-700 text-lg">Không tìm thấy ngôn ngữ phù hợp</h3>
              <p className="text-xs text-slate-500 mt-1">
                Thành Đạt nhận dịch hơn 50 ngôn ngữ. Vui lòng liên hệ trực tiếp qua Hotline hoặc Zalo để được hỗ trợ cụ thể.
              </p>
              <div className="mt-4">
                <Button onClick={() => { setSearch(""); setFilterLevel("all"); }} variant="secondary">
                  Xem lại tất cả ngôn ngữ
                </Button>
              </div>
            </div>
          )}

          {/* Quick Consultation Banner */}
          <div className="mt-14 p-8 bg-gradient-to-r from-[#172554] to-[#1E3A8A] rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">
                Cần dịch cặp ngôn ngữ hiếm hoặc kết hợp đa ngôn ngữ?
              </h3>
              <p className="text-blue-200 text-sm">
                Chúng tôi có mạng lưới chuyên gia ngôn ngữ phủ sóng khắp các châu lục.
              </p>
            </div>
            <Link href="/#bao-gia" className="shrink-0">
              <Button size="lg" className="font-bold shadow-md">
                <Send className="w-4 h-4 mr-1" />
                <span>Gửi Yêu Cầu Báo Giá</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
