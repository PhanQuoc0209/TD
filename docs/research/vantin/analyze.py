import re
from html.parser import HTMLParser

with open('docs/research/vantin/raw_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

print("=== TITLE & META ===")
title = re.search(r'<title>(.*?)</title>', html, re.I)
print("Title:", title.group(1) if title else "")

meta_desc = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html, re.I)
print("Description:", meta_desc.group(1) if meta_desc else "")

print("\n=== HERO SECTION & KEY CONTENT BLOCKS ===")
# Let's find sections or elementor widgets
widget_headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', html, re.I | re.S)
for h in widget_headings:
    c = re.sub(r'<[^>]+>', '', h).strip()
    if c and len(c) > 3:
        print("H:", c)

print("\n=== IMAGES USED ===")
imgs = re.findall(r'<img[^>]*src=["\']([^"\']+)["\'][^>]*>', html, re.I)
img_set = set()
for img in imgs:
    if any(ext in img.lower() for ext in ['.png', '.jpg', '.jpeg', '.svg', '.webp']):
        if 'elementor' in img or 'wp-content' in img:
            img_set.add(img)
for img in sorted(list(img_set))[:20]:
    print("IMG:", img)

print("\n=== FAQS / ACCORDION ===")
faqs = re.findall(r'<(?:div|h\d)[^>]*class=["\'][^"\']*(?:title|question|toggle)[^"\']*["\'][^>]*>(.*?)</(?:div|h\d)>', html, re.I | re.S)
for f in faqs[:15]:
    c = re.sub(r'<[^>]+>', '', f).strip()
    if '?' in c:
        print("Q:", c)
