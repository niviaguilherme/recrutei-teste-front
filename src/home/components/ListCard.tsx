import React from "react";
import { Box } from "@mui/material";
import { useHomeStyles } from "../styles/home.styles";
import Card from "./Card";

interface ListCardProps {
  tasks?: any;
}

function ListCard({ tasks }: ListCardProps) {
  const classes = useHomeStyles();

  return (
    <Box className={classes.listCard}>
      {tasks && tasks.map((task, index) => <Card key={index} task={task} />)}
    </Box>
  );
}
export default ListCard;
