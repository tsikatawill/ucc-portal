import GlassX, { useStore, useReducer } from "glassx";
import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

const Sidebar: FC = () => {
  const [showSidebar] = useStore("showSidebar");
  const [mobile, setMobile] = useStore("mobile");
  const [loggedInUser, setLoggedInUser] = useStore("loggedInUser");
  const handleLogout = useReducer("SET_LOGOUT");

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
        
      w-[250px] px-5 pt-5 h-screen fixed text-xs`}
    >
      {loggedInUser && (
        <div className="student-details flex items-center gap-2 bg-white rounded-md p-2 mb-5">
          <div className="profile-picture h-10 w-10 rounded-full bg-white grid place-content-center overflow-hidden">
            <img src={loggedInUser.photoURL} alt="" />
          </div>
          <div className="flex flex-col gap-0">
            <p className="student-name font-semibold">
              {loggedInUser.displayName}
            </p>
            <small className="index-number">AH/HIM/19/0000</small>
          </div>
        </div>
      )}

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
        {loggedInUser && <div onClick={handleLogout}>Logout</div>}
      </div>
    </aside>
  );
};

export default Sidebar;
