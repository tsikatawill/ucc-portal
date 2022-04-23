import { FC } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

const App: FC = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      <div className="sm:flex  h-[90vh]">
        <Sidebar />
        <main className="main flex-grow md:ml-[250px] ml-0">
          {children ? children : <Notifications />}
        </main>
        {!children && (
          <aside className="w-full sm:w-96">
            <div className="wrapper py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, id qui. Quibusdam error aliquid magni. Soluta optio esse
              modi illum recusandae accusantium tenetur eaque! Vero debitis
              laboriosam voluptatum qui modi.
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default App;
