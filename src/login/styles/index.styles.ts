import { makeStyles, Theme, createStyles } from "@material-ui/core";

import colors from "../../common/styles/colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerPageLogin: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "right",
      width: "100%",
      height: "100vh",
      position: "fixed",
    },
    containerFormLogin: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    logo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    titleWelcome: {
      marginBottom: "20px !important",
    },
    subtitleWelcome: {
      fontSize: "14px",
      marginBottom: "20px !important",
    },
    buttonMargin: {
      marginTop: "50px !important",
      marginBottom: "50px !important",
    },
  })
);
