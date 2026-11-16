import os
import re

src_dir = 'src'
found = []
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.tsx', '.jsx', '.ts', '.js')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fp:
                lines = fp.readlines()
                for i, line in enumerate(lines):
                    if '<Image' in line or '<img' in line or 'src=' in line:
                        if any(ext in line for ext in ['.jpg', '.png', '.webp', '.svg', '.jpeg', '/images/']):
                            found.append((p, i + 1, line.strip()))

for p, l, line in found:
    print(f"{p}:{l} -> {line}")
