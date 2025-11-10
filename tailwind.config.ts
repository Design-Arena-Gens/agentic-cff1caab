import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          950: "#0b1a2b",
        },
        planora: {
          sky: "#9fd7ff",
          ocean: "#3fc9c4",
          cloud: "#f4f8fb",
          twilight: "#1c2b4b",
        },
      },
      boxShadow: {
        floating: "0 20px 60px rgba(15, 64, 108, 0.15)",
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(135deg, rgba(159,215,255,1) 0%, rgba(63,201,196,0.65) 100%)",
        'card-gradient': "linear-gradient(160deg, rgba(244,248,251,0.85) 0%, rgba(255,255,255,0.65) 100%)",
      },
      borderRadius: {
        '4xl': '2.25rem',
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    },
  },
  plugins: [],
};

export default config;
