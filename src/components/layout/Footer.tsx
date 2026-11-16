import React from "react"
import Link from "next/link"
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ShieldCheck,
  Award,
  ChevronRight,
  ExternalLink,
  MessageCircle
} from "lucide-react"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="bg-[#172554] text-white pt-16 pb-12 border-t border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Credibility */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col items-start group">
              {/* Wave Icon */}
              <svg
                width="95"
                height="20"
                viewBox="0 0 110 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 14C24 6 52 4 104 2C78 6 52 10 32 14C20 16 10 16 4 14Z" fill="#38BDF8" />
                <path d="M12 18C34 11 64 9 108 7C84 11 58 15 38 19C26 21 18 20 12 18Z" fill="#60A5FA" />
                <path d="M22 22C44 16 74 14 106 13C86 16 62 20 44 23C34 25 28 24 22 22Z" fill="#93C5FD" />
              </svg>
              <div className="flex flex-col mt-0.5">
                <span className="text-xl font-black tracking-tight text-white">
                  THANH DAT
                </span>
                <span className="text-[10px] font-bold text-sky-400">
                  Think Global - Be Global
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed">
              Hệ thống dịch thuật công chứng tư pháp chuyên nghiệp hàng đầu tại Hà Nội và Quảng Ninh. Chuyên xử lý hồ sơ du học, visa định cư, hồ sơ thầu, giấy tờ doanh nghiệp và tài liệu đa ngôn ngữ.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-blue-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cam kết bảo mật tuyệt đối theo thỏa thuận NDA</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-blue-200">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dấu công chứng tư pháp có giá trị pháp lý 100%</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0068FF] text-white text-xs font-bold hover:bg-blue-600 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat Zalo Tư Vấn</span>
              </a>
              <a
                href={`tel:${siteConfig.hotline}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.hotlineDisplay}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Key Services */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 pb-2 border-b border-blue-900/80">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Dịch vụ nổi bật
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href="/dich-thuat-cong-chung"
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>Dịch thuật công chứng lấy ngay</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu-dich-thuat#du-hoc-visa"
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>Dịch hồ sơ du học & Visa quốc tế</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu-dich-thuat#doanh-nghiep-hop-dong"
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>Hồ sơ thầu & Hợp đồng kinh tế</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu-dich-thuat#chuyen-nganh-chuyen-sau"
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>Dịch thuật chuyên ngành kỹ thuật - y tế</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu-dich-thuat#hop-phap-hoa-lanh-su"
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>Hợp pháp hóa & Chứng nhận lãnh sự</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/ngon-ngu"
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>Dịch thuật hơn 50+ thứ tiếng</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Branch Locations & Regional Service */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 pb-2 border-b border-blue-900/80">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Văn phòng phục vụ
            </h3>
            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-900/60 space-y-1.5">
                <div className="font-bold text-white text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Trụ sở Hà Nội:</span>
                </div>
                <p className="text-slate-300">Tầng 5, 168 Đường Cầu Giấy, Q. Cầu Giấy, Hà Nội</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-blue-300">Hotline: {siteConfig.hotlineDisplay}</span>
                  <a
                    href="https://maps.google.com/?q=168+Cau+Giay+Hanoi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white flex items-center gap-0.5"
                  >
                    <span>Bản đồ</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-900/60 space-y-1.5">
                <div className="font-bold text-white text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Chi nhánh Quảng Ninh:</span>
                </div>
                <p className="text-slate-300">Số 126 Lê Thánh Tông, P. Bạch Đằng, TP. Hạ Long</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-blue-300">Hotline: {siteConfig.hotlineDisplay}</span>
                  <a
                    href="https://maps.google.com/?q=126+Le+Thanh+Tong+Ha+Long"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white flex items-center gap-0.5"
                  >
                    <span>Bản đồ</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <p className="text-[11px] text-blue-200 italic">
                * Hỗ trợ giao nhận hồ sơ tận nơi tại: Hạ Long, Móng Cái, Cẩm Phả, Uông Bí và toàn bộ các quận nội thành Hà Nội.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Working Hours */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 pb-2 border-b border-blue-900/80">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Thông tin liên hệ
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Hotline tư vấn báo giá:</div>
                  <a href={`tel:${siteConfig.hotline}`} className="text-white font-bold hover:text-blue-400">
                    {siteConfig.hotlineDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Email tiếp nhận tài liệu:</div>
                  <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-blue-400">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Giờ làm việc văn phòng:</div>
                  <div className="text-white text-xs">{siteConfig.workingHours}</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/dich-thuat-cong-chung#bao-gia-form"
                className="w-full inline-block text-center py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-sm transition-colors shadow-md"
              >
                Gửi Yêu Cầu Báo Giá Nhanh
              </Link>
            </div>
          </div>
        </div>

        {/* Local SEO Fast Links Area */}
        <div className="border-t border-blue-900/80 pt-6 pb-6 text-xs text-slate-400">
          <div className="font-semibold text-slate-300 mb-2">Khu vực dịch vụ trọng điểm:</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-slate-400">
            <Link href="/dich-thuat-cong-chung-quang-ninh" className="hover:text-blue-300 underline-offset-2 hover:underline">
              Dịch thuật công chứng Quảng Ninh
            </Link>
            <span>•</span>
            <Link href="/dich-thuat-cong-chung-quang-ninh#ha-long" className="hover:text-blue-300 underline-offset-2 hover:underline">
              Dịch thuật công chứng Hạ Long
            </Link>
            <span>•</span>
            <Link href="/dich-thuat-cong-chung-quang-ninh#mong-cai" className="hover:text-blue-300 underline-offset-2 hover:underline">
              Dịch thuật công chứng Móng Cái
            </Link>
            <span>•</span>
            <Link href="/dich-thuat-cong-chung-quang-ninh#cam-pha" className="hover:text-blue-300 underline-offset-2 hover:underline">
              Dịch thuật công chứng Cẩm Phả
            </Link>
            <span>•</span>
            <Link href="/dich-thuat-cong-chung-ha-noi" className="hover:text-blue-300 underline-offset-2 hover:underline">
              Dịch thuật công chứng Hà Nội
            </Link>
            <span>•</span>
            <Link href="/dich-thuat-cong-chung-ha-noi#cau-giay" className="hover:text-blue-300 underline-offset-2 hover:underline">
              Dịch thuật công chứng Cầu Giấy
            </Link>
            <span>•</span>
            <Link href="/dich-thuat-cong-chung-ha-noi#hoan-kiem" className="hover:text-blue-300 underline-offset-2 hover:underline">
              Dịch thuật công chứng Hoàn Kiếm
            </Link>
            <span>•</span>
            <Link href="/dich-thuat-cong-chung-ha-noi#dong-da" className="hover:text-blue-300 underline-offset-2 hover:underline">
              Dịch thuật công chứng Đống Đa
            </Link>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-blue-900/60 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Dịch Thuật Thành Đạt. Tất cả các quyền được bảo lưu. Giấy phép hoạt động dịch vụ dịch thuật và tư vấn ngôn ngữ theo quy định pháp luật.</p>
          <div className="flex items-center space-x-4">
            <Link href="/gioi-thieu" className="hover:text-white transition-colors">Về chúng tôi</Link>
            <span>|</span>
            <Link href="/lien-he" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <span>|</span>
            <Link href="/#faq" className="hover:text-white transition-colors">Hỏi đáp dịch vụ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
