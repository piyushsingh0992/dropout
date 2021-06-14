import React from "react";
import { useParams, Navigate, Route } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext.js";

const PrivateRoute = ({ path, ...props }) => {
  const { login } = useAuth();

  let paramsArray = useParams();
  let pathArray = path.split(":");
  let newArray = pathArray.map((item) => {
    if (paramsArray[item]) {
      return paramsArray[item];
    }
    return item;
  });
  let newPath = newArray.join("");

  return login ? (
    <Route to={path} {...props} />
  ) : (
    <Navigate state={{ from: newPath }} replace to="/login" />
  );
};

export default PrivateRoute;
