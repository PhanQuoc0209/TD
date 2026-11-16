import React from "react"
import Link from "next/link"
import { Newspaper, Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export function NewsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F5F8FF] border-b border-blue-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Cẩm nang pháp lý & dịch thuật</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172554] tracking-tight">
            Tin Tức & Hướng Dẫn Dịch Thuật Công Chứng Mới Nhất
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Cập nhật quy định mới nhất về thủ tục công chứng tư pháp, hướng dẫn chuẩn bị hồ sơ du học, visa và lưu ý hợp pháp hóa lãnh sự.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.news.map((item) => (
            <article
              key={item.slug}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Article Top Image or Gradient placeholder */}
                <div className="h-44 bg-gradient-to-br from-blue-700 via-blue-900 to-[#172554] p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-white/20 text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                    <span className="text-xs text-blue-200 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.readTime}</span>
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-blue-200 text-xs flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6">
                  <h3 className="font-bold text-base sm:text-lg text-[#172554] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-2">
                    <Link href={`/tin-tuc/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded"
                      >
                        <Tag className="w-2.5 h-2.5 text-blue-500" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100">
                <Link
                  href={`/tin-tuc/${item.slug}`}
                  className="text-xs font-bold text-[#2563EB] hover:text-blue-800 flex items-center gap-1 transition-colors"
                >
                  <span>Đọc toàn bộ bài viết</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all news CTA */}
        <div className="mt-12 text-center">
          <Link href="/tin-tuc">
            <Button variant="outline" size="lg" className="font-bold">
              <span>Xem Tất Cả Bài Viết & Cẩm Nang</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
