// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Mulish, Arial, sans-serif",
  },
  palette: {
    background: {
      default: "#F2F5FC",
      paper: "#fff",
    },
    primary: {
      main: "#F26434",
    },
    text: {
      primary: "#000",
    },
  },
});

export default theme;
