import { createContext, FC } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

interface AppContextInterface {
  mobile: boolean;
}

export const AppContext = createContext<AppContextInterface | null>(null);

const AppContent: AppContextInterface = {
  mobile: false,
};

const App: FC = () => {
  return (
    <AppContext.Provider value={AppContent}>
      <div className="App">
        <Navbar />
        <div className="flex h-[90vh]">
          <Sidebar />
          <main className="main flex-grow ml-[200px] bg-white"></main>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
