import { FC, useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  GeneralContext,
  GeneralProvider,
} from "./components/context/GeneralContext";
import { SidebarContextProvider } from "./components/context/SidebarContext";
import Navbar from "./components/Navbar";
import PersonalDetails from "./components/PersonalDetails";
import Sidebar from "./components/Sidebar";

const App: FC = () => {
  const { showOutlet, setShowOutlet } = useContext(GeneralContext);
  const pathname = useLocation().pathname;

  // useEffect(() => {
  //   setShowOutlet(true);
  //   if (pathname !== "/") {
  //     setShowOutlet(true);
  //   } else {
  //     setShowOutlet(false);
  //   }
  //   console.log(pathname);
  // }, [pathname]);
  return (
    <GeneralProvider>
      <SidebarContextProvider>
        <div className="App">
          <Navbar />
          <div className="flex h-[90vh]">
            <Sidebar />
            <main className="main flex-grow md:ml-[250px] ml-0 p-5 bg-white">
              {showOutlet ? <Outlet /> : <PersonalDetails />}
            </main>
          </div>
        </div>
      </SidebarContextProvider>
    </GeneralProvider>
  );
};

export default App;
