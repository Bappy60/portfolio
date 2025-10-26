module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        uiBg: 'var(--color-ui-bg)',
        glass: 'rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
}