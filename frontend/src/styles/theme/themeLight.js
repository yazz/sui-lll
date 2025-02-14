import sharedStyles, { C } from "./shared";

export default {
  ...sharedStyles,
  palette: {
    type: C.LIGHT,
    brand: {
      light: "#e4e3fe",
      main: "#423efa",
      disabled: "rgba(66,62,250,0.06)",
      contrastText: "#ffffff",
    },
    brandSub: {
      light: "#e4e3fe",
      main: "#D9D8FE",
      disabled: "rgba(66,62,250,0.06)",
      contrastText: "#423EFA",
    },
    background: {
      primary: "#f5f4f7",
      secondary: "#ffffff",
      tertiary: "#fcfcfc",
      quaternary: "#fafafa",
      modal: "rgba(1,0,2,0.7)",
      dp: {
        0: "#fff",
        1: "#f2f2f2",
        2: "#ededed",
        3: "#ebebeb",
        4: "#e8e8e8",
        6: "#e3e3e3",
        8: "#e0e0e0",
        12: "#dbdbdb",
        16: "#d9d9d9",
        24: "#d6d6d6",
      },
    },
    text: {
      primary: "#19191e",
      high: "#19191e",
      secondary: "#737386",
      medium: "#737386",
      low: "#B4B1B7",
      tertiary: "rgba(0, 0, 0, 0.3)",
      highlight: "rgba(0, 0, 0, 1)",
      disabled: "rgba(0, 0, 0, 0.3)",
      link: "#0576fa",
    },
    positive: {
      high: "#19191E",
      medium: "#737386",
      low: "#B4B1B7",
    },
    negative: {
      full: "#FFFFFF",
      high: "#F7F7F7",
      medium: "#B1B1B7",
      low: "#727273",
      transparent: "rgba(225, 223, 222, 0.82)",
    },
  },
};
