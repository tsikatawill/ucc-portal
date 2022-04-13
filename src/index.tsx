import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
// import { GeneralContext } from "./components/context/GeneralContext";
// import { GCInterface } from "./components/context/GeneralContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <GeneralContext.Provider value={{ name: "John" }}> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    {/* </GeneralContext.Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
