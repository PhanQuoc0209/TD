import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { FloatingContact } from "@/components/layout/FloatingContact"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Dịch Thuật Thành Đạt | Dịch Thuật Công Chứng Tư Pháp Lấy Ngay Hà Nội & Quảng Ninh",
    template: "%s | Dịch Thuật Thành Đạt",
  },
  description:
    "Dịch thuật công chứng tư pháp lấy ngay chuyên nghiệp tại Hà Nội và Quảng Ninh (Hạ Long, Cẩm Phả, Móng Cái). Hỗ trợ hơn 50 ngôn ngữ, hồ sơ du học, visa, doanh nghiệp, chuẩn xác 100%, bảo mật tuyệt đối.",
  keywords: [
    "dịch thuật công chứng",
    "dịch thuật công chứng hà nội",
    "dịch thuật công chứng quảng ninh",
    "dịch thuật công chứng hạ long",
    "dịch thuật lấy ngay",
    "dịch thuật hồ sơ du học",
    "dịch thuật visa",
    "hợp pháp hóa lãnh sự",
    "dịch thuật tiếng anh",
    "dịch thuật tiếng trung",
    "dịch thuật tiếng hàn",
    "dịch thuật tiếng nhật",
  ],
  authors: [{ name: "Dịch Thuật Thành Đạt" }],
  creator: "Dịch Thuật Thành Đạt",
  publisher: "Dịch Thuật Thành Đạt",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.domain,
    title: "Dịch Thuật Thành Đạt | Dịch Thuật Công Chứng Tư Pháp Lấy Ngay",
    description:
      "Dịch vụ dịch thuật công chứng tư pháp chuẩn xác, bảo mật và lấy nhanh trong ngày tại Hà Nội và Quảng Ninh.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch Thuật Thành Đạt - Dịch thuật công chứng tư pháp chuyên nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dịch Thuật Thành Đạt | Dịch Thuật Công Chứng Tư Pháp Lấy Ngay",
    description:
      "Hệ thống dịch thuật công chứng tư pháp chuyên nghiệp hàng đầu tại Hà Nội và Quảng Ninh. Lấy ngay trong ngày.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteConfig.domain,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Structured JSON-LD schema for LocalBusiness & Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.domain}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.domain,
        logo: `${siteConfig.domain}/logo.png`,
        description: siteConfig.shortDesc,
        telephone: siteConfig.hotline,
        email: siteConfig.email,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.hotline,
            contactType: "customer service",
            areaServed: ["VN"],
            availableLanguage: ["Vietnamese", "English", "Chinese"],
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.domain}/#service-hanoi`,
        name: `${siteConfig.name} - Trụ sở Hà Nội`,
        image: `${siteConfig.domain}/og-image.jpg`,
        telephone: siteConfig.hotline,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "168 Cầu Giấy",
          addressLocality: "Cầu Giấy",
          addressRegion: "Hà Nội",
          addressCountry: "VN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "21.0381",
          longitude: "105.7876",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "18:30",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.domain}/#service-quangninh`,
        name: `${siteConfig.name} - Chi nhánh Quảng Ninh`,
        image: `${siteConfig.domain}/og-image.jpg`,
        telephone: siteConfig.hotline,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "126 Lê Thánh Tông, Bạch Đằng",
          addressLocality: "TP. Hạ Long",
          addressRegion: "Quảng Ninh",
          addressCountry: "VN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "20.9512",
          longitude: "107.0789",
        },
      },
    ],
  }

  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#F5F8FF] text-slate-800 selection:bg-blue-600 selection:text-white pb-14 md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
