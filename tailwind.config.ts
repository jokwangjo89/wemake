import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './app/**/*.{js,ts,jsx,tsx}', // 🔥 이거 반드시 있어야 함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
