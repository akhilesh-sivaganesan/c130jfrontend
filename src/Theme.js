import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#02255E",
      light: "#335c8c",
      dark: "#001536",
    },
    secondary: {
      main: "#3F88C5",
      light: "#6ab5f2",
      dark: "#006698",
    },
    error: {
      main: "#CA3C25",
      light: "#fd6d57",
      dark: "#920000",
    },
    warning: {
      main: "#F2A541",
      light: "#ffd27a",
      dark: "#ba7600",
    },
    background: {
      default: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: "Inter Tight, sans-serif",
  },
});

theme.components = {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: `linear-gradient(45deg, ${theme.palette.primary.main} 70%, ${theme.palette.primary.light} 90%)`,
          '&.Mui-disabled': {
            background: `gray`,
          },
        },
      },
    },
  };

export default theme;
