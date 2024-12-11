import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ITaskData from "../../../types/Task";
import TaskService from "../../../services/TaskService";
import { toast } from "react-toastify";
import { IDEA, TODO, DOING, DONE } from "../../../common/constants";

export function useTask() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<ITaskData[]>([]);
  const [tasksIdea, setTasksIdea] = useState<ITaskData[]>([]);
  const [tasksToDo, setTasksToDo] = useState<ITaskData[]>([]);
  const [tasksDoing, setTasksDoing] = useState<ITaskData[]>([]);
  const [tasksDone, setTasksDone] = useState<ITaskData[]>([]);

  const getAll = () => {
    TaskService.getAll()
      .then((response: any) => {
        if (response.data) {
          const tasks = response.data;
          setTasks(tasks);
          setTasksIdea(tasks.filter((item) => item.stage === IDEA));
          setTasksToDo(tasks.filter((item) => item.stage === TODO));
          setTasksDoing(tasks.filter((item) => item.stage === DOING));
          setTasksDone(tasks.filter((item) => item.stage === DONE));
        }
      })
      .catch((e: any) => {});
  };

  const store = (data: any) => {
    TaskService.store(data)
      .then((response: any) => {
        if (response.data) {
          getAll();
          toast(response.data.Msg, {
            type: "success",
          });
          location.reload();
        }
      })
      .catch((e: any) => {});
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {}, [tasksDoing, tasksDone, tasksIdea, tasksToDo]);

  return {
    tasks,
    tasksDoing,
    tasksDone,
    tasksIdea,
    tasksToDo,
    store,
    getAll,
  };
}
