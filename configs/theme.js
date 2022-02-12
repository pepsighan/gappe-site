import { createTheme, darken, lighten } from "@mui/material";

const fontFamily =
  '"GlacialIndifference", "Roboto", "Helvetica", "Arial", sans-serif';

export default createTheme({
  typography: {
    fontFamily,
    h1: { fontFamily },
    h2: { fontFamily },
    h3: { fontFamily },
    h4: { fontFamily },
    h5: { fontFamily },
    h6: { fontFamily },
  },
  palette: {
    primary: {
      light: lighten("#410ef8", 0.2),
      main: "#410ef8",
      dark: darken("#410ef8", 0.2),
    },
  },
});
