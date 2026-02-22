/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#FFD700',
          dim: 'rgba(201, 168, 76, 0.15)',
        },
        orange: {
          brand: '#E87722',
          dim: 'rgba(232, 119, 34, 0.15)',
        },
        bg: {
          primary: '#0a0a0a',
          secondary: '#0d0d1a',
          card: '#0f1535',
        },
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float-1': 'floatFish1 6s ease-in-out infinite',
        'float-2': 'floatFish2 8s ease-in-out infinite',
        'float-3': 'floatFish3 5s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'reveal-up': 'revealUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'twinkle': 'twinkle 2.5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
      },
      keyframes: {
        floatFish1: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(-5deg)' },
          '33%': { transform: 'translateY(-18px) translateX(8px) rotate(-3deg)' },
          '66%': { transform: 'translateY(-8px) translateX(-5px) rotate(-7deg)' },
        },
        floatFish2: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(5deg) scaleX(-1)' },
          '40%': { transform: 'translateY(-22px) translateX(-10px) rotate(3deg) scaleX(-1)' },
          '70%': { transform: 'translateY(-10px) translateX(6px) rotate(7deg) scaleX(-1)' },
        },
        floatFish3: {
          '0%, 100%': { transform: 'translateY(0px) rotate(8deg)' },
          '50%': { transform: 'translateY(-15px) rotate(4deg)' },
        },
        shimmer: {
          '0%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
          '100%': { opacity: '0.4' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 168, 76, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(201, 168, 76, 0)' },
        },
        revealUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.4)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
};