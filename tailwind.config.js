module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Navy
        primary: {
          DEFAULT: "#1B365D", // deep-navy
          50: "#F0F4F8", // navy-50
          100: "#D6E4ED", // navy-100
          200: "#B8CDE0", // navy-200
          300: "#9BB6D3", // navy-300
          400: "#7E9FC6", // navy-400
          500: "#1B365D", // navy-500
          600: "#162E52", // navy-600
          700: "#122647", // navy-700
          800: "#0D1E3C", // navy-800
          900: "#081631", // navy-900
        },
        // Secondary Colors - Supporting Blue
        secondary: {
          DEFAULT: "#2C5282", // blue-700
          50: "#EBF8FF", // blue-50
          100: "#BEE3F8", // blue-100
          200: "#90CDF4", // blue-200
          300: "#63B3ED", // blue-300
          400: "#4299E1", // blue-400
          500: "#3182CE", // blue-500
          600: "#2B77CB", // blue-600
          700: "#2C5282", // blue-700
          800: "#2A4365", // blue-800
          900: "#1A365D", // blue-900
        },
        // Accent Colors - Warm Gold
        accent: {
          DEFAULT: "#C6A96B", // gold-400
          50: "#FFFBF0", // gold-50
          100: "#FEF5E7", // gold-100
          200: "#FDE8C8", // gold-200
          300: "#FCDBA9", // gold-300
          400: "#C6A96B", // gold-400
          500: "#B7975A", // gold-500
          600: "#A88549", // gold-600
          700: "#997338", // gold-700
          800: "#8A6127", // gold-800
          900: "#7B4F16", // gold-900
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: {
          DEFAULT: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          300: "#CBD5E0", // gray-300
        },
        // Text Colors
        text: {
          primary: "#2D3748", // gray-800
          secondary: "#718096", // gray-500
          muted: "#A0AEC0", // gray-400
          inverse: "#FFFFFF", // white
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // green-500
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          200: "#9AE6B4", // green-200
        },
        warning: {
          DEFAULT: "#D69E2E", // yellow-600
          50: "#FFFFF0", // yellow-50
          100: "#FEFCBF", // yellow-100
          200: "#FAF089", // yellow-200
        },
        error: {
          DEFAULT: "#E53E3E", // red-500
          50: "#FED7D7", // red-50
          100: "#FEB2B2", // red-100
          200: "#FC8181", // red-200
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // gray-200
          light: "#F7FAFC", // gray-50
          focus: "#C6A96B", // gold-400
        },
      },
      fontFamily: {
        // Headlines and CTAs
        montserrat: ['Montserrat', 'sans-serif'],
        // Body text
        'open-sans': ['Open Sans', 'sans-serif'],
        // Technical specifications
        'source-code': ['Source Code Pro', 'monospace'],
        // Default sans-serif
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      boxShadow: {
        'custom-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'custom-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'cta': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'custom': '0.5rem',
        'custom-lg': '0.75rem',
        'custom-xl': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-in-out',
        'slide-up': 'slideUp 400ms ease-in-out',
        'scale-in': 'scaleIn 300ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      gradientColorStops: {
        'primary-to-secondary': 'linear-gradient(135deg, #1B365D, #2C5282)',
        'accent-fade': 'linear-gradient(135deg, #C6A96B, rgba(198, 169, 107, 0.1))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}