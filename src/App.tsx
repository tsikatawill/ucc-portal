import { FC, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import GlassX, { PersistedState } from "glassx";
import { logout } from "./components/auth/firebase/firebase";

const App: FC = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      <div className="flex h-[90vh]">
        <Sidebar />
        <main className="main flex-grow md:ml-[250px] ml-0 p-5 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default App;
