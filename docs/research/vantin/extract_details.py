import re

with open('docs/research/vantin/raw_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's extract text around the FAQs and stats
print("=== STATS DETAILS ===")
stats_area = re.search(r'NHỮNG CON SỐ BIẾT NÓI([\s\S]*?)HỖ TRỢ HƠN 20\+', html)
if stats_area:
    text = re.sub(r'<[^>]+>', '\n', stats_area.group(1))
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    print('\n'.join(lines[:20]))

print("\n=== FAQ DETAILS ===")
faq_area = re.search(r'FAQ KHÁCH HÀNG QUAN TÂM([\s\S]*?)LIÊN HỆ ĐỂ ĐƯỢC', html)
if faq_area:
    text = re.sub(r'<[^>]+>', '\n', faq_area.group(1))
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    print('\n'.join(lines[:30]))

print("\n=== HERO DETAILS ===")
hero_area = re.search(r'<div[^>]*class=["\'][^"\']*elementor-widget-heading[^"\']*["\'][\s\S]*?DỊCH VỤ DỊCH THUẬT CÔNG CHỨNG([\s\S]*?)KHÓ KHĂN CỦA KHÁCH HÀNG', html)
if hero_area:
    text = re.sub(r'<[^>]+>', '\n', hero_area.group(1))
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    print('\n'.join(lines[:20]))
