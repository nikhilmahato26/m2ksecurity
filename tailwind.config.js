export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        cyber: {
          blue: '#4FC3F7',
          cyan: '#00E5FF',
          dark: '#020B18',
          card: '#060F1E',
          border: '#0D2137',
        }
      },
      animation: {
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(79, 195, 247, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
