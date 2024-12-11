import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useHomeStyles } from "../styles/home.styles";
import Responsible from "./Responsible";
import moment from "moment";
import colors from "../../common/styles/colors";
import { DONE, IDEA } from "../../common/constants";
import ModalAdd from "../../common/components/Modal";
import ViewTask from "./ViewTask";
import FlagIcon from "@mui/icons-material/Flag";
import flag from "../../assets/images/flag.png";

interface CardProps {
  task?: any;
}

function Card({ task }: CardProps) {
  const classes = useHomeStyles();

  const days = (date) => {
    const dateFuture = moment(date, "YYYY-MM-DD");
    const today = moment();
    const totalDays = dateFuture.diff(today, "days");

    if (task.stage == DONE) {
      if (totalDays >= 0) {
        return (
          <Typography
            sx={{ color: colors.green, fontWeight: "bold" }}
            variant="caption"
          >{`Dentro do prazo`}</Typography>
        );
      } else if (totalDays < 0) {
        return (
          <Typography
            variant="caption"
            sx={{ color: colors.red, fontWeight: "bold" }}
          >
            {`Fora do prazo`}
          </Typography>
        );
      }
    } else {
      if (totalDays >= 0) {
        return (
          <Typography
            sx={{
              color: task.stage == IDEA ? colors.green : colors.yellow,
              fontWeight: "bold",
            }}
            variant="caption"
          >{`Faltam ${totalDays} dias.`}</Typography>
        );
      } else if (totalDays < 0) {
        return (
          <Typography
            variant="caption"
            sx={{ color: colors.red, fontWeight: "bold" }}
          >
            {`Está atrasado há ${Math.abs(totalDays)} dias.`}
          </Typography>
        );
      }
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ModalAdd
        open={open}
        handleClose={handleClose}
        component={<ViewTask task={task} handleClose={handleClose} />}
      />
      <Box
        className={task.stage == DONE ? classes.cardDone : classes.card}
        onClick={handleClickOpen}
      >
        {task.stage == DONE && <img src={flag} className={classes.icon} />}
        <Typography variant="h6" fontWeight={700}>
          {task.title}
        </Typography>
        <Typography variant="body2" className={classes.descriptionCard}>
          {task.description.length > 200
            ? task.description.substring(0, 70) + " ..."
            : task.description}
        </Typography>
        <Box className={classes.boxDate}>
          <Typography variant="caption">
            Data limite: {moment(task.date).format("DD/MM")}
          </Typography>
          {days(task.date)}
        </Box>
        <Box className={classes.listUser}>
          {task?.responsibles.map((item, index) => (
            <Responsible key={index} responsible={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}
export default Card;
