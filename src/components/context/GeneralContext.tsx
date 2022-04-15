import { createContext, FC, useState } from "react";

const props = {};

export const GeneralContext = createContext<any>({});

export const GeneralProvider: FC = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <GeneralContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </GeneralContext.Provider>
  );
};
