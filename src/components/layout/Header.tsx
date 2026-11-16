"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  Search,
  Menu,
  X,
  ArrowRight,
  Phone,
  MessageCircle
} from "lucide-react"
import { siteConfig } from "@/config/site"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentLang, setCurrentLang] = useState<"VI" | "EN">("VI")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  // Exact navigation menu items matching reference in Image 2
  const navItems = [
    {
      label: "TRANG CHỦ",
      href: "/",
    },
    {
      label: "VỀ CHÚNG TÔI",
      href: "/gioi-thieu",
      hasDropdown: true,
      children: [
        { label: "Giới thiệu tổng quan", href: "/gioi-thieu" },
        { label: "Năng lực & Pháp lý tư pháp", href: "/gioi-thieu#nang-luc" },
        { label: "Đội ngũ chuyên gia dịch giả", href: "/gioi-thieu#doi-ngu" },
        { label: "Trụ sở Hà Nội & CN Quảng Ninh", href: "/lien-he" },
      ],
    },
    {
      label: "DỊCH THUẬT",
      href: "/dich-thuat-cong-chung",
      hasDropdown: true,
      badge: {
        text: "HOT",
        color: "bg-[#DC2626]",
        arrowColor: "border-t-[#DC2626]",
      },
      children: [
        { label: "Dịch thuật công chứng lấy ngay (Tư pháp)", href: "/dich-thuat-cong-chung" },
        { label: "Hồ sơ du học & Visa quốc tế", href: "/dich-vu-dich-thuat#du-hoc-visa" },
        { label: "Tài liệu doanh nghiệp & Hợp đồng", href: "/dich-vu-dich-thuat#doanh-nghiep-hop-dong" },
        { label: "Dịch thuật chuyên ngành kỹ thuật & y tế", href: "/dich-vu-dich-thuat#chuyen-nganh-chuyen-sau" },
        { label: "Hợp pháp hóa & Chứng nhận lãnh sự", href: "/dich-vu-dich-thuat#hop-phap-hoa-lanh-su" },
      ],
    },
    {
      label: "PHIÊN DỊCH",
      href: "/dich-vu-dich-thuat#phien-dich-su-kien",
      hasDropdown: true,
      badge: {
        text: "NEWS",
        color: "bg-[#0C66FF]",
        arrowColor: "border-t-[#0C66FF]",
      },
      children: [
        { label: "Phiên dịch hội thảo & Cabin", href: "/dich-vu-dich-thuat#phien-dich-su-kien" },
        { label: "Phiên dịch đàm phán thương mại", href: "/dich-vu-dich-thuat#phien-dich-su-kien" },
        { label: "Phiên dịch tháp tùng đoàn công tác", href: "/dich-vu-dich-thuat#phien-dich-su-kien" },
        { label: "Phiên dịch chuyển giao công nghệ nhà máy", href: "/dich-vu-dich-thuat#phien-dich-su-kien" },
      ],
    },
    {
      label: "DỊCH VỤ KHÁC",
      href: "/dich-vu-dich-thuat",
      hasDropdown: true,
      children: [
        { label: "Hợp pháp hóa lãnh sự Bộ Ngoại Giao", href: "/dich-vu-dich-thuat#hop-phap-hoa-lanh-su" },
        { label: "Sao y bản chính & Công chứng tư pháp", href: "/dich-thuat-cong-chung#bang-gia" },
        { label: "Dịch thuật lấy gấp trong 4 - 8 tiếng", href: "/dich-thuat-cong-chung" },
        { label: "Dịch thuật công chứng tại Quảng Ninh", href: "/dich-thuat-cong-chung-quang-ninh" },
        { label: "Dịch thuật công chứng tại Hà Nội", href: "/dich-thuat-cong-chung-ha-noi" },
      ],
    },
    {
      label: "CASE STUDY",
      href: "/tin-tuc",
      hasDropdown: true,
      children: [
        { label: "Hồ sơ xin visa du học Mỹ, Úc, Hàn, Nhật", href: "/tin-tuc/huong-dan-chuan-bi-ho-so-dich-thuat-du-hoc-xin-visa" },
        { label: "Dự án doanh nghiệp FDI & Xuất nhập khẩu", href: "/tin-tuc/hop-phap-hoa-lanh-su-giay-to-doanh-nghiep-xuat-nhap-khau" },
        { label: "Dự án dịch thuật thầu & mỏ than Quảng Ninh", href: "/dich-thuat-cong-chung-quang-ninh" },
      ],
    },
    {
      label: "TIN TỨC",
      href: "/tin-tuc",
    },
  ]

  return (
    <header className="w-full z-50 sticky top-0 transition-all duration-300">
      {/* Main Navbar - Designed similarly to Image 2: Vạn Tín Style with THANH DAT ("như hộp bóng nổi lên có line") */}
      <div
        className={`w-full bg-white shadow-md border-b border-slate-200/90 transition-all duration-200 ${
          isScrolled
            ? "py-2"
            : "py-2.5 sm:py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity (Vạn Tín Style: THANH DAT) */}
          <Link href="/" className="flex flex-col items-start group shrink-0" title="Dịch Thuật Thành Đạt (THANH DAT)">
            {/* Aerodynamic Wave Icon like Vạn Tín */}
            <svg
              width="100"
              height="22"
              viewBox="0 0 110 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-105 transition-transform duration-200"
            >
              <path d="M4 14C24 6 52 4 104 2C78 6 52 10 32 14C20 16 10 16 4 14Z" fill="url(#wave1)" />
              <path d="M12 18C34 11 64 9 108 7C84 11 58 15 38 19C26 21 18 20 12 18Z" fill="url(#wave2)" />
              <path d="M22 22C44 16 74 14 106 13C86 16 62 20 44 23C34 25 28 24 22 22Z" fill="url(#wave3)" />
              <defs>
                <linearGradient id="wave1" x1="4" y1="2" x2="104" y2="14" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00A3E0" />
                  <stop offset="1" stopColor="#0066FF" />
                </linearGradient>
                <linearGradient id="wave2" x1="12" y1="7" x2="108" y2="19" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0072CE" />
                  <stop offset="1" stopColor="#0047BA" />
                </linearGradient>
                <linearGradient id="wave3" x1="22" y1="13" x2="106" y2="23" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0052CC" />
                  <stop offset="1" stopColor="#003399" />
                </linearGradient>
              </defs>
            </svg>

            {/* Brand Wordmark: THANH DAT */}
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0066FF] leading-none mt-0.5">
              THANH DAT
            </span>

            {/* Slogan */}
            <span className="text-[9px] sm:text-[10px] font-bold text-[#00A3E0] tracking-wide mt-0.5">
              Think Global - Be Global
            </span>
          </Link>

          {/* Desktop Navigation Bar (Exact Layout from Image 2) */}
          <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-7">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {/* Badge on top of menu item (HOT / NEWS) with downward arrow tail */}
                    {item.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none z-10 flex flex-col items-center">
                        <span
                          className={`text-[9px] font-black text-white px-2 py-0.5 rounded-sm shadow-xs tracking-wider leading-none ${item.badge.color}`}
                        >
                          {item.badge.text}
                        </span>
                        {/* Triangle arrow tip pointing down */}
                        <div
                          className={`w-0 h-0 border-x-4 border-x-transparent border-t-4 ${item.badge.arrowColor}`}
                        ></div>
                      </div>
                    )}

                    <Link
                      href={item.href}
                      className={`text-[13px] 2xl:text-[14px] font-bold tracking-wider flex items-center gap-1 transition-colors uppercase cursor-pointer ${
                        isActive
                          ? "text-[#0C66FF]"
                          : "text-[#172554] hover:text-[#0C66FF]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-500" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 transition-all duration-200 z-50 ${
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-100">
                        {item.label}
                      </div>
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between px-3 py-2.5 text-xs text-slate-700 hover:text-[#0C66FF] hover:bg-blue-50 rounded-lg transition-colors group/child"
                        >
                          <span className="font-semibold">{child.label}</span>
                          <ArrowRight className="w-3 h-3 text-[#0C66FF] opacity-0 group-hover/child:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] 2xl:text-[14px] font-bold tracking-wider transition-colors uppercase ${
                    isActive
                      ? "text-[#0C66FF]"
                      : "text-[#172554] hover:text-[#0C66FF]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* Language Switcher with Flag (🇺🇸 EN / 🇻🇳 VI) */}
            <div className="relative group pl-1">
              <button
                onClick={() => setCurrentLang(currentLang === "VI" ? "EN" : "VI")}
                className="flex items-center gap-1.5 text-xs font-bold text-[#172554] hover:text-[#0C66FF] py-1 px-2 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                title="Chuyển đổi ngôn ngữ / Switch language"
              >
                <span className="text-sm">
                  {currentLang === "VI" ? "🇻🇳" : "🇺🇸"}
                </span>
                <span>{currentLang === "VI" ? "VI" : "EN"}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
            </div>

            {/* Search Icon Trigger */}
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-1.5 text-[#172554] hover:text-[#0C66FF] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Tìm kiếm dịch vụ"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Search popover */}
              {showSearch && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm dịch vụ, ngôn ngữ..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0C66FF]"
                      autoFocus
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                  {searchQuery.trim() && (
                    <div className="mt-2 text-xs space-y-1">
                      <Link
                        href={`/ngon-ngu?q=${encodeURIComponent(searchQuery)}`}
                        onClick={() => setShowSearch(false)}
                        className="block px-2 py-1 hover:bg-blue-50 text-blue-600 rounded"
                      >
                        Tìm trong Ngôn ngữ: &quot;{searchQuery}&quot;
                      </Link>
                      <Link
                        href={`/dich-vu-dich-thuat`}
                        onClick={() => setShowSearch(false)}
                        className="block px-2 py-1 hover:bg-blue-50 text-blue-600 rounded"
                      >
                        Xem tất cả dịch vụ dịch thuật
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Right Controls: Search, Call & Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`tel:${siteConfig.hotline}`}
              className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs"
              aria-label="Gọi hotline"
            >
              <Phone className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0C66FF] hover:bg-slate-100 transition-colors"
              aria-label="Mở menu điều hướng"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 top-[65px] z-50 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-h-[85vh] overflow-y-auto border-b border-slate-200 shadow-2xl p-5 space-y-4">
            {/* Search Input on mobile */}
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm dịch vụ, ngôn ngữ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#0C66FF]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Menu Links */}
            <div className="space-y-1 pb-3 border-b border-slate-100">
              {navItems.map((item) => (
                <div key={item.label} className="py-0.5">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold uppercase transition-colors ${
                        pathname === item.href
                          ? "bg-blue-50 text-[#0C66FF]"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-black text-white px-1.5 py-0.5 rounded leading-none ${item.badge.color}`}
                        >
                          {item.badge.text}
                        </span>
                      )}
                    </Link>
                  </div>

                  {item.children && (
                    <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-blue-100 ml-4 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMobileMenu}
                          className="block py-1.5 text-xs text-slate-600 hover:text-[#0C66FF] font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Language and Quick Actions */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-600">
                <span>Ngôn ngữ hiển thị:</span>
                <button
                  onClick={() => setCurrentLang(currentLang === "VI" ? "EN" : "VI")}
                  className="px-3 py-1 bg-slate-100 rounded-lg text-slate-800 font-bold flex items-center gap-1.5"
                >
                  <span>{currentLang === "VI" ? "🇻🇳 Tiếng Việt" : "🇺🇸 English"}</span>
                </button>
              </div>

              <Link
                href="/#bao-gia"
                onClick={closeMobileMenu}
                className="w-full block text-center py-2.5 bg-[#0C66FF] text-white rounded-lg font-bold text-sm shadow-md"
              >
                Nhận Báo Giá Trong 10 Phút
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${siteConfig.hotline}`}
                  className="flex items-center justify-center gap-2 py-2 px-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg font-bold text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{siteConfig.hotlineDisplay}</span>
                </a>
                <a
                  href={siteConfig.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 bg-[#0068FF] text-white rounded-lg font-bold text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat Zalo</span>
                </a>
              </div>
            </div>

            {/* Office Summary */}
            <div className="p-3 bg-blue-50/70 rounded-xl text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-[#172554]">Hà Nội: 168 Cầu Giấy, Q. Cầu Giấy</p>
              <p className="font-semibold text-[#172554]">Quảng Ninh: 126 Lê Thánh Tông, TP. Hạ Long</p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
