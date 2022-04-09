import { GeneralContext } from "./GeneralContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const GeneralProvider = ({ children }: props) => {
  return (
    <GeneralContext.Provider value={{}}>{children}</GeneralContext.Provider>
  );
};
