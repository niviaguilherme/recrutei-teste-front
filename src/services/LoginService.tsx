import api from "../config/api";
import IAuthData from "../types/Auths";

const login = (data: any) => {
  return api.post<IAuthData>("/login", data);
};

const logout = () => {
  return api.post<IAuthData>("/logout");
};

const LoginService = {
  login,
  logout,
};

export default LoginService;
