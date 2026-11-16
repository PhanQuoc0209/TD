import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  Phone,
  ShieldCheck,
  Send
} from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return siteConfig.news.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = siteConfig.news.find((n) => n.slug === slug)

  if (!article) {
    return {
      title: "Bài viết không tìm thấy | Dịch Thuật Thành Đạt",
    }
  }

  return {
    title: `${article.title} | Dịch Thuật Thành Đạt`,
    description: article.excerpt,
    alternates: {
      canonical: `${siteConfig.domain}/tin-tuc/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const article = siteConfig.news.find((n) => n.slug === slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = siteConfig.news
    .filter((n) => n.slug !== article.slug)
    .slice(0, 2)

  return (
    <div className="bg-[#F5F8FF] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#2563EB] text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-blue-200 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/tin-tuc" className="hover:text-white transition-colors">Tin tức</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold truncate max-w-[200px]">{article.title}</span>
          </nav>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 uppercase tracking-wider inline-block mb-3">
            {article.category}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200 pt-2 border-t border-blue-900/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>Tác giả: {article.author}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
            {/* Lead Excerpt */}
            <div className="p-5 rounded-xl bg-blue-50/70 border-l-4 border-blue-600 text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
              {article.excerpt}
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              {article.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Practical Advice Alert Box */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <h3 className="font-bold text-amber-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Lời khuyên từ chuyên gia Dịch Thuật Thành Đạt:</span>
              </h3>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                Để tránh mất thời gian đi lại nhiều lần, hãy liên hệ trước với tư vấn viên của chúng tôi qua Zalo hoặc Hotline để kiểm tra tính hợp lệ của tài liệu gốc, dấu giáp lai và thời hạn bản sao y trước khi tiến hành dịch thuật công chứng.
              </p>
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400">Từ khóa:</span>
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* In-Article Direct Consultation CTA */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#172554] to-[#1E3A8A] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-bold text-base sm:text-lg">
                  Bạn có tài liệu cần dịch công chứng ngay?
                </h4>
                <p className="text-xs text-blue-200">
                  Thành Đạt hỗ trợ báo giá và tiếp nhận hồ sơ online 24/7.
                </p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link href="/#bao-gia" className="w-full sm:w-auto">
                  <Button size="sm" variant="default" className="w-full sm:w-auto font-bold">
                    <Send className="w-3.5 h-3.5 mr-1" />
                    <span>Nhận Báo Giá</span>
                  </Button>
                </Link>
                <a
                  href={`tel:${siteConfig.hotline}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Gọi {siteConfig.hotlineDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 space-y-6">
              <h3 className="font-extrabold text-xl text-[#172554]">
                Bài viết liên quan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.slug}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-blue-600 block mb-2">
                        {rel.category}
                      </span>
                      <h4 className="font-bold text-base text-[#172554] hover:text-[#2563EB] transition-colors mb-2">
                        <Link href={`/tin-tuc/${rel.slug}`}>{rel.title}</Link>
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">{rel.excerpt}</p>
                    </div>
                    <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400">{rel.date}</span>
                      <Link
                        href={`/tin-tuc/${rel.slug}`}
                        className="text-blue-600 font-bold hover:underline"
                      >
                        Đọc tiếp →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
