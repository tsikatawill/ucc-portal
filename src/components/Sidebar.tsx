import { useStore } from "glassx";
import { FC, useContext, useEffect, useState } from "react";
import { FaSignOutAlt, FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logout } from "../auth/firebase/firebase";
import { AuthContext } from "../context/authContext";

const Sidebar: FC = () => {
  const [showSidebar] = useStore("showSidebar");
  const [mobile, setMobile] = useStore("mobile");
  const { state } = useContext(AuthContext);
  const loggedInUser = state.loggedInUser;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  useEffect(() => {
    windowWidth < 770 ? setMobile(true) : setMobile(false);
  }, [windowWidth]);

  return (
    <aside
      className={`sidebar bg-white border-2 border-r-gray-400 h-[calc(100vh-5rem)] overflow-auto ${
        mobile && "mobile"
      } ${showSidebar && "sidebar-open"}
        
      w-[250px] p-5 fixed`}
    >
      <div className="student-details mb-5 sm:hidden flex flex-col items-center gap-2">
        <div className="profile-picture h-20 w-20 rounded-full overflow-hidden bg-gray-400 shadow-lg shadow-gray-400 grid place-content-center">
          {loggedInUser.photoURL ? (
            <img src={loggedInUser.photoURL} alt="user" />
          ) : (
            <FaUserGraduate color="black" size="20" />
          )}
        </div>
        <p className="student-name font-bold text-xl uppercase mt-2">
          {loggedInUser.displayName || loggedInUser.email}
        </p>
      </div>
      {/* <div className="student-details mb-5 sm:hidden flex flex-col items-center gap-2">
        <div className="profile-picture h-20 w-20 rounded-full overflow-hidden bg-gray-200 shadow-lg shadow-gray-400 grid place-content-center">
          <FaUserGraduate color="black" size="40" />
        </div>
        <p className="student-name font-bold text-xl uppercase mt-2">
          John K. Doe
        </p>
        <p className="student-name font-semibold">AH/HIM/19/0000</p>
      </div> */}
      <div className="sidebar-links flex flex-col gap-2 ">
        <Link to="/personal-details">Personal Details</Link>
        <Link to="/verify-details">Verify Details</Link>
        <Link to="/personal-details">Past Questions (Manual)</Link>
        <Link to="/mtn-bundle">MTN Data Bundle</Link>
        <Link to="/statement-of-results">Statement of Results</Link>
        <Link to="/personal-details">Survey</Link>
        <Link to="/personal-details">Registration</Link>
        <Link to="/personal-details">Fees</Link>
        <Link to="/personal-details">Exam Timetable</Link>
        <Link to="/personal-details">FAQ</Link>
        <Link to="/personal-details">Reset Password</Link>
        {loggedInUser && (
          <div className="flex items-center gap-2" onClick={() => logout()}>
            Logout{" "}
            <span>
              <FaSignOutAlt />
            </span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
