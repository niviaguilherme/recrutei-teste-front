import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    container: {
      width: "100%",
      height: "auto",
    },
    contentContainer: {
      position: "relative",
      marginTop: 61,
      border: "1px solid transparent",
      minHeight: "1080px",
      transition: "1s left,1s all,1s opacity",
      [theme.breakpoints.between(900, 1200)]: {
        marginLeft: 0,
      },
    },
  })
);
