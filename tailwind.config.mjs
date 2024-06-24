/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'system-ui', 'sans-serif'],
    },
    colors: {
      primary: {
        'blue-500': 'hsl(220, 98%, 61%)',
        'blue-gradient-start': 'hsl(192, 100%, 67%)',
        'blue-gradient-end': 'hsl(280, 87%, 65%)',
      },
      neutral: {
        light: {
          'gray-100': 'hsl(0, 0%, 98%)',
          'gray-200': 'hsl(236, 33%, 92%)',
          'gray-300': 'hsl(233, 11%, 84%)',
          'gray-400': 'hsl(236, 9%, 61%)',
          'gray-500': 'hsl(235, 19%, 35%)',
        },
        dark: {
          'gray-200': 'hsl(236, 33%, 92%)',
          'gray-300': 'hsl(234, 39%, 85%)',
          'gray-500': 'hsl(234, 11%, 52%)',
          'gray-600': 'hsl(233, 14%, 35%)',
          'gray-700': 'hsl(237, 14%, 26%)',
          'gray-800': 'hsl(235, 24%, 19%)',
          'gray-900': 'hsl(235, 21%, 11%)',
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
