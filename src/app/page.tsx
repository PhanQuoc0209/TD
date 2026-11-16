import React from "react"
import { Hero } from "@/components/home/Hero"
import { CompanyIntro } from "@/components/home/CompanyIntro"
import { PainPoints } from "@/components/home/PainPoints"
import { ServicesSection } from "@/components/home/ServicesSection"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { IndustriesSection } from "@/components/home/IndustriesSection"
import { ProcessSection } from "@/components/home/ProcessSection"
import { StatsSection } from "@/components/home/StatsSection"
import { AboutIntro } from "@/components/home/AboutIntro"
import { LanguagesGrid } from "@/components/home/LanguagesGrid"
import { QuotationForm } from "@/components/quote/QuotationForm"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { NewsSection } from "@/components/home/NewsSection"
import { FAQSection } from "@/components/home/FAQSection"
import { ContactCTA } from "@/components/home/ContactCTA"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner: Dịch Vụ Dịch Thuật Công Chứng Tại Thành Đạt */}
      <Hero />

      {/* 2. Giới Thiệu Dịch Vụ Dịch Thuật Công Chứng Tại Thành Đạt (Ảnh bên trái, lời bên phải) */}
      <CompanyIntro />

      {/* 3. Khó Khăn Của Khách Hàng Khi Tìm Kiếm Đơn Vị Dịch Công Chứng */}
      <PainPoints />

      {/* 3. Các Loại Hình Dịch Thuật Công Chứng Phổ Biến Tại Thành Đạt */}
      <ServicesSection />

      {/* 4. 6 Lý Do Bạn Nên Chọn Dịch Vụ Dịch Thuật Công Chứng Tại Thành Đạt */}
      <WhyChooseUs />

      {/* 5. Hỗ Trợ Dịch Thuật Công Chứng Hơn 20+ Ngành Nghề */}
      <IndustriesSection />

      {/* 6. Quy Trình Dịch Thuật Công Chứng Chuyên Nghiệp */}
      <ProcessSection />

      {/* 7. Những Con Số Biết Nói Tại Thành Đạt */}
      <StatsSection />

      {/* 8. Thành Đạt - Khẳng Định Vị Thế Dịch Vụ Hàng Đầu (ISO 9001-2015) */}
      <AboutIntro />

      {/* 9. Hỗ Trợ Hơn 20+ Ngôn Ngữ Phổ Biến Nhất */}
      <LanguagesGrid />

      {/* 10. Form Tiếp Nhận & Báo Giá Trực Tuyến Trong 10 Phút */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuotationForm />
        </div>
      </section>

      {/* 11. Đánh Giá Khách Hàng / Testimonials */}
      <TestimonialsSection />

      {/* 12. Cẩm Nang & Tin Tức Dịch Thuật Mới Nhất */}
      <NewsSection />

      {/* 13. FAQ Khách Hàng Quan Tâm Về Dịch Vụ */}
      <FAQSection />

      {/* 14. Liên Hệ Để Được Tư Vấn Miễn Phí (Hà Nội & Quảng Ninh) */}
      <ContactCTA />
    </div>
  )
}
