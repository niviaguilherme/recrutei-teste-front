import { makeStyles, Theme, createStyles } from "@material-ui/core";
import colors from "./colors";

export const useDefaultStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginLeft: "80px",
      position: "relative",
      marginTop: 100,
      width: "92%",
      paddingBottom: 50,
      [theme.breakpoints.down("sm")]: {
        marginLeft: "40px",
      },
    },
  })
);
