import React from "react";
import { Box, Typography } from "@mui/material";
import { useHomeStyles } from "../styles/home.styles";
import moment from "moment";
import colors from "../../common/styles/colors";
import { DONE, IDEA } from "../../common/constants";

interface CardProps {
  task?: any;
  handleClose?: any;
}

function ViewTask({ task, handleClose }: CardProps) {
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

  return (
    <Box className={classes.card}>
      <Box className={classes.boxTitleView}>
        <Typography variant="h6" fontWeight={700}>
          {task.title}
        </Typography>
        <Box>
          {days(task.date)}
          {"   "}
          <Typography variant="caption" className={classes.boxViewDate}>
            {moment(task.date).format("DD/MM")}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.listUser}>
        Responsáveis:
        {task?.responsibles.map((item, index) => (
          <Typography variant="body2" sx={{ marginLeft: 1 }} key={index}>
            {item.name},
          </Typography>
        ))}
      </Box>

      <Box className={classes.boxDescView}>
        <Typography variant="body2" className={classes.descriptionCard}>
          {task.description}
        </Typography>
      </Box>
    </Box>
  );
}
export default ViewTask;
