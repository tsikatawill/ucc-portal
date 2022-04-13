import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

export interface GeneralContextInterface {
  showOutlet: boolean;
  setShowOutlet: Dispatch<SetStateAction<boolean>>;
}

interface props {
  children: JSX.Element | JSX.Element[];
}

export const GeneralContext = createContext<GeneralContextInterface>(
  {} as GeneralContextInterface
);

export const GeneralProvider: FC<props> = ({ children }) => {
  const [showOutlet, setShowOutlet] = useState<boolean>(false);
  return (
    <GeneralContext.Provider value={{ showOutlet, setShowOutlet }}>
      {children}
    </GeneralContext.Provider>
  );
};
