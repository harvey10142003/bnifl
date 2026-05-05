import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 品牌深藍（取自 logo「富聯」與「CHAPTER」字色）
        ink: {
          DEFAULT: '#1F2D3D',
          50: '#F4F6F8',
          100: '#E2E7ED',
          200: '#C0CAD5',
          300: '#94A3B5',
          400: '#67788D',
          500: '#475A72',
          600: '#324358',
          700: '#1F2D3D',
          800: '#162232',
          900: '#0F1A28'
        },
        // 品牌青綠（取自 logo「FULIAN」字色）
        teal: {
          DEFAULT: '#4F9DA0',
          50: '#EDF6F6',
          100: '#D4EAEB',
          200: '#A8D4D6',
          300: '#7CBEC1',
          400: '#4F9DA0',
          500: '#408588',
          600: '#346B6E',
          700: '#285255',
          800: '#1B393B',
          900: '#0E2122'
        },
        // 別名：保留 platinum 命名相容性，值對應到品牌青綠
        platinum: {
          DEFAULT: '#4F9DA0',
          50: '#EDF6F6',
          100: '#D4EAEB',
          200: '#A8D4D6',
          300: '#7CBEC1',
          400: '#4F9DA0',
          500: '#408588',
          600: '#346B6E',
          700: '#285255',
          800: '#1B393B',
          900: '#0E2122'
        },
        pearl: {
          DEFAULT: '#FAFAF7',
          50: '#FFFFFF',
          100: '#FAFAF7',
          200: '#F2F1EA',
          300: '#E6E4D8'
        }
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-tc)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        // 中文襯線改成中文黑體（Noto Sans TC heavy）配合 logo 字型
        serif: ['var(--font-noto-sans-tc)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-noto-sans-tc)', 'var(--font-inter)', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.2' }]
      },
      letterSpacing: {
        'widest-2': '0.25em'
      },
      backgroundImage: {
        'gradient-platinum': 'linear-gradient(135deg, #7CBEC1 0%, #4F9DA0 50%, #285255 100%)',
        'gradient-teal': 'linear-gradient(135deg, #7CBEC1 0%, #4F9DA0 50%, #285255 100%)',
        'gradient-ink': 'linear-gradient(180deg, #1F2D3D 0%, #2A3F58 100%)',
        'gradient-pearl': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF7 100%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer': 'shimmer 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(40px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        shimmer: { '0%, 100%': { opacity: '0.5' }, '50%': { opacity: '1' } }
      }
    }
  },
  plugins: []
};

export default config;
