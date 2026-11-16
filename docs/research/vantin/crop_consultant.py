from PIL import Image

im = Image.open('d:/Pj/TD/public/images/hero-banner.jpg')
w, h = im.size

# Let's crop the woman carefully (approx x=670 to 980, y=10 to 365)
# In the original image, let's see where the blue ends at the bottom
box = (670, 15, 960, 365)
woman = im.crop(box)

# Let's create an RGBA image with a smooth alpha mask for the left edge so it blends seamlessly
woman = woman.convert('RGBA')
ww, wh = woman.size

# Create gradient mask on the left edge (first 40 pixels)
for x in range(min(50, ww)):
    alpha_factor = x / 50.0
    for y in range(wh):
        r, g, b, a = woman.getpixel((x, y))
        woman.putpixel((x, y), (r, g, b, int(a * alpha_factor)))

woman.save('d:/Pj/TD/public/images/consultant.png', 'PNG')
print(f"Saved consultant.png with dimensions {ww}x{wh}")
