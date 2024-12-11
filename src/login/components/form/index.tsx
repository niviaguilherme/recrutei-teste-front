import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useStyles } from "../../styles/index.styles";
import logo from "../../../assets/images/logo.png";
import { useLogin } from "../../hooks/useLogin";

export default function SignIn() {
  const classes = useStyles();
  const { handleSubmit } = useLogin();

  return (
    <Box
      className={classes.containerFormLogin}
      sx={{
        width: { lg: "30%" },
        backgroundColor: { lg: "#FFFFFF" },
        boxShadow: { lg: "0px 3px 20px rgba(65, 56, 96, 0.7)" },
        justifyContent: { lg: "center" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: { xs: "40px 30px", lg: 10 },
          textAlign: "center",
        }}
      >
        <Box className={classes.logo}>
          <img src={logo} style={{ width: 50 }} />
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            variant="outlined"
          />{" "}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="outlined"
          />{" "}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.buttonMargin}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
