import React from "react";
import { Navigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

function PrivateRoute({ children }: any) {
  const isAuthenticated = !!secureLocalStorage.getItem("token");

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
}

export default PrivateRoute;
