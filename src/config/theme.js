import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#000000",
      dark: "#444444",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#FFFFFF",
      dark: "#D3D3D3",
      contrastText: "#000",
      yellow: "#e4c907"
    },
    button: {
      main: "#D3D3D3",
      contrastText: "#000000"
    }
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
