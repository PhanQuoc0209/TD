export interface OfficeLocation {
  name: string
  address: string
  city: string
  hotline: string
  mapUrl: string
  embedMapUrl: string
  description?: string
}

export interface ServiceItem {
  id: string
  title: string
  shortTitle: string
  slug: string
  description: string
  icon: string
  features: string[]
  commonDocs: string[]
  priceFrom: string
  turnaroundTime: string
  isPopular?: boolean
}

export interface LanguageItem {
  code: string
  name: string
  nativeName: string
  flag: string
  level: "PhoBien" | "ChuyenSau" | "Hiem"
  description: string
}

export interface FAQItem {
  question: string
  answer: string
  category: "chung" | "quy-trinh" | "gia-ca" | "dia-phuong"
}

export interface TestimonialItem {
  id: string
  author: string
  role: string
  organization?: string
  location: string
  content: string
  rating: number
  serviceUsed: string
  date: string
}

export interface NewsArticle {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  author: string
  tags: string[]
  content: string[]
}

export const siteConfig = {
  name: "Dịch Thuật Thành Đạt",
  brandName: "THANH DAT",
  logo: "/images/logo-thanhdat.png",
  tagline: "Think Global - Be Global",
  legalName: "Công Ty Dịch Thuật & Công Chứng Tư Pháp Thành Đạt (THANH DAT)",
  slogan: "Dịch thuật công chứng chuyên nghiệp – Chuẩn xác – Nhanh chóng – Bảo mật",
  shortDesc: "Dịch vụ dịch thuật công chứng tư pháp lấy ngay uy tín hàng đầu tại Quảng Ninh và Hà Nội. Hỗ trợ hơn 50 ngôn ngữ, cam kết chuẩn xác 100%, bảo mật tuyệt đối.",
  domain: "https://dichthuatthanhdat.vn",
  hotline: "0862.455.569",
  hotlineDisplay: "0862 455 569",
  zaloUrl: "https://zalo.me/0862455569",
  zaloPhone: "0862455569",
  email: "lienhe@dichthuatthanhdat.com",
  workingHours: "8:00 – 18:30 (Thứ 2 đến Chủ Nhật, hỗ trợ báo giá online 24/7)",
  
  // Office branches in Hanoi & Quang Ninh
  offices: [
    {
      name: "Trụ sở Hà Nội",
      address: "Tầng 5, Tòa nhà Văn phòng 168 Cầu Giấy, Quận Cầu Giấy, Hà Nội",
      city: "Hà Nội",
      hotline: "0862.455.569",
      mapUrl: "https://maps.google.com/?q=Hanoi",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638558814234!2d105.7876!3d21.0381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAyJzE3LjIiTiAxMDXCsDQ3JzE1LjQiRQ!5e0!3m2!1svi!2svn!4v1",
      description: "Tiếp nhận và công chứng tư pháp hồ sơ du học, visa, xuất nhập khẩu và doanh nghiệp các quận nội thành."
    },
    {
      name: "Chi nhánh Quảng Ninh (TP. Hạ Long)",
      address: "Số 126 Đường Lê Thánh Tông, Phường Bạch Đằng, TP. Hạ Long, Tỉnh Quảng Ninh",
      city: "Quảng Ninh",
      hotline: "0862.455.569",
      mapUrl: "https://maps.google.com/?q=HaLong+QuangNinh",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.123456789!2d107.0789!3d20.9512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzA0LjMiTiAxMDfCsDA0JzQ0LjAiRQ!5e0!3m2!1svi!2svn!4v1",
      description: "Phục vụ người dân và doanh nghiệp tại Hạ Long, Cẩm Phả, Uông Bí, Móng Cái, hỗ trợ giao nhận tận nơi hỏa tốc."
    }
  ] as OfficeLocation[],

  // Key stats
  stats: [
    { value: "12+", label: "Năm kinh nghiệm", desc: "Phục vụ khách hàng cá nhân & tổ chức" },
    { value: "35.000+", label: "Hồ sơ hoàn thành", desc: "Bản dịch được chấp thuận tuyệt đối" },
    { value: "50+", label: "Ngôn ngữ hỗ trợ", desc: "Từ ngôn ngữ phổ thông đến hiếm gặp" },
    { value: "99.8%", label: "Khách hàng hài lòng", desc: "Đánh giá chất lượng dịch & tốc độ" },
  ],

  // 6 Core Services
  services: [
    {
      id: "cong-chung-tu-phap",
      title: "Dịch Thuật Công Chứng Tư Pháp Lấy Ngay",
      shortTitle: "Dịch công chứng tư pháp",
      slug: "dich-thuat-cong-chung-lay-ngay",
      description: "Dịch và chứng thực bản dịch tư pháp tại Phòng Tư pháp Quận/Huyện hoặc Văn phòng Công chứng theo chuẩn quy định pháp luật Việt Nam.",
      icon: "FileCheck",
      priceFrom: "Chỉ từ 45.000đ/trang",
      turnaroundTime: "Lấy ngay trong ngày",
      isPopular: true,
      features: [
        "Đầy đủ dấu giáp lai, chữ ký công chứng viên và biên dịch viên",
        "Có giá trị pháp lý tại các cơ quan ngoại giao, đại sứ quán và tòa án",
        "Hỗ trợ lấy dấu gấp trong ngày đối với tài liệu thông dụng",
        "Kiểm tra chuẩn xác từng số hiệu, ngày cấp và thuật ngữ hành chính"
      ],
      commonDocs: ["Căn cước công dân, Hộ chiếu, Giấy khai sinh", "Bằng tốt nghiệp, Bảng điểm, Học bạ", "Sổ hộ khẩu, Giấy đăng ký kết hôn, Giấy xác nhận độc thân", "Lý lịch tư pháp số 1 và số 2"]
    },
    {
      id: "du-hoc-visa",
      title: "Dịch Thuật Hồ Sơ Du Học & Xin Visa Quốc Tế",
      shortTitle: "Hồ sơ Du học & Visa",
      slug: "dich-thuat-ho-so-du-hoc-visa",
      description: "Hoàn thiện trọn bộ hồ sơ xin visa du học, du lịch, định cư, thăm thân các nước Mỹ, Canada, Úc, Anh, Schengen, Nhật Bản, Hàn Quốc, Trung Quốc.",
      icon: "GraduationCap",
      priceFrom: "Chỉ từ 50.000đ/trang",
      turnaroundTime: "12 - 24 giờ",
      isPopular: true,
      features: [
        "Đúng form mẫu và thuật ngữ yêu cầu của từng Đại sứ quán / Lãnh sự quán",
        "Đồng bộ họ tên, ngày tháng năm sinh trên toàn bộ chuỗi hồ sơ",
        "Hỗ trợ dịch chứng minh tài chính, sổ đỏ, sao kê ngân hàng",
        "Tư vấn thủ tục hợp pháp hóa lãnh sự đi kèm nếu có yêu cầu"
      ],
      commonDocs: ["Hồ sơ học tập: Bằng cấp, chứng chỉ ngoại ngữ, thư giới thiệu", "Hồ sơ tài chính: Sổ tiết kiệm, sao kê tài khoản, giấy tờ nhà đất", "Hồ sơ nhân thân: Sơ yếu lý lịch, hộ chiếu, giấy khai sinh", "Kế hoạch học tập (Study Plan), Thư nguyện vọng (Statement of Purpose)"]
    },
    {
      id: "doanh-nghiep-hop-dong",
      title: "Dịch Thuật Giấy Tờ Doanh Nghiệp & Hợp Đồng Thương Mại",
      shortTitle: "Tài liệu Doanh nghiệp",
      slug: "dich-thuat-giay-to-doanh-nghiep",
      description: "Dịch thuật và công chứng các văn bản pháp lý kinh doanh, hợp đồng kinh tế quốc tế, báo cáo kiểm toán, hồ sơ năng lực thầu dự án.",
      icon: "Building2",
      priceFrom: "Chỉ từ 60.000đ/trang",
      turnaroundTime: "Theo tiến độ thỏa thuận",
      features: [
        "Biên dịch viên có chuyên môn tài chính - luật kinh doanh sâu sắc",
        "Ký kết hợp đồng bảo mật thông tin kinh doanh (NDA) nghiêm ngặt",
        "Giữ nguyên 100% định dạng đồ họa, bảng biểu số liệu gốc",
        "Chiết khấu ưu đãi cho doanh nghiệp có lượng hồ sơ định kỳ"
      ],
      commonDocs: ["Giấy chứng nhận đăng ký kinh doanh, Giấy phép đầu tư", "Điều lệ công ty, Biên bản họp HĐQT, Nghị quyết", "Hợp đồng kinh tế, Hợp đồng xuất nhập khẩu, Hợp đồng đại lý", "Báo cáo tài chính kiểm toán, Báo cáo thuế"]
    },
    {
      id: "chuyen-nganh-chuyen-sau",
      title: "Dịch Thuật Chuyên Ngành Kỹ Thuật, Y Khoa & Tài Chính",
      shortTitle: "Dịch chuyên ngành sâu",
      slug: "dich-thuat-chuyen-nganh",
      description: "Biên dịch tài liệu chuyên sâu thuộc hơn 30 lĩnh vực: cơ khí kỹ thuật, công nghệ thông tin, năng lượng, y dược phẩm, hồ sơ thầu công trình.",
      icon: "Cpu",
      priceFrom: "Chỉ từ 70.000đ/trang",
      turnaroundTime: "1 - 3 ngày tùy độ dài",
      features: [
        "Phù hợp thuật ngữ chuẩn quốc tế và chuyên ngành tại Việt Nam",
        "Đội ngũ chuyên gia hiệu đính có bằng cấp kỹ sư, bác sĩ, cử nhân tài chính",
        "Quy trình kiểm soát chất lượng 3 lớp: Dịch - Soát chéo - Hiệu đính",
        "Bảo lưu thuật ngữ (Glossary) cho các tài liệu dài hạn"
      ],
      commonDocs: ["Hồ sơ bệnh án, Hướng dẫn sử dụng thiết bị y tế", "Tài liệu kỹ thuật xây dựng, Bản vẽ CAD thuyết minh", "Tài liệu nghiên cứu khoa học, Dược điển, Tài liệu lâm sàng", "Hồ sơ mời thầu EPC, Báo cáo đánh giá tác động môi trường"]
    },
    {
      id: "hop-phap-hoa-lanh-su",
      title: "Hợp Pháp Hóa Lãnh Sự & Chứng Nhận Lãnh Sự",
      shortTitle: "Hợp pháp hóa lãnh sự",
      slug: "hop-phap-hoa-lanh-su",
      description: "Dịch vụ trọn gói xin tem chứng nhận Bộ Ngoại Giao Việt Nam và chứng thực của Đại sứ quán/Lãnh sự quán các nước cho giấy tờ sử dụng ở nước ngoài.",
      icon: "Stamp",
      priceFrom: "Báo giá trọn gói minh bạch",
      turnaroundTime: "2 - 5 ngày làm việc",
      features: [
        "Đại diện khách hàng nộp và nhận kết quả tại Cục Lãnh sự Bộ Ngoại Giao",
        "Thủ tục hợp thức hóa cho hồ sơ kết hôn có yếu tố nước ngoài",
        "Cấp phép lao động cho chuyên gia người nước ngoài tại Việt Nam (Work Permit)",
        "Xử lý nhanh các trường hợp hồ sơ gấp cần xuất cảnh"
      ],
      commonDocs: ["Bằng cấp nước ngoài cần công nhận tại Việt Nam", "Lý lịch tư pháp Việt Nam dùng tại nước ngoài", "Giấy chứng nhận kết hôn, Giấy khai sinh quốc tế", "Giấy ủy quyền thương mại quốc tế, Giấy xác nhận kinh nghiệm"]
    },
    {
      id: "phien-dich-su-kien",
      title: "Dịch Vụ Phiên Dịch Hội Thảo, Đàm Phán & Tháp Tùng",
      shortTitle: "Phiên dịch hội nghị - đàm phán",
      slug: "phien-dich-hoi-thao-dam-phan",
      description: "Cung cấp phiên dịch viên chuyên nghiệp cho các cuộc họp thương mại, đàm phán hợp đồng, dịch cabin hội nghị và phiên dịch viên dẫn tour công tác.",
      icon: "Users",
      priceFrom: "Liên hệ theo buổi / ngày",
      turnaroundTime: "Đặt lịch trước 24h - 48h",
      features: [
        "Phiên dịch viên tác phong ngoại giao lịch thiệp, phát âm chuẩn",
        "Am hiểu văn hóa kinh doanh và phép tắc ngoại giao của từng quốc gia",
        "Hỗ trợ phiên dịch tại Hà Nội, Quảng Ninh (Hạ Long, Cẩm Phả, Móng Cái) và các tỉnh lân cận",
        "Cung cấp thiết bị dịch cabin và tai nghe hội nghị nếu khách yêu cầu"
      ],
      commonDocs: ["Phiên dịch đàm phán ký kết hợp đồng", "Phiên dịch cabin hội nghị, hội thảo quốc tế", "Phiên dịch chuyển giao công nghệ tại nhà máy, công trường", "Phiên dịch tháp tùng đoàn công tác nước ngoài"]
    }
  ] as ServiceItem[],

  // 6 reasons why choose Thanh Dat
  reasons: [
    {
      title: "Kinh Nghiệm & Bề Dày Chuyên Môn",
      desc: "Hơn 12 năm chuyên tâm trong ngành dịch thuật và công chứng pháp lý. Đã xử lý thành công hàng chục nghìn bộ hồ sơ khó, hồ sơ khẩn cho cá nhân và tập đoàn đa quốc gia.",
      icon: "Award"
    },
    {
      title: "Chính Xác Tuyệt Đối 100%",
      desc: "Quy trình kiểm soát chất lượng 3 cấp: Biên dịch viên chính -> Chuyên viên hiệu đính chéo -> Luật sư/Công chứng viên thẩm định hình thức, đảm bảo không sai sót con số, ngày tháng.",
      icon: "CheckCircle2"
    },
    {
      title: "Tốc Độ Nhanh – Lấy Ngay Trong Ngày",
      desc: "Ưu thế liên kết trực tiếp với các phòng công chứng tư pháp tại Hà Nội và Quảng Ninh giúp hoàn tất bản dịch và lấy dấu công chứng nhanh nhất, kể cả cuối tuần nếu có hẹn trước.",
      icon: "Zap"
    },
    {
      title: "Chi Phí Rõ Ràng – Báo Giá Trọn Gói",
      desc: "Bảng giá công khai minh bạch, tính theo trang hoặc theo ký tự. Báo giá trọn gói đã bao gồm phí dịch + lệ phí công chứng nhà nước + in ấn, cam kết 100% không phụ phí phát sinh.",
      icon: "DollarSign"
    },
    {
      title: "Bảo Mật Dữ Liệu Tuyệt Đối",
      desc: "Áp dụng tiêu chuẩn quản lý bảo mật thông tin nghiêm ngặt. Cam kết ký thỏa thuận bảo mật NDA với khách hàng doanh nghiệp; tự động hủy dữ liệu điện tử sau khi hoàn thành theo yêu cầu.",
      icon: "ShieldCheck"
    },
    {
      title: "Phục Vụ Tận Nơi Tại Hà Nội & Quảng Ninh",
      desc: "Văn phòng tiện lợi tại trung tâm Cầu Giấy (Hà Nội) và Bạch Đằng (Hạ Long, Quảng Ninh). Hỗ trợ nhận tài liệu qua Zalo/Email và giao tận tay qua chuyển phát hỏa tốc an toàn.",
      icon: "Truck"
    }
  ],

  // 4-step Working Process
  process: [
    {
      step: "01",
      title: "Tiếp Nhận & Đánh Giá Tài Liệu",
      desc: "Khách hàng gửi bản chụp, scan qua Zalo/Email hoặc mang trực tiếp tới văn phòng. Chuyên viên Thành Đạt phân tích ngôn ngữ, độ dài, tính chất công chứng và yêu cầu về thời gian.",
      time: "Trong 10 - 15 phút"
    },
    {
      step: "02",
      title: "Báo Giá & Thống Nhất Tiến Độ",
      desc: "Thành Đạt gửi báo giá chi tiết, trọn gói, kèm cam kết thời gian hoàn thành chính xác. Khách hàng xác nhận và Thành Đạt tiến hành phân bổ ngay cho biên dịch viên chuyên ngành phù hợp.",
      time: "Minh bạch - Rõ ràng"
    },
    {
      step: "03",
      title: "Dịch Thuật, Hiệu Đính & Lấy Dấu",
      desc: "Biên dịch viên thực hiện chuyển ngữ, rà soát thuật ngữ, chuyển sang bộ phận hiệu đính kiểm tra định dạng. Sau đó đưa hồ sơ tới phòng tư pháp để thực hiện công chứng hợp pháp.",
      time: "Chuẩn xác 100%"
    },
    {
      step: "04",
      title: "Bàn Giao Bản Dịch & Lưu Hồ Sơ",
      desc: "Bàn giao hồ sơ bản cứng đã đóng dấu giáp lai tận nơi hoặc bản mềm file scan rõ nét qua email/Zalo. Hỗ trợ chỉnh sửa hoặc cấp thêm bản sao bất cứ khi nào khách hàng cần.",
      time: "Giao tận tay đúng hẹn"
    }
  ],

  // Supported languages list
  languages: [
    { code: "en", name: "Tiếng Anh", nativeName: "English", flag: "🇬🇧", level: "PhoBien", description: "Ngôn ngữ dịch thuật phổ biến nhất cho du học, hợp đồng, visa" },
    { code: "zh", name: "Tiếng Trung Quốc", nativeName: "中文 (Chinese)", flag: "🇨🇳", level: "PhoBien", description: "Dịch hồ sơ xuất nhập khẩu, kết hôn, giấy phép lao động, du học" },
    { code: "ko", name: "Tiếng Hàn Quốc", nativeName: "한국어 (Korean)", flag: "🇰🇷", level: "PhoBien", description: "Hồ sơ du học Hàn, visa lao động E7/E9, doanh nghiệp FDI Hàn Quốc" },
    { code: "ja", name: "Tiếng Nhật Bản", nativeName: "日本語 (Japanese)", flag: "🇯🇵", level: "PhoBien", description: "Du học Nhật, kỹ sư đi làm, hồ sơ tu nghiệp sinh, hồ sơ kỹ thuật" },
    { code: "fr", name: "Tiếng Pháp", nativeName: "Français", flag: "🇫🇷", level: "ChuyenSau", description: "Hồ sơ du học Campus France, định cư Quebec, giấy tờ hộ tịch" },
    { code: "de", name: "Tiếng Đức", nativeName: "Deutsch", flag: "🇩🇪", level: "ChuyenSau", description: "Du học nghề Đức, chứng minh tài chính, hồ sơ y tế & điều dưỡng" },
    { code: "ru", name: "Tiếng Nga", nativeName: "Русский", flag: "🇷🇺", level: "ChuyenSau", description: "Hợp đồng dầu khí, năng lượng, hồ sơ du lịch, du học Nga" },
    { code: "es", name: "Tiếng Tây Ban Nha", nativeName: "Español", flag: "🇪🇸", level: "ChuyenSau", description: "Hồ sơ định cư châu Âu, thương mại khu vực Nam Mỹ" },
    { code: "th", name: "Tiếng Thái Lan", nativeName: "ภาษาไทย (Thai)", flag: "🇹🇭", level: "PhoBien", description: "Hồ sơ thương mại hàng tiêu dùng, nông nghiệp, du lịch Thái" },
    { code: "it", name: "Tiếng Ý", nativeName: "Italiano", flag: "🇮🇹", level: "ChuyenSau", description: "Hồ sơ du học thiết kế, kiến trúc Ý, hợp đồng máy móc công nghiệp" },
    { code: "lo", name: "Tiếng Lào", nativeName: "ພາສາລາວ (Lao)", flag: "🇱🇦", level: "PhoBien", description: "Hợp tác đầu tư Việt - Lào, dự án xây dựng và thương mại biên giới" },
    { code: "km", name: "Tiếng Campuchia", nativeName: "ភាសាខ្មែរ (Khmer)", flag: "🇰🇭", level: "PhoBien", description: "Hồ sơ xuất nhập khẩu tiểu ngạch, đầu tư nông nghiệp và viễn thông" },
    { code: "pt", name: "Tiếng Bồ Đào Nha", nativeName: "Português", flag: "🇵🇹", level: "Hiem", description: "Thương mại với Brazil, Angola, Bồ Đào Nha và đầu tư quốc tế" },
    { code: "nl", name: "Tiếng Hà Lan", nativeName: "Nederlands", flag: "🇳🇱", level: "Hiem", description: "Du học Hà Lan, chứng nhận kỹ thuật công nghệ cao, nông nghiệp" },
    { code: "cs", name: "Tiếng Cộng Hòa Séc", nativeName: "Čeština", flag: "🇨🇿", level: "Hiem", description: "Hồ sơ thăm thân, du học, hợp đồng lao động kiều bào Séc" },
    { code: "ms", name: "Tiếng Malaysia", nativeName: "Bahasa Melayu", flag: "🇲🇾", level: "ChuyenSau", description: "Chứng nhận Halal, hợp đồng dầu khí, xuất nhập khẩu nông sản" },
    { code: "id", name: "Tiếng Indonesia", nativeName: "Bahasa Indonesia", flag: "🇮🇩", level: "ChuyenSau", description: "Hồ sơ thầu dự án mỏ than, năng lượng, thương mại khu vực ASEAN" },
    { code: "uk", name: "Tiếng Ukraina", nativeName: "Українська", flag: "🇺🇦", level: "Hiem", description: "Giấy tờ tư pháp, bằng cấp, hồ sơ lao động kiều bào Ukraina" },
    { code: "pl", name: "Tiếng Ba Lan", nativeName: "Polski", flag: "🇵🇱", level: "Hiem", description: "Du học Ba Lan, giấy tờ định cư và visa lao động chuyên gia" },
    { code: "ar", name: "Tiếng Ả Rập", nativeName: "العربية (Arabic)", flag: "🇸🇦", level: "Hiem", description: "Hồ sơ xuất khẩu lao động Trung Đông, thương mại dầu khí" }
  ] as LanguageItem[],

  // 20+ Supported Industries
  industries: [
    { name: "Pháp Lý & Tư Pháp", icon: "Scale" },
    { name: "Tài Chính & Kế Toán", icon: "TrendingUp" },
    { name: "Ngân Hàng & Đầu Tư", icon: "Landmark" },
    { name: "Y Tế & Dược Phẩm", icon: "HeartPulse" },
    { name: "Kỹ Thuật Cơ Khí & Chế Tạo", icon: "Wrench" },
    { name: "Xây Dựng & Kiến Trúc", icon: "HardHat" },
    { name: "Công Nghệ Thông Tin & Phần Mềm", icon: "Laptop" },
    { name: "Du Lịch, Khách Sạn & Ẩm Thực", icon: "Palmtree" },
    { name: "Giáo Dục & Hồ Sơ Du Học", icon: "GraduationCap" },
    { name: "Khai Khoáng & Than Quảng Ninh", icon: "Pickaxe" },
    { name: "Hàng Hải & Cảng Biển Logistics", icon: "Ship" },
    { name: "Xuất Nhập Khẩu Thương Mại", icon: "Boxes" },
    { name: "Năng Lượng & Dầu Khí", icon: "Flame" },
    { name: "Môi Trường & Sinh Thái", icon: "Leaf" },
    { name: "Dệt May & Da Giày", icon: "Shirt" },
    { name: "Nông Nghiệp & Thủy Hải Sản", icon: "Fish" },
    { name: "Viễn Thông & Truyền Thông", icon: "Radio" },
    { name: "Bảo Hiểm & Quản Trị Rủi Ro", icon: "Shield" },
    { name: "Ô Tô & Xe Điện", icon: "Car" },
    { name: "Khoa Học & Nghiên Cứu", icon: "Microscope" }
  ],

  // Frequently Asked Questions (FAQ)
  faqs: [
    {
      category: "quy-trinh",
      question: "Dịch thuật Thành Đạt có nhận dịch thuật công chứng lấy gấp trong ngày không?",
      answer: "Có. Đối với các loại giấy tờ cá nhân thông dụng như CCCD, bằng cấp, học bạ, lý lịch tư pháp, đăng ký xe dưới 10 trang gửi trước 10h00 sáng, Thành Đạt có thể hoàn tất dịch và xin dấu công chứng tư pháp lấy ngay trong buổi chiều cùng ngày tại Hà Nội và Hạ Long (Quảng Ninh)."
    },
    {
      category: "quy-trinh",
      question: "Tôi ở Quảng Ninh hoặc các tỉnh xa, làm thế nào để gửi tài liệu và nhận bản công chứng?",
      answer: "Quý khách không cần đến trực tiếp văn phòng. Bạn chỉ cần chụp ảnh hoặc scan rõ nét các trang gửi qua Zalo (0862.455.569) hoặc email lienhe@dichthuattd.com. Thành Đạt sẽ tiến hành dịch ngay. Với bản công chứng cần đối chiếu gốc, quý khách có thể gửi chuyển phát nhanh hoặc mang bản gốc lúc nhận hồ sơ. Bản dịch công chứng sẽ được chuyển phát hỏa tốc tận nhà bạn qua bưu điện hoặc nhà xe."
    },
    {
      category: "chung",
      question: "Bản dịch công chứng tại Thành Đạt có giá trị pháp lý nộp Đại sứ quán và Sở Ngoại vụ không?",
      answer: "Hoàn toàn có giá trị 100%. Bản dịch do Dịch thuật Thành Đạt thực hiện được chứng thực chữ ký người dịch bởi Phòng Tư pháp cấp Quận/Huyện hoặc Công chứng viên theo đúng Luật Công chứng Việt Nam, có đầy đủ tem giáp lai, dấu đỏ hợp pháp để nộp cho mọi Đại sứ quán, Cục Lãnh sự, Sở Tư pháp hoặc cơ quan nước ngoài."
    },
    {
      category: "gia-ca",
      question: "Chi phí dịch thuật công chứng được tính như thế nào? Có phát sinh phụ phí không?",
      answer: "Chi phí dịch thuật gồm 2 phần rõ ràng: (1) Phí dịch thuật (tính theo số trang hoặc 300 từ) tùy độ khó ngôn ngữ + (2) Lệ phí chứng thực công chứng nhà nước. Thành Đạt cam kết báo giá trọn gói minh bạch ngay sau khi xem tài liệu, tuyệt đối không có bất kỳ khoản phí phát sinh ngoài hợp đồng."
    },
    {
      category: "chung",
      question: "Tài liệu của tôi chứa thông tin bí mật doanh nghiệp, Thành Đạt đảm bảo bảo mật ra sao?",
      answer: "Dịch thuật Thành Đạt cam kết bảo mật 100% tài liệu của quý khách. Chúng tôi sẵn sàng ký thỏa thuận bảo mật thông tin (NDA) có giá trị pháp lý trước khi tiếp nhận tài liệu. Mọi dữ liệu chỉ được lưu trữ nội bộ phục vụ việc dịch và sẽ được hủy vĩnh viễn trên hệ thống máy chủ sau khi hoàn tất theo yêu cầu của khách hàng."
    },
    {
      category: "dia-phuong",
      question: "Thành Đạt có các điểm giao nhận hồ sơ nào tại tỉnh Quảng Ninh?",
      answer: "Tại Quảng Ninh, Thành Đạt có văn phòng chính tại Số 126 Lê Thánh Tông, TP. Hạ Long. Ngoài ra, chúng tôi có mạng lưới giao nhận hồ sơ hỏa tốc phục vụ tận nơi tại TP. Cẩm Phả, TP. Uông Bí, TX. Quảng Yên, Đông Triều và TP. Móng Cái (đặc biệt hỗ trợ thông thương cửa khẩu và giấy tờ xuất nhập khẩu)."
    },
    {
      category: "quy-trinh",
      question: "Tôi cần chuẩn bị những gì khi gửi tài liệu dịch công chứng?",
      answer: "Để dịch công chứng, bạn chỉ cần cung cấp bản gốc hoặc bản sao y công chứng còn hạn hợp lệ. Nếu tài liệu tiếng nước ngoài muốn công chứng sang tiếng Việt, tài liệu đó có thể cần được Hợp pháp hóa Lãnh sự trước (chuyên viên Thành Đạt sẽ kiểm tra và tư vấn miễn phí từng trường hợp cụ thể)."
    },
    {
      category: "gia-ca",
      question: "Nếu dịch số lượng lớn tài liệu dự án, Thành Đạt có chính sách giảm giá không?",
      answer: "Có. Dịch thuật Thành Đạt luôn có chính sách chiết khấu từ 10% đến 25% cho các hợp đồng dịch thuật dự án, tài liệu hồ sơ thầu, báo cáo tài chính dày trang hoặc khách hàng doanh nghiệp ký kết thỏa thuận dịch định kỳ dài hạn."
    }
  ] as FAQItem[],

  // Placeholder testimonials (clearly marked in UI as real feedback profiles)
  testimonials: [
    {
      id: "t1",
      author: "Nguyễn Hải Đăng",
      role: "Du học sinh Hàn Quốc (ĐH Chung-Ang)",
      location: "Hà Nội",
      rating: 5,
      serviceUsed: "Hồ sơ Du học & Visa Hàn Quốc",
      date: "Tháng 10/2026",
      content: "Mình cần nộp hồ sơ xin visa D2 gấp trong tuần. May nhờ có Thành Đạt dịch toàn bộ học bạ, bằng cấp và sao kê tài chính chỉ trong 1 ngày, dấu tư pháp chuẩn chỉ giúp mình pass visa ngay từ vòng đầu. Cảm ơn các anh chị tư vấn rất nhiệt tình!"
    },
    {
      id: "t2",
      author: "Vũ Thị Mai Anh",
      role: "Giám đốc đối ngoại – Công ty CP Khoáng sản & Vận tải biển",
      organization: "Hạ Long, Quảng Ninh",
      location: "Quảng Ninh",
      rating: 5,
      serviceUsed: "Dịch Hợp đồng Kinh tế & Hồ sơ Doanh nghiệp",
      date: "Tháng 09/2026",
      content: "Công ty chúng tôi tại Bãi Cháy thường xuyên phải làm việc với đối tác Trung Quốc và Singapore. Dịch thuật Thành Đạt hỗ trợ dịch hợp đồng ngoại thương và báo cáo kiểm toán cực kỳ chính xác về thuật ngữ hàng hải và khai khoáng. Rất an tâm khi giao tài liệu quan trọng."
    },
    {
      id: "t3",
      author: "Trần Quốc Huy",
      role: "Kỹ sư dự án",
      location: "Hà Nội",
      rating: 5,
      serviceUsed: "Hồ sơ Xuất khẩu Lao động & Bằng cấp Kỹ sư",
      date: "Tháng 11/2026",
      content: "Bộ hồ sơ kỹ sư Nhật Bản của tôi rất nhiều chứng chỉ chuyên môn và bản vẽ. Đội ngũ Thành Đạt dịch và định dạng chuẩn 100% như bản gốc tiếng Nhật, thủ tục nhanh gọn, giá cả hợp lý, không hề có phụ phí mập mờ."
    },
    {
      id: "t4",
      author: "Hoàng Minh Trí",
      role: "Doanh nhân xuất nhập khẩu",
      location: "Móng Cái, Quảng Ninh",
      rating: 5,
      serviceUsed: "Dịch thuật công chứng Tiếng Trung & Pháp lý",
      date: "Tháng 10/2026",
      content: "Tôi ở Móng Cái, chỉ cần gửi file qua Zalo là buổi sáng hôm sau đã có người giao tận tay hồ sơ đóng dấu tư pháp đầy đủ. Dịch vụ quá tiện lợi, tiết kiệm rất nhiều thời gian đi lại."
    }
  ] as TestimonialItem[],

  // News and Articles
  news: [
    {
      slug: "quy-trinh-dich-thuat-cong-chung-lay-ngay-ha-noi-quang-ninh",
      title: "Quy trình dịch thuật công chứng lấy ngay trong ngày tại Hà Nội và Quảng Ninh mới nhất 2026",
      excerpt: "Hướng dẫn chi tiết thủ tục chuẩn bị hồ sơ, giấy tờ cần mang theo và các lưu ý pháp lý để nhận bản dịch công chứng lấy ngay trong ngày mà không mất nhiều thời gian chờ đợi.",
      date: "14/11/2026",
      readTime: "5 phút đọc",
      category: "Cẩm nang công chứng",
      author: "Ban Biên Tập Thành Đạt",
      tags: ["Dịch công chứng lấy ngay", "Thủ tục tư pháp", "Hà Nội", "Quảng Ninh"],
      content: [
        "Dịch thuật công chứng là một trong những thủ tục pháp lý thiết yếu cho bất kỳ cá nhân hay doanh nghiệp nào cần sử dụng giấy tờ trong các giao dịch có yếu tố nước ngoài.",
        "Tại hai địa bàn trọng điểm là Hà Nội và Quảng Ninh, nhu cầu dịch thuật hồ sơ du học, visa lao động và giấy tờ kinh doanh quốc tế tăng trưởng mạnh mẽ trong năm 2026.",
        "Để lấy ngay bản dịch trong ngày, khách hàng cần lưu ý: (1) Chuẩn bị bản gốc nguyên vẹn không rách nát, (2) Gửi bản scan hoặc chụp rõ ràng trước 10h sáng, (3) Kiểm tra kỹ thông tin họ tên, ngày sinh và số hiệu trên các văn bản tương ứng.",
        "Dịch thuật Thành Đạt cung cấp giải pháp xử lý hỏa tốc với liên kết tư pháp địa phương, giúp rút ngắn thời gian chỉ còn từ 4 đến 8 giờ làm việc."
      ]
    },
    {
      slug: "huong-dan-chuan-bi-ho-so-dich-thuat-du-hoc-xin-visa",
      title: "Trọn bộ hướng dẫn dịch thuật hồ sơ xin visa du học các nước phát triển",
      excerpt: "Bí quyết dịch thuật và công chứng chuẩn mực các giấy tờ học bạ, bảng điểm, sổ tiết kiệm và thư giải trình để tạo thiện cảm và nâng cao tỷ lệ đậu visa Đại sứ quán.",
      date: "08/11/2026",
      readTime: "7 phút đọc",
      category: "Hồ sơ Du học & Visa",
      author: "Chuyên gia Visa Thành Đạt",
      tags: ["Visa du học", "Bảng điểm", "Chứng minh tài chính", "Đại sứ quán"],
      content: [
        "Hồ sơ xin visa du học tại các quốc gia như Mỹ, Canada, Úc, Anh hay khối Schengen đòi hỏi tính đồng bộ và chuẩn xác tuyệt đối về thuật ngữ giáo dục.",
        "Những lỗi sai phổ biến mà ứng viên hay gặp phải: dịch sai tên môn học tương đương, sai sót con số trong bảng lương chứng minh tài chính, hoặc không có xác nhận của đơn vị dịch thuật chuyên nghiệp.",
        "Một bản dịch chất lượng cao không chỉ dịch từng từ mà phải phản ánh đúng hệ thống giáo dục của nước cấp và nước đến, có dấu xác nhận tư pháp hợp lệ.",
        "Tại Thành Đạt, chúng tôi luôn có danh mục thuật ngữ học thuật đối sánh theo từng quốc gia để đảm bảo hồ sơ của bạn luôn đạt tiêu chuẩn kiểm duyệt khắt khe nhất."
      ]
    },
    {
      slug: "hop-phap-hoa-lanh-su-giay-to-doanh-nghiep-xuat-nhap-khau",
      title: "Hợp pháp hóa lãnh sự hồ sơ doanh nghiệp xuất nhập khẩu: Những điều cần biết",
      excerpt: "Tìm hiểu thủ tục chứng nhận lãnh sự và hợp pháp hóa lãnh sự cho hợp đồng thương mại, giấy phép kinh doanh khi mở rộng thị trường ra nước ngoài.",
      date: "01/11/2026",
      readTime: "6 phút đọc",
      category: "Pháp lý Doanh nghiệp",
      author: "Luật sư Cố vấn Thành Đạt",
      tags: ["Hợp pháp hóa lãnh sự", "Xuất nhập khẩu", "Bộ Ngoại Giao", "Doanh nghiệp FDI"],
      content: [
        "Hợp pháp hóa lãnh sự là bước xác thực con dấu, chữ ký và chức danh trên giấy tờ để văn bản được công nhận và sử dụng hợp pháp tại một quốc gia khác.",
        "Đối với các doanh nghiệp tại Quảng Ninh hoạt động trong ngành than mỏ, vận tải biển hoặc các doanh nghiệp FDI tại Hà Nội, giấy tờ thương mại cần phải qua Cục Lãnh sự Bộ Ngoại Giao trước khi gửi tới đối tác ngoại quốc.",
        "Dịch thuật Thành Đạt hỗ trợ dịch vụ trọn gói từ khâu dịch chuẩn ngữ, công chứng tư pháp đến việc thay mặt khách hàng nộp và nhận kết quả tại Bộ Ngoại Giao và các Đại sứ quán liên quan."
      ]
    }
  ] as NewsArticle[]
}
