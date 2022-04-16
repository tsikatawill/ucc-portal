import GlassX from "glassx";
import { FC, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(GlassX.get("isLoggedIn"));
  }, []);

  return isLoggedIn;
};

const ProtectedRoutes: FC = ({ children }) => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
