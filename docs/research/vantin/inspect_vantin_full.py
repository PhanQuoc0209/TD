import re
from collections import Counter

with open('docs/research/vantin/raw_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

print("=== PAGE TITLE ===")
title = re.search(r'<title>(.*?)</title>', html, re.I)
print(title.group(1) if title else "")

print("\n=== STYLES & FONTS ===")
fonts = re.findall(r'font-family:\s*["\']?([^;"\']+)["\']?', html, re.I)
print("Top fonts:", Counter(fonts).most_common(5))

colors = re.findall(r'color:\s*(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\))', html, re.I)
print("Top colors:", Counter(colors).most_common(10))

bg_colors = re.findall(r'background(?:-color)?:\s*(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\))', html, re.I)
print("Top bg colors:", Counter(bg_colors).most_common(10))

print("\n=== EXACT SECTION SEQUENCE ON VANTIN PAGE ===")
# Let's find widgets in sequence
widgets = re.findall(r'<(?:h[1-4]|div class="[^"]*elementor-heading-title[^"]*")>(.*?)</(?:h[1-4]|div)>', html, re.I | re.S)
for i, w in enumerate(widgets):
    clean = re.sub(r'<[^>]+>', ' ', w).strip()
    clean = ' '.join(clean.split())
    if clean and len(clean) > 3 and not any(skip in clean.lower() for skip in ['menu', 'javascript', 'elementor']):
        print(f"{i+1}. {clean}")
