import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero-1': "url('/lap.jpg')",
        'hero-2': "url('/lap1.jpg')",
        'hero-3': "url('/lap2.jpg')",
        'hero-4': "url('/lap3.jpg')",
      },
      animation: {
        'background-scroll': 'backgroundScroll 20s linear infinite',
      },
      keyframes: {
        backgroundScroll: {
          '0%': { backgroundImage: 'url(/lap.jpg)', backgroundPosition: 'center' },
          '25%': { backgroundImage: 'url(/lap1.jpg)', backgroundPosition: 'center' },
          '50%': { backgroundImage: 'url(/lap2.jpg)', backgroundPosition: 'center' },
          '75%': { backgroundImage: 'url(/lap3.jpg)', backgroundPosition: 'center' },
          '100%': { backgroundImage: 'url(/lap.jpg)', backgroundPosition: 'center' },
        }
      },
      fontSize: {
        'hero-title': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.06em', fontWeight: '800' }],
        'hero-subtitle': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.03em', fontWeight: '400' }],
        'tech-title': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.05em', fontWeight: '700' }],
        'tech-subtitle': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.03em', fontWeight: '600' }],
        'tech-body': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.02em' }],
        'tech-card-title': ['1.35rem', { lineHeight: '1.4', letterSpacing: '-0.025em', fontWeight: '600' }],
        'tech-card-description': ['1.1rem', { lineHeight: '1.5', letterSpacing: 'normal' }],
      },
      fontFamily: {
        'tech': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      },
      letterSpacing: {
        'tech-tight': '-0.032em',
        'tech-wide': '-0.022em',
      },
    },
  },
  plugins: [],
} satisfies Config;
