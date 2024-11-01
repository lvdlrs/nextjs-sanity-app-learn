import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.5rem',
        lg: '4rem',
        xl: '7rem'
      }
    },
    extend: {
      colors: {
        grey: {
          100: '#EDEDED',
          300: '#CECECE',
          500: '#A7A7A7',
          700: '#626262',
          900: '#343434'
        },
        blue: {
          300: '#F0F7FD',
          400: '#0064A2'
        }
      },
      fontFamily: {
        sans: ["var(--font-sora)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    typography,
    function ({ addComponents }: { addComponents: (components: Record<string, any>) => void }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '1400px',
          },
          '@screen md': {
            maxWidth: '1400px',
          },
          '@screen lg': {
            maxWidth: '1400px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        },
      });
    }
    
  ],
} satisfies Config;
