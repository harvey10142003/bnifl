import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1426',
          50: '#F4F5F8',
          100: '#E5E8EE',
          200: '#C5CCD9',
          300: '#9AA5BB',
          400: '#6B7891',
          500: '#475266',
          600: '#2E3848',
          700: '#1A2236',
          800: '#11192B',
          900: '#0B1426'
        },
        platinum: {
          DEFAULT: '#C9B47C',
          50: '#FBF9F2',
          100: '#F5F0DF',
          200: '#EBE0BA',
          300: '#DECC93',
          400: '#C9B47C',
          500: '#B89C5F',
          600: '#9A8048',
          700: '#76623A',
          800: '#52442B',
          900: '#33291A'
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
        serif: ['var(--font-noto-serif-tc)', 'var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'var(--font-noto-serif-tc)', 'serif']
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
        'gradient-platinum': 'linear-gradient(135deg, #DECC93 0%, #C9B47C 50%, #9A8048 100%)',
        'gradient-ink': 'linear-gradient(180deg, #0B1426 0%, #1A2236 100%)',
        'gradient-pearl': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF7 100%)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")'
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
