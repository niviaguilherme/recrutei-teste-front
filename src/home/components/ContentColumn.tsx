import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useHomeStyles } from "../styles/home.styles";
import { useTask } from "../hooks/useTask";
import { IDEA, TODO, DOING, DONE } from "../../common/constants";
import ListCard from "./ListCard";

interface ContentColProps {
  stage?: number;
}

function ContentColumn({ stage }: ContentColProps) {
  const classes = useHomeStyles();

  const { tasksDoing, tasksDone, tasksToDo, tasksIdea } = useTask();

  useEffect(() => {}, [tasksDoing, tasksDone, tasksIdea, tasksToDo]);

  return (
    <Box>
      {stage == IDEA && (
        <Box>
          <Typography variant="caption">
            {tasksIdea.length} tarefa{tasksIdea.length > 1 ? "s" : ""}{" "}
          </Typography>
          <ListCard tasks={tasksIdea} />
        </Box>
      )}
      {stage == TODO && (
        <Box>
          <Typography variant="caption">
            {tasksToDo.length} tarefa{tasksToDo.length > 1 ? "s" : ""}{" "}
          </Typography>
          <ListCard tasks={tasksToDo} />
        </Box>
      )}
      {stage == DOING && (
        <Box>
          <Typography variant="caption">
            {tasksDoing.length} tarefa{tasksDoing.length > 1 ? "s" : ""}{" "}
          </Typography>
          <ListCard tasks={tasksDoing} />
        </Box>
      )}
      {stage == DONE && (
        <Box>
          <Typography variant="caption">
            {tasksDone.length} tarefa{tasksDone.length > 1 ? "s" : ""} concluída
            {tasksDone.length > 1 ? "s" : ""}{" "}
          </Typography>
          <ListCard tasks={tasksDone} />
        </Box>
      )}
    </Box>
  );
}
export default ContentColumn;
