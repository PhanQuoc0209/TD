import re

with open('docs/research/vantin/raw_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's find elementor-widget
headings = re.findall(r'<div[^>]*class="[^"]*elementor-widget-heading[^"]*"[^>]*>([\s\S]*?)</div>\s*</div>', html)
print(f"Found {len(headings)} heading widgets:")
for i, h in enumerate(headings):
    text = re.sub(r'<[^>]+>', ' ', h).strip()
    text = ' '.join(text.split())
    if text:
        print(f"  {i+1}. {text}")
