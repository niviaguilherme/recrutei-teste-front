import React, { useEffect } from "react";

import Form from "../components/form";
import Box from "@mui/material/Box";
import { useStyles } from "../styles/index.styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../common/theme";

export default function Login() {
  const classes = useStyles();
  const token = secureLocalStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.containerPageLogin}>
        <ToastContainer position="bottom-right" newestOnTop theme="colored" />
        <Form />
      </Box>
    </ThemeProvider>
  );
}
