import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useHomeStyles } from "../styles/home.styles";
import logo from "../../assets/images/logo.png";
import ModalAdd from "../../common/components/Modal";
import FormTask from "./FormTask";

function Header() {
  const classes = useHomeStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <ModalAdd
        open={open}
        handleClose={handleClose}
        component={<FormTask handleClose={handleClose} />}
      />
      <Box className={classes.header}>
        <img src={logo} />
        <Typography
          className={classes.title}
          sx={{ fontWeight: "bold", ml: 5 }}
        >
          Teste vaga front
        </Typography>
      </Box>
      <Box className={classes.boxOutButton}>
        <Box className={classes.boxButtonAdd}>
          <Button variant="contained" onClick={handleClickOpen}>
            Adicionar tarefa
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Header;
