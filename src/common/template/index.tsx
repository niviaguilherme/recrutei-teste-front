import React, { useState } from "react";
import { Box, CssBaseline } from "@material-ui/core";

import { useStyles } from "./styles/index.styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const Wrapper = (Component: any) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.container}>
        <ToastContainer position="bottom-right" newestOnTop theme="colored" />

        <Box component="main">
          <Component />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const testeTemplate = (InputComponent: any) => {
  return () => Wrapper(InputComponent);
};

export default testeTemplate;
