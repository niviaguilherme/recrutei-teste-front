import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IUserData from "../../../types/User";
import UserService from "../../../services/UserService";

export function useUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUserData[]>([]);

  const getAll = () => {
    UserService.getAll()
      .then((response: any) => {
        if (response.data) {
          setUsers(response.data);
        }
      })
      .catch((e: any) => {});
  };

  useEffect(() => {
    getAll();
  }, []);

  return {
    users,
  };
}
