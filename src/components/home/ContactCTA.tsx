import React from "react"
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  MessageCircle,
  Truck,
  Building
} from "lucide-react"
import { siteConfig } from "@/config/site"

export function ContactCTA() {
  return (
    <section id="lien-he" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Mạng lưới cơ sở</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
            Văn Phòng Tiếp Nhận & Công Chứng Tại Hà Nội & Quảng Ninh
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Quý khách có thể đến trực tiếp văn phòng hoặc gửi hồ sơ online qua Zalo để được thẩm định và giao nhận bản dịch tận nơi nhanh nhất.
          </p>
        </div>

        {/* 2 Regional Office Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {siteConfig.offices.map((office, idx) => (
            <div
              key={idx}
              className="bg-[#F5F8FF]/80 rounded-2xl p-6 sm:p-8 border border-blue-200/80 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-blue-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-[#172554]">
                        {office.name}
                      </h3>
                      <span className="text-xs text-blue-600 font-semibold">
                        Khu vực: {office.city}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Đang mở cửa
                  </span>
                </div>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-slate-800">Địa chỉ văn phòng:</span>
                      <p className="text-slate-600">{office.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-slate-800">Hotline / Zalo tiếp nhận:</span>
                      <p className="text-blue-700 font-bold">{office.hotline}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
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
                <div className="mt-4 rounded-xl overflow-hidden border border-blue-200 h-44 bg-slate-100 relative">
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
              <div className="pt-5 mt-4 border-t border-blue-200/60 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`tel:${office.hotline}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Gọi {office.hotline}</span>
                </a>

                <a
                  href={siteConfig.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0068FF] text-white font-bold text-xs hover:bg-blue-600 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat Zalo</span>
                </a>

                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900 font-semibold"
                >
                  <span>Chỉ đường trên Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
