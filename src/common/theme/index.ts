import { createTheme } from "@mui/material/styles";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.white,
      contrastText: colors.blue,
    },
  },
  typography: {
    fontFamily: `"${fonts.barlow}", "${fonts.inter}"`,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "24px", // Define o radius padrão para todos os TextFields
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: fonts.interComponent,
          fontWeight: 500,
          borderRadius: "24px",
        },
      },
    },
  },
});

export default theme;
