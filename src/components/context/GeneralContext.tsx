import { createContext, useState } from "react";

export interface GCInterface {
  name: string;
}

export const GeneralContext = createContext<GCInterface | null>(null);

export const GeneralProvider = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  return <GeneralContext.Provider value={mobile}></GeneralContext.Provider>;
};
