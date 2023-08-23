import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    colors: {
      blue: "#070223",
      purple: "#BF2CF9",
      gray: "#EDE9FF",
      graysoft: "#EDE8FF",
      green: "#A6FF00",
      lightgreen: "#292B51",
      white: "#FFFFFF",
    },
    container: { center: true },
    extend: {
      fontFamily: {
        "FKScreamer": ["FKScreamer"],
        "DMSans": ["DMSans"],
      },
    },
  },
};
