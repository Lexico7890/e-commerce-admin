import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-grey': '#373739',
        'custom-dark-grey': '#19191a',
        'custom-black': '#1C1C1C',
        'custom-dark-blue': '#60d4ea',
        'custom-light-blue': '#9ae5f3',
        'custom-dark-yellow': '#c9b977',
        'custom-light-yellow': '#ecdda2',
        'custom-purple-neon': '#c501e2',
        'custom-green-neon': '#2ef8a0',
        'custom-red-neon': '#ff0534',
        'custom-pink-neon': '#f82d97',
        'custom-blue-neon': '#01c4e7'
      }
    }
  },
  plugins: []
}
export default config
