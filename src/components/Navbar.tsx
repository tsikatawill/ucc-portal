import Logo from "../images/ucc-logo.gif";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "glassx";
import { logout } from "../auth/firebase/firebase";
import { AuthContext } from "../context/authContext";

const Navbar: FC = () => {
  const [showLogout, setShowLogout] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useStore("showSidebar");
  const { state } = useContext(AuthContext);
  const { loggedInUser } = state;
  console.log(loggedInUser);

  return (
    <nav className="navbar sticky top-0 w-full bg-slate-800 text-white z-50">
      <div className="wrapper py-2 relative z-50 h-full flex items-center justify-between">
        <div>React App</div>
        <Link to="/" className="logo items-center gap-2 hidden">
          <img src={Logo} alt="logo" width={"40px"} />
          <span className=" font-bold text-xl">Students' Portal</span>
        </Link>
        <div className="flex items-center gap-5">
          {loggedInUser ? (
            <div className="flex items-center gap-2">
              <div className="student-details flex items-center gap-2">
                <div className="profile-picture h-10 w-10 rounded-full overflow-hidden bg-white grid place-content-center">
                  <img src={loggedInUser.photoURL} alt="" />
                </div>
                <p className="student-name font-semibold text-lg">
                  {loggedInUser.displayName}
                </p>
              </div>
              <div className="drop-down-menu relative">
                <div
                  className="toggler"
                  onClick={() => {
                    setShowLogout(!showLogout);
                  }}
                >
                  <span className="font-extrabold">
                    <FaCaretDown size={30} />
                  </span>
                </div>
                {showLogout && (
                  <div className="menu absolute top-[100%] hover:bg-slate-200 cursor-pointer rounded-md z-10 right-2 p-2 bg-white text-black">
                    <p
                      className="py-1 px-2"
                      onClick={() => {
                        setShowLogout(!showLogout);
                        logout();
                      }}
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to="/login" className="login">
              Login
            </Link>
          )}

          <div
            className="sidebar-toggle inline-flex md:hidden p-1 border-2 hover:bg-slate-100 rounded-md hover:text-black cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FaBars size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
