import { FC } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

const App: FC = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      <div className="sm:flex h-[calc(90vh-5rem)]">
        <Sidebar />
        <main className="main flex-grow md:ml-[250px] ml-0">
          {children ? children : <Notifications />}
        </main>
        {!children && (
          <aside className="w-full sm:w-[500px]">
            <div className="p-5"></div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default App;
