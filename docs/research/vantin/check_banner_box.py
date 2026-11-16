from PIL import Image

im = Image.open('d:/Pj/TD/public/images/hero-banner.jpg')
w, h = im.size

# Let's inspect column 100, 200, 300, etc. from top to bottom
for y in range(0, h, 20):
    p = im.getpixel((200, y))
    print(f"y={y}: RGB={p}")
