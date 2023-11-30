import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Forum from "../Pages/Forum";
import PrivateRoute from "./PrivateRoute";
import Answer from "../Pages/Answer";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/singup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route
          path="/forum"
          element={
            <PrivateRoute>
              <Forum />
            </PrivateRoute>
          }
        />
        <Route
          path="/answer/:id"
          element={
            <PrivateRoute>
              <Answer />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
