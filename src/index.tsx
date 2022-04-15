import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import PersonalDetails from "./components/PersonalDetails";
import VerifyDetails from "./components/VerifyDetails";
import Login from "./pages/Login";
import GlassX, { PersistedState } from "glassx";

GlassX.store({
  state: { loggedInUser: null },
  plugins: [new PersistedState()],
});

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="personal-details" element={<PersonalDetails />} />
      </Route>
      <Route path="/verify-details" element={<VerifyDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
