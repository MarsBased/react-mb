module.exports = {
  purge: [],
  theme: {
    colors: {
      default: "var(--text-default-color)",
      accent: "var(--text-accent-color)",
      "accent-light": "var(--text-accent-light-color)",
      muted: "var(--text-muted-color)",
      "muted-light": "var(--text-muted-light-color)",
      page: "var(--page-background-color)",
      card: "var(--card-background-color)",
      button: "var(--button-background-color)",
      header: "var(--header-background-color)",
      error: "#c00",
    },
    extend: {
      colors: {},
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {},
  plugins: [],
};
