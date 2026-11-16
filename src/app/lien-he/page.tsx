import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  MessageCircle,
  Building,
  ChevronRight,
  Truck
} from "lucide-react"
import { siteConfig } from "@/config/site"
import { QuotationForm } from "@/components/quote/QuotationForm"

export const metadata: Metadata = {
  title: "Liên Hệ Dịch Thuật Thành Đạt | Văn Phòng Hà Nội & Quảng Ninh",
  description:
    "Thông tin liên hệ, hotline tư vấn, địa chỉ văn phòng tiếp nhận và bàn giao hồ sơ dịch thuật công chứng tại Hà Nội và Quảng Ninh (Hạ Long, Cẩm Phả, Móng Cái).",
  alternates: {
    canonical: `${siteConfig.domain}/lien-he`,
  },
}

export default function LienHePage() {
  return (
    <div className="bg-[#F5F8FF] min-h-screen">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#2563EB] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-blue-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">Liên hệ</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Building className="w-3.5 h-3.5 text-amber-300" />
              <span>Tiếp Nhận & Bàn Giao Tận Nơi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Liên Hệ Với Dịch Thuật Thành Đạt
            </h1>
            <p className="text-blue-100 text-base sm:text-lg mt-3 leading-relaxed">
              Chúng tôi luôn sẵn sàng hỗ trợ, tư vấn và giải đáp mọi yêu cầu dịch thuật công chứng của Quý khách 24/7 qua Hotline, Zalo và tại các văn phòng.
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations Detailed Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {siteConfig.offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-[#F5F8FF]/80 rounded-2xl p-7 border border-blue-200 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-blue-200/60">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="font-extrabold text-xl text-[#172554]">
                          {office.name}
                        </h2>
                        <span className="text-xs text-blue-600 font-semibold">
                          Phục vụ trọng điểm: {office.city}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Đang mở cửa
                    </span>
                  </div>

                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                      <div>
                        <strong className="block text-slate-900">Địa chỉ văn phòng:</strong>
                        <p className="text-slate-600">{office.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                      <div>
                        <strong className="block text-slate-900">Hotline tư vấn báo giá:</strong>
                        <a href={`tel:${office.hotline}`} className="text-blue-700 font-bold hover:underline">
                          {office.hotline}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                      <div>
                        <strong className="block text-slate-900">Giờ làm việc:</strong>
                        <p className="text-slate-600">{siteConfig.workingHours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Truck className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                      <div>
                        <strong className="block text-slate-900">Phạm vi giao nhận hỏa tốc:</strong>
                        <p className="text-slate-600 text-xs">{office.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Map Embed */}
                  <div className="rounded-xl overflow-hidden border border-blue-200 h-56 bg-slate-100 relative">
                    <iframe
                      src={office.embedMapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Bản đồ định vị ${office.name}`}
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-200/80 flex flex-wrap items-center justify-between gap-3">
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
                    <span>Mở Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Form container */}
          <div className="max-w-4xl mx-auto">
            <QuotationForm />
          </div>
        </div>
      </section>
    </div>
  )
}
