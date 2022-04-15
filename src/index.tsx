import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import PersonalDetails from "./components/PersonalDetails";
import VerifyDetails from "./components/VerifyDetails";
import Login from "./pages/Login";
import { GeneralProvider } from "./components/context/GeneralContext";
// import { GeneralContext } from "./components/context/GeneralContext";
// import { GCInterface } from "./components/context/GeneralContext";

ReactDOM.render(
  <GeneralProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="personal-details" element={<PersonalDetails />} />
        </Route>
        <Route path="/verify-details" element={<VerifyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </GeneralProvider>,
  document.getElementById("root")
);
