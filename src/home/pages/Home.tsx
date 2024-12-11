import React, { useEffect, useState } from "react";
import testeTemplate from "../../common/template";
import { Box } from "@mui/material";
import { useHomeStyles } from "../styles/home.styles";
import Header from "../components/Header";
import Content from "../components/Content";

function Home() {
  const classes = useHomeStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <Header />
        <Content />
      </Box>
    </Box>
  );
}
export default testeTemplate(Home);
