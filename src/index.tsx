import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import PersonalDetails from "./components/PersonalDetails";
import VerifyDetails from "./components/VerifyDetails";
import { AuthProvider } from "./context/authContext";
import "./index.css";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Signup from "./pages/Signup";
import ProtectedRoutes from "./ProtectedRoutes";
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/" element={<App />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/verify-details" element={<VerifyDetails />} />
          {/* </Route> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<PasswordReset />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
