import re

with open('docs/research/vantin/raw_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

def show_section(title, start_pattern, end_pattern):
    print(f"=== {title} ===")
    match = re.search(start_pattern + r'([\s\S]*?)' + end_pattern, html)
    if match:
        text = re.sub(r'<[^>]+>', '\n', match.group(1))
        lines = [l.strip() for l in text.split('\n') if l.strip()]
        for l in lines[:25]:
            print("  ", l)
    else:
        print("  Not found")

show_section("PAIN POINTS", "KHÓ KHĂN CỦA KHÁCH HÀNG", "CÁC LOẠI HÌNH")
show_section("SERVICES", "CÁC LOẠI HÌNH DỊCH THUẬT CÔNG CHỨNG", "6 LÝ DO")
show_section("WHY CHOOSE", "6 LÝ DO BẠN NÊN CHỌN", "HỖ TRỢ DỊCH THUẬT CÔNG CHỨNG HƠN 20\+")
show_section("PROCESS", "QUY TRÌNH DỊCH THUẬT CÔNG CHỨNG CHUYÊN NGHIỆP", "NHỮNG CON SỐ BIẾT NÓI")
