"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Phone, MessageCircle, Send, ArrowUp } from "lucide-react"
import { siteConfig } from "@/config/site"

export function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Listen for scroll to show scroll to top
  React.useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", checkScroll)
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Floating Action Buttons (Right Bottom) */}
      <aside aria-label="Kênh liên hệ nhanh" className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Scroll To Top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:-translate-y-1 cursor-pointer"
            aria-label="Cuộn lên đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Quick Quotation Anchor Button */}
        <Link
          href="/dich-thuat-cong-chung#bao-gia-form"
          className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
        >
          <Send className="w-4 h-4" />
          <span>Báo giá trong 10 phút</span>
        </Link>

        {/* Zalo Floating Button */}
        <a
          href={siteConfig.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0068FF] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border-2 border-white"
          aria-label="Chat Zalo với tư vấn viên"
        >
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white"></div>
          <MessageCircle className="w-7 h-7" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:inline-block">
            Chat Zalo ngay
          </span>
        </a>

        {/* Phone Floating Button with Ripple Pulse Animation */}
        <a
          href={`tel:${siteConfig.hotline}`}
          className="pointer-events-auto group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border-2 border-white animate-pulse-subtle"
          aria-label="Gọi điện thoại tư vấn"
        >
          <Phone className="w-6 h-6 fill-white" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:inline-block">
            Gọi Hotline: {siteConfig.hotlineDisplay}
          </span>
        </a>
      </aside>

      {/* Mobile Fixed Bottom Quick Bar (Compact & non-obstructive) */}
      <nav aria-label="Thanh điều hướng liên hệ di động" className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-3 flex items-center justify-around md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
        <a
          href={`tel:${siteConfig.hotline}`}
          className="flex-1 flex flex-col items-center justify-center py-1 text-slate-800 hover:text-blue-600 font-semibold text-[11px]"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-0.5">
            <Phone className="w-3.5 h-3.5 fill-white" />
          </div>
          <span>Gọi Hotline</span>
        </a>

        <a
          href={siteConfig.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 text-slate-800 hover:text-blue-600 font-semibold text-[11px]"
        >
          <div className="w-7 h-7 rounded-full bg-[#0068FF] text-white flex items-center justify-center mb-0.5">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <span>Chat Zalo</span>
        </a>

        <Link
          href="/dich-thuat-cong-chung#bao-gia-form"
          className="flex-1 flex flex-col items-center justify-center py-1 text-slate-800 hover:text-blue-600 font-semibold text-[11px]"
        >
          <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center mb-0.5">
            <Send className="w-3.5 h-3.5 text-white" />
          </div>
          <span>Báo Giá Nhanh</span>
        </Link>
      </nav>
    </>
  )
}
