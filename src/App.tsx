import { FC, useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  GeneralContext,
  GeneralProvider,
} from "./components/context/GeneralContext";
import { SidebarContextProvider } from "./components/context/SidebarContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App: FC = ({ children }) => {
  return (
    <SidebarContextProvider>
      <div className="App">
        <Navbar />
        <div className="flex h-[90vh]">
          <Sidebar />
          <main className="main flex-grow md:ml-[250px] ml-0 p-5 bg-white">
            {children}
          </main>
        </div>
      </div>
    </SidebarContextProvider>
  );
};

export default App;
