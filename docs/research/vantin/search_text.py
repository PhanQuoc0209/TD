with open('docs/research/vantin/raw_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
matches = re.findall(r'.{0,50}(?:Chính xác|từng từ|CÔNG CHỨNG BẢN DỊCH|0906 246 555).{0,50}', html, re.I)
print(f"Found {len(matches)} matches:")
for m in matches[:10]:
    print(" -", m.strip())
