import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        giest: ['Giest', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        custom: '-2px 4px 20px 0px rgba(0, 0, 0, 0.12)',
        outline  : '0px -8px 20.6px 0px rgba(0, 0, 0, 0.02) inset, 0px 2px 7px 0px rgba(0, 0, 0, 0.15)',
        flag:'-304.124px 4.158px 2.027px 0px #FFF inset, 0px 5.198px 7.277px 0px rgba(0, 0, 0, 0.14)'
      },
      color: {
        customDark: "#121118",
      },
    },

  },
  plugins: [],
};

export default config;
