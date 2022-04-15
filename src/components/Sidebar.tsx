import { FC, useContext } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarContext } from "./context/SidebarContext";

const Sidebar: FC = () => {
  const { mobile, showSidebar } = useContext(SidebarContext);

  return (
    <aside
      className={`sidebar bg-blue-200 ${mobile && "mobile"} ${
        showSidebar && "sidebar-open"
      }
        
      w-[250px] px-5 pt-5 h-screen fixed text-xs`}
    >
      <div className="student-details flex items-center gap-2 bg-white rounded-md p-2 mb-5">
        <div className="profile-picture h-10 w-10 rounded-full bg-white grid place-content-center overflow-hidden">
          <FaUserGraduate color="gray" size={25} />
        </div>
        <div className="flex flex-col gap-0">
          <p className="student-name font-semibold">John Doe</p>
          <small className="index-number">AH/HIM/19/0000</small>
        </div>
      </div>
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
        <Link to="/personal-details">Logout</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
