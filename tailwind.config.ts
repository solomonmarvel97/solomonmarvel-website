import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          100: "hsl(var(--primary-100) / 0.14)",
          200: "hsl(var(--primary-200))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      ringOffsetColor: {
        background: "hsl(var(--background))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      /**
       * 3D button depth - same stack as `archive/ui` + aliases matching your design tokens
       * (`shadow-btn-default` / `hover` / `active`).
       */
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "btn-default":
          "inset 0 1px 0 0 rgba(255,255,255,.28), inset 0 -1px 0 0 rgba(0,0,0,.14), 0 0 0 1px rgba(0,0,0,.06), 0 4px 14px -2px rgba(0,0,0,.12), 0 2px 4px -2px rgba(0,0,0,.06)",
        "btn-hover":
          "inset 0 1px 0 0 rgba(255,255,255,.34), inset 0 -1px 0 0 rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.06), 0 6px 20px -2px rgba(0,0,0,.14), 0 2px 6px -2px rgba(0,0,0,.08)",
        "btn-active":
          "inset 0 1px 0 0 rgba(255,255,255,.22), inset 0 -1px 0 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.08), 0 2px 8px -2px rgba(0,0,0,.1)",
        "btn-primary":
          "inset 0 1px 0 0 rgba(255,255,255,.28), inset 0 -1px 0 0 rgba(0,0,0,.14), 0 0 0 1px rgba(0,0,0,.06), 0 4px 14px -2px rgba(0,0,0,.12), 0 2px 4px -2px rgba(0,0,0,.06)",
        "btn-primary-hover":
          "inset 0 1px 0 0 rgba(255,255,255,.34), inset 0 -1px 0 0 rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.06), 0 6px 20px -2px rgba(0,0,0,.14), 0 2px 6px -2px rgba(0,0,0,.08)",
        "btn-primary-active":
          "inset 0 1px 0 0 rgba(255,255,255,.22), inset 0 -1px 0 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.08), 0 2px 8px -2px rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
