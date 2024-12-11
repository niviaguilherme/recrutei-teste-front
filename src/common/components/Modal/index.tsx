import React from "react";
import Button from "@mui/material/Button";
import { Avatar, Box, Modal } from "@mui/material";
import { useStyles } from "./styles/index.styles";
import CloseIcon from "@mui/icons-material/Close";

export default function ModalAdd({ open, handleClose, component }: any) {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.container}>
        <Box>
          <Avatar onClick={handleClose} className={classes.buttonClose}>
            <CloseIcon className={classes.fontButtonClose} />
          </Avatar>
        </Box>
        <Box className={classes.containerForm}>{component}</Box>
      </Box>
    </Modal>
  );
}
