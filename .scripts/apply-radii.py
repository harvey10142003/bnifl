"""
一次性把硬邊角的 inline 元件樣式統一加上 CIS 規範圓角。
只加在還沒有 rounded-* 的字串上，不會重複。
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# (pattern, replacement) — pattern 必須描述「沒有 rounded」的樣態
RULES = [
    # 1) 徽章（gradient teal pill）
    (r'bg-gradient-platinum (px-3 py-1 text-\[11px\])(?![^"]*rounded)',
     r'bg-gradient-platinum \1 rounded-full'),
    (r'bg-pearl (px-3 py-1 text-\[11px\])(?![^"]*rounded)',
     r'bg-pearl \1 rounded-full'),

    # 2) 圖標方形容器
    (r'(flex h-\d+ w-\d+ items-center justify-center bg-gradient-platinum)(?![^"]*rounded)',
     r'\1 rounded-xl'),
    (r'(flex h-\d+ w-\d+ items-center justify-center bg-(?:teal|ink)-\d+)(?![^"]*rounded)',
     r'\1 rounded-xl'),
    (r'(flex h-\d+ w-\d+ items-center justify-center border border-(?:ink|teal)-\d+)(?![^"]*rounded)',
     r'\1 rounded-xl'),

    # 3) 卡片容器（bg-pearl* + border-ink-100，但目前沒 rounded）
    (r'bg-pearl(-\d+)? (border border-ink-100 p-\d+)(?![^"]*rounded)',
     r'bg-pearl\1 \2 rounded-2xl'),
    # 上方 catch 不到的「border-ink-100 p-X md:p-Y」變體
    (r'(bg-pearl(?:-\d+)?) (border border-ink-100 p-\d+ md:p-\d+)(?![^"]*rounded)',
     r'\1 \2 rounded-2xl'),

    # 4) 圖片/媒體框（aspect-* + overflow-hidden + bg-ink-）
    (r'(aspect-\[[\d/]+\] [^"]*?overflow-hidden bg-ink-\d+)(?![^"]*rounded)',
     r'\1 rounded-2xl'),
    (r'(relative aspect-\[[\d/]+\] [^"]*?bg-ink-\d+ overflow-hidden)(?![^"]*rounded)',
     r'\1 rounded-2xl'),

    # 5) 引言邊框
    (r'border-l-2 border-platinum-500 pl-6(?![^"]*rounded)',
     r'border-l-2 border-teal-500 pl-6 rounded-r-md'),
    (r'border-l-2 border-teal-500 pl-6(?![^"]*rounded)',
     r'border-l-2 border-teal-500 pl-6 rounded-r-md'),

    # 6) 地圖 iframe 容器
    (r'(aspect-\[[\d/]+\] (?:md:aspect-\[[\d/]+\] )?bg-ink-\d+ overflow-hidden)(?![^"]*rounded)',
     r'\1 rounded-2xl'),

    # 7) 表單成功狀態的 icon 球
    (r'(inline-flex h-16 w-16 items-center justify-center bg-gradient-platinum)(?![^"]*rounded)',
     r'\1 rounded-2xl'),
]

TARGET_GLOBS = ['app/**/*.tsx', 'components/**/*.tsx', 'pages/**/*.tsx']

changes = 0
for glob in TARGET_GLOBS:
    for path in ROOT.glob(glob):
        original = path.read_text(encoding='utf-8')
        updated = original
        for pat, repl in RULES:
            updated = re.sub(pat, repl, updated)
        if updated != original:
            path.write_text(updated, encoding='utf-8')
            print(f'updated: {path.relative_to(ROOT)}')
            changes += 1

print(f'\n{changes} files updated.')
