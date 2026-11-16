import re

with open('docs/research/vantin/raw_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

imgs = re.findall(r'<img[^>]*src=["\']([^"\']+)["\']', html)
for img in imgs:
    if any(k in img.lower() for k in ['banner', 'slider', 'dich', 'cong-chung', 'home', 'header']):
        print("IMG:", img)

# Also check background-image
bg_imgs = re.findall(r'url\(["\']?([^)"\']+)["\']?\)', html)
for bg in set(bg_imgs):
    if any(k in bg.lower() for k in ['banner', 'slider', 'dich', 'cong-chung', 'home', 'header', 'wp-content/uploads']):
        print("BG:", bg)
