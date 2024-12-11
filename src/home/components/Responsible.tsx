import React from "react";
import { Box } from "@mui/material";
import { useHomeStyles } from "../styles/home.styles";
import moment from "moment";

interface ResponsibleProps {
  responsible?: any;
}

function Responsible({ responsible }: ResponsibleProps) {
  const classes = useHomeStyles();

  return <Box className={classes.responsible}>{responsible?.name}</Box>;
}
export default Responsible;
