module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'off-black': '#1A1A1A',
        'off-white': '#F5F5F5',
        'dark-cyan': '#0E9D9D',
        'cyan-hover': '#0EB1B1',
      },
      fontFamily: {
        heading: ['ClashGrotesk-Variable', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};