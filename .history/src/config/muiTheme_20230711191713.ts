import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  background: "white",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1964,
    },
  },
  palette: {
    primary: {
      main: "##430099",
      dark: "#EB078C",
    },
    baseColor: "##430099",
    baseColorTxt: "#6c757d",
    lightGreyTxt: "#98a6ad",
    backgroundGray: "#F9F9F9",
    titleDarkRed: "#0B1B39",
    fontColorRed: "#EB078C",
  },
});

export default muiTheme;
