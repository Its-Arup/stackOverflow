import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const user = useSelector((store) => {
    return store.AuthReducer;
  });

  return <div>{user.isAuth ? children : <Navigate to={"/signin"} />}</div>;
}

export default PrivateRoute;
