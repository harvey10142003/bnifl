"""
從 logo-vertical.png 產生網站所需的 favicon 套件。
- favicon.ico (16/32/48 multi-size)
- favicon-16x16.png / favicon-32x32.png
- apple-touch-icon.png (180x180)
- icon-192.png / icon-512.png (PWA)
- icon-maskable-512.png (PWA maskable，含 safe area padding)
"""
from PIL import Image
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / 'public' / 'images' / 'logo-vertical.png'
OUT = ROOT / 'public'

assert SOURCE.exists(), f'source missing: {SOURCE}'

src = Image.open(SOURCE).convert('RGBA')
print(f'source: {src.size}')

def fit_square(img, size, padding_ratio=0.0, bg=(31, 45, 61, 255)):
    """把圖貼進正方形畫布，可選 padding 跟背景色（bg=None 為透明）"""
    canvas_size = size
    canvas = Image.new('RGBA', (canvas_size, canvas_size), bg if bg else (0, 0, 0, 0))
    pad = int(canvas_size * padding_ratio)
    inner = canvas_size - pad * 2
    img_ratio = img.width / img.height
    if img_ratio >= 1:
        w = inner
        h = int(inner / img_ratio)
    else:
        h = inner
        w = int(inner * img_ratio)
    resized = img.resize((w, h), Image.LANCZOS)
    x = (canvas_size - w) // 2
    y = (canvas_size - h) // 2
    canvas.paste(resized, (x, y), resized)
    return canvas

# 1) 一般 favicons：透明背景，logo 滿版
for size, name in [(16, 'favicon-16x16.png'), (32, 'favicon-32x32.png')]:
    out = fit_square(src, size, padding_ratio=0.05, bg=None)
    out.save(OUT / name, optimize=True)
    print(f'wrote {name}')

# 2) apple-touch-icon：iOS 主畫面，深藍底白邊
apple = fit_square(src, 180, padding_ratio=0.12, bg=(31, 45, 61, 255))
apple.save(OUT / 'apple-touch-icon.png', optimize=True)
print('wrote apple-touch-icon.png')

# 3) PWA 標準 icons（透明背景，可放任何形狀的 launcher）
for size in (192, 512):
    out = fit_square(src, size, padding_ratio=0.06, bg=None)
    out.save(OUT / f'icon-{size}.png', optimize=True)
    print(f'wrote icon-{size}.png')

# 4) PWA maskable icon（要有 safe area padding，外圍會被裁圓/方）
maskable = fit_square(src, 512, padding_ratio=0.18, bg=(31, 45, 61, 255))
maskable.save(OUT / 'icon-maskable-512.png', optimize=True)
print('wrote icon-maskable-512.png')

# 5) favicon.ico (multi-size 16/32/48)
ico_sizes = [(16, 16), (32, 32), (48, 48)]
ico_imgs = [fit_square(src, s[0], padding_ratio=0.05, bg=None) for s in ico_sizes]
ico_imgs[0].save(OUT / 'favicon.ico', sizes=ico_sizes, format='ICO',
                 append_images=ico_imgs[1:])
print('wrote favicon.ico')

print('\nall favicons generated.')
