import React from "react"
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  MessageCircle,
  Truck
} from "lucide-react"
import { siteConfig } from "@/config/site"

export function ContactCTA() {
  return (
    <section id="lien-he" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-black tracking-tight text-[#072B6A] uppercase mb-3">
            HỆ THỐNG VĂN PHÒNG TIẾP NHẬN & CÔNG CHỨNG TẠI THÀNH ĐẠT
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Quý khách có thể đến trực tiếp văn phòng tại Hà Nội & Quảng Ninh hoặc gửi tài liệu online qua Zalo để được thẩm định nhanh chóng, công chứng chuẩn xác và giao nhận tận nơi.
          </p>
        </div>

        {/* 2 Regional Office Cards - Sharp corners, clear borders, shadows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {siteConfig.offices.map((office, idx) => (
            <div
              key={idx}
              className="bg-white rounded-none p-6 sm:p-7 border border-slate-300 shadow-md flex flex-col justify-between hover:border-[#0068FF]/60 hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-none bg-[#072B6A] text-white flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-[#072B6A] uppercase">
                        {office.name}
                      </h3>
                      <span className="text-xs text-[#0068FF] font-semibold">
                        Khu vực phục vụ trọng điểm: {office.city}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-none border border-emerald-300">
                    Đang mở cửa
                  </span>
                </div>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0068FF] shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-slate-800">Địa chỉ văn phòng:</span>
                      <p className="text-slate-600">{office.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#0068FF] shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-slate-800">Hotline / Zalo tiếp nhận:</span>
                      <a href={`tel:${office.hotline}`} className="block text-[#072B6A] font-bold hover:text-[#0068FF]">
                        {office.hotline}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#0068FF] shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-slate-800">Thời gian làm việc:</span>
                      <p className="text-slate-600">{siteConfig.workingHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Truck className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-slate-800">Phạm vi giao nhận hỏa tốc:</span>
                      <p className="text-slate-600 text-xs">{office.description}</p>
                    </div>
                  </div>
                </div>

                {/* Map Preview Embed */}
                <div className="mt-4 rounded-none overflow-hidden border border-slate-300 h-48 bg-slate-100 relative shadow-inner">
                  <iframe
                    src={office.embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Bản đồ ${office.name}`}
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Office Card CTA buttons */}
              <div className="pt-5 mt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`tel:${office.hotline}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-none bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Gọi {office.hotline}</span>
                </a>

                <a
                  href={siteConfig.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-none bg-[#0068FF] text-white font-bold text-xs hover:bg-blue-600 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat Zalo</span>
                </a>

                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#072B6A] hover:text-[#0068FF] font-semibold"
                >
                  <span>Chỉ đường trên Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact Banner info bar */}
        <div className="bg-[#072B6A] text-white p-6 sm:p-8 rounded-none border border-slate-400 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Cần Tư Vấn & Báo Giá Hồ Sơ Gấp?</span>
            </h3>
            <p className="text-blue-100 text-sm max-w-xl">
              Đội ngũ tư vấn viên của THÀNH ĐẠT túc trực 24/7. Chỉ cần chụp ảnh hoặc scan gửi qua Zalo, chúng tôi sẽ báo giá chính xác trong vòng 10 phút.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.hotline}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Hotline: {siteConfig.hotlineDisplay}</span>
            </a>
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-[#0068FF] hover:bg-blue-600 text-white font-bold text-sm transition-colors shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Gửi file qua Zalo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
