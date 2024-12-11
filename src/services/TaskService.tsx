import api from "../config/api";
import ITaskData from "../types/Task";

const getAll = () => {
  return api.get<ITaskData>("/tasks");
};

const store = (data: any) => {
  return api.post<ITaskData>("/tasks", data);
};

const TaskService = {
  getAll,
  store,
};

export default TaskService;
