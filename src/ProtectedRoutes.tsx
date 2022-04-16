import { FC, useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/authContext";

const ProtectedRoutes: FC = ({ children }) => {
  const { state } = useContext(AuthContext);

  return state.loggedInUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
