import React from "react";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";
import LoginService from "../../../services/LoginService";

export function useLogin() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get("email") == "") {
      toast("Por favor, preencha o e-mail", {
        type: "error",
      });
      return;
    }

    if (data.get("password") == "") {
      toast("Por favor, preencha a senha", {
        type: "error",
      });
      return;
    }

    const dataLogin = {
      email: data.get("email"),
      password: data.get("password"),
    };
    LoginService.login(dataLogin)
      .then((response: any) => {
        console.log(response);
        secureLocalStorage.setItem("token", response.data.token);

        navigate("/home");
      })
      .catch((e: any) => {
        toast("Credenciais Inválidas", {
          type: "error",
        });
      });
  };

  return {
    handleSubmit,
  };
}
