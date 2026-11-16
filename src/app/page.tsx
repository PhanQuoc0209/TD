import React from "react"
import { Hero } from "@/components/home/Hero"
import { CompanyIntro } from "@/components/home/CompanyIntro"
import { PainPoints } from "@/components/home/PainPoints"
import { ServicesSection } from "@/components/home/ServicesSection"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { IndustriesSection } from "@/components/home/IndustriesSection"
import { ConsultationBanner } from "@/components/home/ConsultationBanner"
import { ProcessSection } from "@/components/home/ProcessSection"
import { StatsSection } from "@/components/home/StatsSection"
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

      {/* 4. Các Loại Hình Dịch Thuật Công Chứng Phổ Biến (Có ảnh đi kèm) */}
      <ServicesSection />

      {/* 5. 6 Lý Do Bạn Nên Chọn Dịch Vụ Dịch Thuật Công Chứng Tại Thành Đạt */}
      <WhyChooseUs />

      {/* 6. Hỗ Trợ Dịch Thuật Công Chứng Hơn 20+ Ngành Nghề */}
      <IndustriesSection />

      {/* Dải Banner Tư Vấn Miễn Phí & Hotline (Di chuyển xuống trước Quy trình) */}
      <ConsultationBanner />

      {/* 7. Quy Trình Dịch Thuật Công Chứng Chuyên Nghiệp */}
      <ProcessSection />

      {/* 8. Những Con Số Biết Nói Tại Thành Đạt */}
      <StatsSection />

      {/* 9. Hệ Thống Văn Phòng Tiếp Nhận & Công Chứng Tại Thành Đạt */}
      <ContactCTA />
    </div>
  )
}
