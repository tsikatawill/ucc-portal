import { FC, useContext } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { AppContext } from "../App";

const Sidebar: FC = () => {
  const appContext = useContext(AppContext);
  return (
    <aside
      className={`sidebar w-[200px] px-5 pt-5 h-screen fixed bg-blue-200 text-xs`}
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
      <ul>
        <li>Personal Details</li>
        <li>Verify Details</li>
        <li>Past Questions (Manual)</li>
        <li>MTN Data Bundle</li>
        <li>Statement of Results</li>
        <li>Survey</li>
        <li>Registration</li>
        <li>Fees</li>
        <li>Exams Timetable</li>
        <li>FAQ</li>
        <li>Reset Password</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
