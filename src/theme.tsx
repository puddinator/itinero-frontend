import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    // Primary is pink
    primary: {
      50: "#ffe7f1",
      100: "#f6bed1",
      200: "#ea95b2",
      300: "#e06c93",
      400: "#d64374",
      500: "#bc2a5b",
      600: "#931f46",
      700: "#6a1532",
      800: "#410a1e",
      900: "#1c000b",
    },
    // Secondary is blue
    secondary: {
      50: "#e4e8ff",
      100: "#b2bbff",
      200: "#808dfe",
      300: "#4f5ffd",
      400: "#2033fb",
      500: "#0c19e2",
      600: "#0413b0",
      700: "#010d7f",
      800: "#00084e",
      900: "#00021e",
    },
    // Tertiary is orange
    tertiary: {
      50: "#ffefe0",
      100: "#fcd0b6",
      200: "#f6b289",
      300: "#f1935a",
      400: "#ee752d",
      500: "#d45b14",
      600: "#a5460f",
      700: "#763209",
      800: "#481d02",
      900: "#1d0800",
    },
  },
  fontConfig: {
    Lexend: {
      100: {
        normal: "Lexend_100Thin",
      },
      200: {
        normal: "Lexend_200ExtraLight",
      },
      300: {
        normal: "Lexend_300Light",
      },
      400: {
        normal: "Lexend_400Regular",
      },
      500: {
        normal: "Lexend_500Medium",
      },
      600: {
        normal: "Lexend_600SemiBold",
      },
      700: {
        normal: "Lexend_700Bold",
      },
      800: {
        normal: "Lexend_800ExtraBold",
      },
      900: {
        normal: "Lexend_900Black",
      },
    },
  },
  fonts: {
    heading: "Lexend",
    body: "Lexend",
    mono: "Lexend",
  },
});
