import React from "react";

const routes = () => {
  return <div>routes</div>;
};

export default routes;
// import {
//   BrowserRouter,
//   Routes as BaseRoutes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import App from "./App";
// import Error404 from "./pages/Error404";
// import PersonalDetails from "./components/PersonalDetails";
// import VerifyDetails from "./components/VerifyDetails";
// import Login from "./pages/Login";
// import GlassX, { useStore, PersistedState } from "glassx";
// import { useEffect } from "react";
// import { logout } from "./components/auth/firebase/firebase";

// export const RequiresAuth: React.FC<any> = ({ children }) => {
//   const loggedInUser = GlassX.get("loggedInUser");

//   useEffect(() => {
//     if (!loggedInUser) {
//       <Navigate to="/login" />;
//     }
//   }, [loggedInUser]);

//   useEffect(() => {
//     console.log(loggedInUser);
//     if (!loggedInUser) {
//       <Navigate to="/login" />;
//     }
//   }, []);

//   return <>{children}</>;
// };

// const Routes: React.FC<any> = ({}) => {
//   useEffect(() => {
//     GlassX.store({
//       state: {
//         loggedInUser: null,
//       },
//       reducers: {
//         SET_LOGOUT: () => {
//           logout();
//           return {
//             hasAuth: false,
//             loggedInUser: null,
//           };
//         },
//       },
//       plugins: [new PersistedState()],
//     });
//   }, []);

//   return (
//     <BrowserRouter>
//       <BaseRoutes>
//         <Route
//           path="/"
//           element={
//             <RequiresAuth>
//               <App />
//             </RequiresAuth>
//           }
//         />
//         <Route
//           path="personal-details"
//           element={
//             <RequiresAuth>
//               <PersonalDetails />
//             </RequiresAuth>
//           }
//         />
//         <Route path="/verify-details" element={<VerifyDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="*" element={<Error404 />} />
//       </BaseRoutes>
//     </BrowserRouter>
//   );
// };

// export default Routes;
