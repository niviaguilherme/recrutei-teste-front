import api from "../config/api";
import IStageData from "../types/Stage";

const getAll = () => {
  return api.get<IStageData>("/stages");
};

const StageService = {
  getAll,
};

export default StageService;
