"use client"

import React, { useState } from "react"
import {
  Send,
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  X,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

interface FormData {
  fullName: string
  phone: string
  email: string
  service: string
  sourceLang: string
  targetLang: string
  location: string
  deadline: string
  notes: string
}

interface FormErrors {
  fullName?: string
  phone?: string
  email?: string
  service?: string
}

export function QuotationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    service: "Dịch thuật công chứng lấy ngay",
    sourceLang: "Tiếng Việt",
    targetLang: "Tiếng Anh",
    location: "Hà Nội",
    deadline: "Lấy trong ngày (Gấp)",
    notes: "",
  })

  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const errs: FormErrors = {}
    if (!formData.fullName.trim()) {
      errs.fullName = "Vui lòng nhập họ và tên của quý khách"
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Họ tên tối thiểu 2 ký tự"
    }

    const phoneClean = formData.phone.replace(/[\s.-]/g, "")
    if (!formData.phone.trim()) {
      errs.phone = "Vui lòng cung cấp số điện thoại liên hệ"
    } else if (!/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/.test(phoneClean)) {
      errs.phone = "Số điện thoại không hợp lệ (gồm 10 số, ví dụ 0987654321)"
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Địa chỉ email không đúng định dạng"
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      // Limit to 5 files
      setFiles((prev) => [...prev, ...selectedFiles].slice(0, 5))
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate request processing
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      service: "Dịch thuật công chứng lấy ngay",
      sourceLang: "Tiếng Việt",
      targetLang: "Tiếng Anh",
      location: "Hà Nội",
      deadline: "Lấy trong ngày (Gấp)",
      notes: "",
    })
    setFiles([])
    setErrors({})
  }

  return (
    <div id="bao-gia" className="bg-white rounded-2xl border border-blue-100 shadow-xl overflow-hidden scroll-mt-24">
      {/* Header banner of form */}
      <div className="bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#2563EB] text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-semibold mb-2 backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Phản hồi & Báo giá chi tiết trong vòng 10 - 15 phút</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Yêu Cầu Báo Giá Dịch Thuật & Công Chứng
            </h3>
            <p className="text-blue-100 text-sm mt-1 max-w-xl">
              Gửi tài liệu chụp ảnh hoặc thông tin sơ bộ. Chuyên viên Thành Đạt sẽ thẩm định và gửi báo giá trọn gói không phát sinh kèm tiến độ cam kết.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-end text-right">
            <span className="text-xs text-blue-200">Cần tư vấn ngay?</span>
            <a
              href={`tel:${siteConfig.hotline}`}
              className="text-amber-300 hover:text-white font-extrabold text-xl tracking-tight flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 fill-amber-300" />
              <span>{siteConfig.hotlineDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Form Content or Success State */}
      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h4 className="text-2xl font-bold text-[#172554]">
                Tiếp Nhận Thông Tin Thành Công!
              </h4>
              <p className="text-slate-600 text-sm">
                Cảm ơn Quý khách <strong>{formData.fullName}</strong>. Yêu cầu dịch vụ <strong>{formData.service}</strong> ({formData.sourceLang} → {formData.targetLang}) đã được ghi nhận trên hệ thống demo.
              </p>
            </div>

            {/* Simulated status note */}
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 max-w-md mx-auto text-left text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#172554]">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Tiến trình xử lý:</span>
              </div>
              <p>
                Để nhận được thẩm định bản dịch và báo giá chuẩn xác trong 10 phút, Quý khách vui lòng gửi trực tiếp ảnh chụp tài liệu qua Zalo của Thành Đạt.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`${siteConfig.zaloUrl}?text=Toi%20vua%20gui%20yeu%20cau%20bao%20gia%20cho%20${encodeURIComponent(formData.fullName)}%20(${formData.phone})`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0068FF] text-white font-bold hover:bg-blue-600 transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Gửi File Qua Zalo Ngay</span>
              </a>

              <a
                href={`tel:${siteConfig.hotline}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Gọi Hotline {siteConfig.hotlineDisplay}</span>
              </a>

              <Button
                variant="outline"
                onClick={handleReset}
                className="w-full sm:w-auto"
              >
                Gửi yêu cầu khác
              </Button>
            </div>

            <p className="text-[11px] text-slate-400 italic pt-2">
              * Lưu ý: Đây là giao diện nguyên mẫu của website. Dữ liệu chưa gửi tới API máy chủ thực tế.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid 1: Personal info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#172554] uppercase tracking-wider mb-2">
                  Họ và tên của bạn <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? "border-red-400 focus:ring-red-200 bg-red-50/30"
                      : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172554] uppercase tracking-wider mb-2">
                  Số điện thoại (Zalo) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Ví dụ: 0987654321"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? "border-red-400 focus:ring-red-200 bg-red-50/30"
                      : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172554] uppercase tracking-wider mb-2">
                  Email nhận báo giá <span className="text-slate-400 font-normal">(Không bắt buộc)</span>
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? "border-red-400 focus:ring-red-200 bg-red-50/30"
                      : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Grid 2: Service & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#172554] uppercase tracking-wider mb-2">
                  Dịch vụ cần hỗ trợ
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white"
                >
                  <option value="Dịch thuật công chứng lấy ngay">Dịch thuật công chứng lấy ngay</option>
                  <option value="Hồ sơ du học & Visa">Hồ sơ du học & Visa định cư</option>
                  <option value="Giấy tờ doanh nghiệp & Hợp đồng">Tài liệu doanh nghiệp & Hợp đồng</option>
                  <option value="Dịch thuật chuyên ngành sâu">Dịch chuyên ngành (Y tế, Kỹ thuật...)</option>
                  <option value="Hợp pháp hóa lãnh sự">Hợp pháp hóa & Chứng nhận lãnh sự</option>
                  <option value="Phiên dịch sự kiện & Đàm phán">Phiên dịch viên sự kiện / đàm phán</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172554] uppercase tracking-wider mb-2">
                  Ngôn ngữ dịch thuật
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={formData.sourceLang}
                    onChange={(e) => setFormData({ ...formData, sourceLang: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                  >
                    <option value="Tiếng Việt">Từ: Tiếng Việt</option>
                    <option value="Tiếng Anh">Từ: Tiếng Anh</option>
                    <option value="Tiếng Trung">Từ: Tiếng Trung</option>
                    <option value="Tiếng Hàn">Từ: Tiếng Hàn</option>
                    <option value="Tiếng Nhật">Từ: Tiếng Nhật</option>
                    <option value="Tiếng Pháp">Từ: Tiếng Pháp</option>
                    <option value="Tiếng Đức">Từ: Tiếng Đức</option>
                    <option value="Tiếng Nga">Từ: Tiếng Nga</option>
                    <option value="Khác">Từ: Ngôn ngữ khác</option>
                  </select>
                  <select
                    value={formData.targetLang}
                    onChange={(e) => setFormData({ ...formData, targetLang: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                  >
                    <option value="Tiếng Anh">Sang: Tiếng Anh</option>
                    <option value="Tiếng Việt">Sang: Tiếng Việt</option>
                    <option value="Tiếng Trung">Sang: Tiếng Trung</option>
                    <option value="Tiếng Hàn">Sang: Tiếng Hàn</option>
                    <option value="Tiếng Nhật">Sang: Tiếng Nhật</option>
                    <option value="Tiếng Pháp">Sang: Tiếng Pháp</option>
                    <option value="Tiếng Đức">Sang: Tiếng Đức</option>
                    <option value="Tiếng Nga">Sang: Tiếng Nga</option>
                    <option value="Khác">Sang: Ngôn ngữ khác</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172554] uppercase tracking-wider mb-2">
                  Khu vực & Tiến độ mong muốn
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                  >
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Quảng Ninh (Hạ Long)">Hạ Long (QN)</option>
                    <option value="Quảng Ninh (Cẩm Phả)">Cẩm Phả (QN)</option>
                    <option value="Quảng Ninh (Móng Cái)">Móng Cái (QN)</option>
                    <option value="Tỉnh khác">Tỉnh thành khác</option>
                  </select>
                  <select
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                  >
                    <option value="Lấy trong ngày (Gấp)">Lấy trong ngày</option>
                    <option value="1 - 2 ngày">1 - 2 ngày</option>
                    <option value="3 - 5 ngày">3 - 5 ngày</option>
                    <option value="Thong thả">Tiến độ tiêu chuẩn</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Request notes */}
            <div>
              <label className="block text-xs font-bold text-[#172554] uppercase tracking-wider mb-2">
                Chi tiết yêu cầu & Số lượng tài liệu
              </label>
              <textarea
                rows={3}
                placeholder="Ví dụ: Cần dịch 01 học bạ cấp 3 và 01 bằng tốt nghiệp sang tiếng Anh, công chứng tư pháp lấy trước 16h ngày mai để nộp hồ sơ du học..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Optional Document Upload UI */}
            <div>
              <label className="block text-xs font-bold text-[#172554] uppercase tracking-wider mb-2">
                Đính kèm tài liệu mẫu / Bản scan <span className="text-slate-400 font-normal">(Tùy chọn, tối đa 5 file: PDF, Word, JPG, PNG)</span>
              </label>

              <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-6 text-center transition-colors bg-slate-50/50">
                <input
                  type="file"
                  id="doc-upload"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="doc-upload"
                  className="cursor-pointer flex flex-col items-center justify-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Upload className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-blue-600 hover:underline">
                    Nhấp để chọn file từ máy tính/điện thoại
                  </span>
                  <span className="text-xs text-slate-500">
                    Hỗ trợ tài liệu PDF, DOC, DOCX, ảnh chụp JPG/PNG rõ nét
                  </span>
                </label>
              </div>

              {/* Uploaded File List */}
              {files.length > 0 && (
                <div className="mt-3 space-y-2">
                  <span className="text-xs font-semibold text-slate-600">Đã chọn {files.length} file:</span>
                  <div className="flex flex-wrap gap-2">
                    {files.map((file, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-slate-800"
                      >
                        <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="max-w-[180px] truncate font-medium">{file.name}</span>
                        <span className="text-slate-400 text-[10px]">
                          ({(file.size / 1024).toFixed(0)} KB)
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-slate-400 hover:text-red-500"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Trust disclaimer and Submit button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mọi thông tin & tài liệu được bảo mật 100% theo tiêu chuẩn NDA.</span>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 font-bold text-base shadow-lg shadow-blue-600/25"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Đang xử lý...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Gửi Yêu Cầu Nhận Báo Giá Ngay</span>
                  </span>
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
