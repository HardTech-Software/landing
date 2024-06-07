import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2441ff",
    },
    secondary: {
      main: "#fe71f4",
    },
    background: {
      default: "#262626",
      paper: "#fe71f4",
    },
    text: {
      primary: "#e5e5e5",
      secondary: "#2441ff",
    },
  },
  typography: {
    fontFamily: ["Exo 2"].join(","),
  },
});
