import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useHomeStyles } from "../styles/home.styles";
import { useStage } from "../hooks/useStage";
import ContentColumn from "./ContentColumn";

function Content() {
  const classes = useHomeStyles();

  const { stages } = useStage();

  useEffect(() => {}, [stages]);

  return (
    <Grid container sx={{ mt: 10 }}>
      {stages.map((row, index) => (
        <Grid item md={3} key={index} className={classes.titleStage}>
          {row.title}
          <ContentColumn stage={row.id} />
        </Grid>
      ))}
    </Grid>
  );
}
export default Content;
