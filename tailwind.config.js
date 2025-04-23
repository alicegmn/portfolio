export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: "#fe4629",
        background: "#4b0a23",
        // background: "rgba(var(--background))",
        container: "rgba(var(--container))",
        card: "rgba(var(--card))",
        border: "rgba(var(--border))",
        primaryText: "rgba(var(--primaryText))",
        secondaryText: "rgba(var(--secondaryText))",
        headings: "rgba(var(--headings))",
        button: "rgba(var(--button))",
        hoveredButton: "rgba(var(--hoveredButton))",
        activeButton: "rgba(var(--activeButton))",
        focus: "rgba(var(--focus))",
        accent: "rgba(var(--accent))",
      },
    },
  },
};
