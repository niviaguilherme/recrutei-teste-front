import React from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Login from "../login/pages/Login";
import Home from "../home/pages/Home";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default Routers;
