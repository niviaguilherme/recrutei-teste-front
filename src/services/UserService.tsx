import api from "../config/api";
import IUserData from "../types/User";

const getAll = () => {
  return api.get<IUserData>("/users");
};

const UserService = {
  getAll,
};

export default UserService;
