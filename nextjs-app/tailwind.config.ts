import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import {colors, nextui} from "@nextui-org/react";

export default {
  content: [
    "./app/**/*.{ts,tsx}", 
    "./sanity/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
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
      fontSize: {
        heading1: 'clamp(2rem, 1.5357rem + 2.3214vw, 3.625rem)',
        heading2: 'clamp(1.5rem, 1.1786rem + 1.6071vw, 2.625rem)',
        heading3: 'clamp(1.125rem, 0.9464rem + 0.8929vw, 1.75rem)',
        heading4: 'clamp(1rem, 0.8571rem + 0.7143vw, 1.5rem)',
        heading5: 'clamp(0.875rem, 0.8036rem + 0.3571vw, 1.125rem)',
        heading6: 'clamp(0.875rem, 0.8393rem + 0.1786vw, 1rem)',
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
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#343434'
          }
        },
        dark: {
          colors: {
            primary: '#fff'
          }
        }
      }
    }),
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
