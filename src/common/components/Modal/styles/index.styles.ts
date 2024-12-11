import { makeStyles, Theme, createStyles } from "@material-ui/core";
import colors from "../../../styles/colors";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      marginTop: 30,
      height: "100vh",
      width: "100vw",
      flexDirection: "column",
    },
    containerForm: {
      backgroundColor: colors.white,
      padding: 20,
      borderRadius: 24,
      width: "30%",
    },
    buttonClose: {
      cursor: "pointer",
      backgroundColor: colors.white,
      marginBottom: 7,
    },
    fontButtonClose: {
      color: colors.grayDark,
    },
  })
);
