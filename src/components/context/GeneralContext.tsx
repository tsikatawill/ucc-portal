import { createContext } from "react";

export interface GCInterface {
  name: string;
}

export const GeneralContext = createContext({});

export const GeneralProvider = () => {
  // const [mobile, setMobile] = useState<boolean>(false);
  return <GeneralContext.Provider value={{}}></GeneralContext.Provider>;
};
