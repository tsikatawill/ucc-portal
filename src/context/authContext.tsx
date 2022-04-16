import { createContext, FC, useEffect, useReducer } from "react";
import { firebaseAuth } from "../auth/firebase/firebase";
import { IAction, IAuthState } from "../interfaces";

const initialState: IAuthState = {
  isLoggedIn: false,
  loggedInUser: {},
};

export const AuthContext = createContext<IAuthState | any>(initialState);

const reducer = (state: IAuthState, action: IAction) => {
  switch (action.type) {
    case "LOGIN":
      const loginObj: IAuthState = {
        isLoggedIn: true,
        loggedInUser: action.payload,
      };
      localStorage.setItem("loginDetails", JSON.stringify(loginObj));
      return loginObj;

    case "LOGOUT":
      localStorage.removeItem("loginDetails");
      return {
        isLoggedIn: false,
        loggedInUser: null,
      };
    default:
      return state;
  }
};

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) =>
      user
        ? dispatch({ type: "LOGIN", payload: user })
        : dispatch({ type: "LOGOUT", payload: user })
    );
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
