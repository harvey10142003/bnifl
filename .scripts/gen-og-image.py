"""
產生 1200x630 OG / Twitter 分享圖。
- 深藍底（品牌 ink-700 #1F2D3D）
- 左：logo + tagline
- 右下淡化品牌地球線網
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import os

ROOT = Path(__file__).resolve().parent.parent
LOGO_H = ROOT / 'public' / 'images' / 'logo-horizontal.png'
LOGO_V = ROOT / 'public' / 'images' / 'logo-vertical.png'
OUT_OG = ROOT / 'public' / 'og-image.png'

W, H = 1200, 630
INK = (31, 45, 61, 255)
PEARL = (250, 250, 247, 255)
TEAL = (79, 157, 160, 255)
INK_LIGHT = (148, 163, 181, 255)

# 找系統中文字體
def find_font(size, weight='regular'):
    candidates = [
        r'C:\Windows\Fonts\msjhbd.ttc',   # 微軟正黑體 Bold
        r'C:\Windows\Fonts\msjh.ttc',     # 微軟正黑體 Regular
        r'C:\Windows\Fonts\NotoSansTC-Black.otf',
        r'C:\Windows\Fonts\NotoSansTC-Bold.otf',
        r'C:\Windows\Fonts\NotoSansTC-Regular.otf',
        '/usr/share/fonts/truetype/noto/NotoSansCJK-Bold.ttc',
    ]
    bold_first = weight in ('black', 'bold')
    if not bold_first:
        candidates = [c for c in candidates if 'bd' not in c.lower() and 'Bold' not in c and 'Black' not in c] + candidates
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()

# 畫布
canvas = Image.new('RGBA', (W, H), INK)
draw = ImageDraw.Draw(canvas)

# 1) 右側淡化地球線網（用 vertical logo 做 watermark）
logo_v = Image.open(LOGO_V).convert('RGBA')
ratio = logo_v.width / logo_v.height
size = 720
logo_v = logo_v.resize((size, int(size / ratio)) if ratio >= 1 else (int(size * ratio), size), Image.LANCZOS)
# 降透明度
alpha = logo_v.split()[3]
alpha = alpha.point(lambda p: int(p * 0.10))
logo_v.putalpha(alpha)
canvas.paste(logo_v, (W - logo_v.width + 80, H - logo_v.height + 60), logo_v)

# 2) 左上 logo（橫式，反白看起來好不好？實際上 logo 是深色字，丟黑底會看不到）
# 解：改在左上放白色 badge 包 logo
logo_h = Image.open(LOGO_H).convert('RGBA')
target_w = 360
ratio_h = logo_h.height / logo_h.width
logo_h = logo_h.resize((target_w, int(target_w * ratio_h)), Image.LANCZOS)
# 用白底 badge
badge_pad = 24
badge_w = logo_h.width + badge_pad * 2
badge_h = logo_h.height + badge_pad * 2
badge = Image.new('RGBA', (badge_w, badge_h), PEARL)
# 圓角
mask = Image.new('L', (badge_w, badge_h), 0)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, badge_w, badge_h), radius=18, fill=255)
badge.putalpha(mask)
badge.paste(logo_h, (badge_pad, badge_pad), logo_h)
canvas.paste(badge, (72, 72), badge)

# 3) 主標題：「在地深耕．國際串聯。」
title_font = find_font(64, 'black')
sub_font = find_font(32, 'regular')
small_font = find_font(22, 'regular')
ind_font = find_font(20, 'bold')

# 多行標題（避免太長）
title_y = 280
draw.text((72, title_y), '在地深耕．國際串聯。', font=title_font, fill=PEARL)
draw.text((72, title_y + 90), '只有合作，沒有競爭。', font=title_font, fill=TEAL)

# 4) 副文
sub_y = title_y + 200
draw.text((72, sub_y), '高雄 BNI 富聯白金分會 — 60+ 位產業菁英、累計 2.85 億引薦', font=sub_font, fill=INK_LIGHT)

# 5) 底部 URL + 標籤
bottom_y = H - 60
# 左下 URL
draw.text((72, bottom_y), 'BNIFL.UGOMK.COM', font=ind_font, fill=TEAL)
# 右下 tagline
draw.text((72, bottom_y - 32), 'BNI FULIAN PLATINUM CHAPTER · KAOHSIUNG', font=small_font, fill=INK_LIGHT)

# 輸出
canvas = canvas.convert('RGB')
canvas.save(OUT_OG, format='PNG', optimize=True)
print(f'wrote {OUT_OG.relative_to(ROOT)} ({OUT_OG.stat().st_size // 1024} KB)')

# Twitter 用同一張即可（推薦尺寸也是 1200x630 summary_large_image）
print('Twitter card uses same image (1200x630 summary_large_image).')
