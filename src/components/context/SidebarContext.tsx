import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface SidebarContextInterface {
  mobile: boolean;
  setMobile: Dispatch<SetStateAction<boolean>>;
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextInterface>(
  {} as SidebarContextInterface
);

interface props {
  children: JSX.Element | JSX.Element[];
}

export const SidebarContextProvider: FC<props> = ({ children }) => {
  const [mobile, setMobile] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 770) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, [setMobile]);

  useEffect(() => {
    if (window.innerWidth < 770) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <SidebarContext.Provider
      value={{ mobile, setMobile, showSidebar, setShowSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
