import Logo from "../images/ucc-logo.gif";
import { FaBars, FaCaretDown, FaUserGraduate } from "react-icons/fa";
import { FC, useState } from "react";

const Navbar: FC = () => {
  const [showLogout, setShowLogout] = useState<boolean>(false);
  return (
    <nav className="navbar h-[10vh] fixed top-0 w-full bg-slate-800 text-white z-50">
      <div className="wrapper py-2 relative z-50 h-full flex items-center justify-between">
        <div className="logo flex items-center gap-2 cursor-pointer">
          <img src={Logo} alt="logo" width={"40px"} />
          <span className=" font-bold text-xl">Students' Portal</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="student-details flex items-center gap-2">
            <div className="profile-picture h-10 w-10 rounded-full bg-white grid place-content-center">
              <FaUserGraduate color="gray" size={25} />
            </div>
            <p className="student-name font-semibold text-lg">John Doe</p>
          </div>
          <div className="drop-down-menu">
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
              <div className="menu absolute hover:bg-slate-200 cursor-pointer rounded-md z-10 top-[70%] right-2 p-2 bg-white text-black">
                <p
                  className="py-1 px-2"
                  onClick={() => {
                    setShowLogout(false);
                  }}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
          <div className="sidebar-toggle inline-flex md:hidden p-1 border-2 hover:bg-slate-100 rounded-md hover:text-black cursor-pointer">
            <FaBars size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
