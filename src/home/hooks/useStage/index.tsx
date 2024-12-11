import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StageService from "../../../services/StageService";
import IStageData from "../../../types/Stage";

export function useStage() {
  const navigate = useNavigate();
  const [stages, setStages] = useState<IStageData[]>([]);

  const getAllStages = () => {
    StageService.getAll()
      .then((response: any) => {
        if (response.data) {
          setStages(response.data);
        }
      })
      .catch((e: any) => {});
  };

  useEffect(() => {
    getAllStages();
  }, []);

  return {
    getAllStages,
    stages,
  };
}
