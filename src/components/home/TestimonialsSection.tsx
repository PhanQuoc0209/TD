import React from "react"
import { Star, MessageSquareQuote, MapPin } from "lucide-react"
import { siteConfig } from "@/config/site"

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F5F8FF] border-y border-blue-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Phản hồi khách hàng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
            Khách Hàng Nói Gì Về Dịch Thuật Thành Đạt?
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Sự hài lòng và thành công của quý khách khi nộp hồ sơ visa, du học và ký kết hợp đồng thương mại là niềm tự hào lớn nhất của chúng tôi.
          </p>
          <span className="inline-block mt-2 text-[11px] text-slate-400 italic">
            (Hồ sơ đánh giá & phản hồi được tổng hợp từ trải nghiệm khách hàng thực tế tại Hà Nội và Quảng Ninh)
          </span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top star rating & service */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                    {t.serviceUsed}
                  </span>
                </div>

                {/* Content quote */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#172554]">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
                <div className="text-right">
                  <span className="flex items-center gap-1 text-xs text-blue-600 font-semibold justify-end">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{t.location}</span>
                  </span>
                  <span className="text-[10px] text-slate-400">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
