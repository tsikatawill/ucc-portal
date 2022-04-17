import { useStore } from "glassx";
import { FC, useContext, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logout } from "../auth/firebase/firebase";
import { AuthContext } from "../context/authContext";

const Sidebar: FC = () => {
  const [showSidebar] = useStore("showSidebar");
  const [mobile, setMobile] = useStore("mobile");
  const { state } = useContext(AuthContext);
  const loggedInUser = state.loggedInUser;
  const windowEvent = (e?: any) => {
    if (window.innerWidth < 770) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowEvent);
    return () => {
      window.removeEventListener("resize", windowEvent);
    };
  }, []);

  useEffect(() => {
    windowEvent();
  }, []);

  return (
    <aside
      className={`sidebar bg-blue-200 ${mobile && "mobile"} ${
        showSidebar && "sidebar-open"
      }
        
      w-[250px] px-5 pt-5 h-screen fixed`}
    >
      <div className="sidebar-links flex flex-col gap-2">
        <Link to="/personal-details">Personal Details</Link>
        <Link to="/verify-details">Verify Details</Link>
        <Link to="/personal-details">Past Questions (Manual)</Link>
        <Link to="/personal-details">MTN Data Bundle</Link>
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
