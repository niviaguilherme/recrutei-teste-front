import { makeStyles, Theme, createStyles } from "@material-ui/core";
import colors from "../../common/styles/colors";

export const useHomeStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 30,
    },
    header: {
      width: "100%",
      backgroundColor: colors.white,
      borderRadius: "24px",
      padding: 20,
      display: "flex",
      alignItems: "center",
    },
    title: {
      color: colors.blue,
    },
    boxOutButton: {
      display: "flex",
      justifyContent: "center",
    },
    boxButtonAdd: {
      backgroundColor: colors.white,
      borderBottomRightRadius: "24px",
      borderBottomLeftRadius: "24px",
      padding: 20,
      textAlign: "center",
    },
    titleStage: {
      fontSize: 20,
      padding: 20,
      fontWeight: "bold",
    },
    listCard: {
      padding: 5,
      cursor: "pointer",
    },
    card: {
      borderRadius: "24px",
      backgroundColor: colors.white,
      padding: 20,
      marginBottom: 20,
    },
    boxDate: {
      border: `1px dotted ${colors.grayDark}`,
      borderRadius: "12px",
      padding: 5,
      display: "flex",
      justifyContent: "space-between",
      marginTop: 10,
    },
    descriptionCard: {
      color: colors.grayDark,
    },
    responsible: {
      borderRadius: "6px",
      backgroundColor: colors.blueLight,
      color: colors.white,
      fontSize: 12,
      padding: 7,
      marginRight: 7,
      marginTop: 10,
    },
    listUser: {
      display: "flex",
      marginTop: 10,
      flexWrap: "wrap",
    },
    boxViewDate: {
      border: `1px dotted ${colors.grayDark}`,
      borderRadius: "7px",
      padding: 5,
    },
    boxTitleView: {
      display: "flex",
      justifyContent: "space-between",
    },
    boxDescView: {
      backgroundColor: colors.grayLight,
      borderRadius: "12px",
      padding: 12,
      marginTop: 10,
      overflowY: "auto",
      height: "500px",
    },
    cardDone: {
      border: `2px solid ${colors.green}`,
      borderRadius: "24px",
      backgroundColor: colors.white,
      padding: 20,
      marginBottom: 20,
      position: "relative",
    },

    icon: {
      position: "absolute",
      top: "-5px",
      left: "15px",
    },
  })
);
