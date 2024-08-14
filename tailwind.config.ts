import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#D42427",
        "gray-900": "#101828",
        "gray-700": "#344054",
        "gray-600": "#475467",
        "gray-500": "#667085",
        "gray-400": "#98A2B3",
        "gray-300": "#D0D5DD",
        "gray-200": "#EAECF0",
        "gray-100": "#F2F4F7",
        "gray-50": "#F9FAFB",
        "error-900": "#7A271A",
        "error-700": "#B42318",
        "error-600": "#D92D20",
        "error-100": "#FEE4E2",
        "error-50": "#FEF3F2",

        "w-green": "#67B437",
        skeleton: "#40404021",
      },
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        infiniteSpin: "spin 600ms linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
