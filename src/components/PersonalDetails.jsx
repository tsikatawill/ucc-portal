import { FaUserGraduate } from "react-icons/fa";
import App from "../App";

const PersonalDetails = () => {
  return (
    <App>
      <section className="personal-details">
        <div className="header h-52 sm:h-80 mb-32 sm:mb-0 relative">
          <div
            className="bottom -bottom-32 bg-red-300 absolute sm:bottom-0 w-full pb-8"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.7), black, black, black, black, black, black, black, black)",
            }}
          >
            <div className="flex items-center flex-col sm:flex-row text-white gap-5 sm:gap-10 px-5">
              <div className="user-image-wrapper sm:ml-10 bg-white h-36 w-36 sm:w-44 sm:h-44 rounded-full flex justify-center items-center border-8 border-orange-500">
                <FaUserGraduate color="#333" size={60} />
              </div>
              <div className="text uppercase text-center sm:text-left">
                <h1 className="text-3xl font-bold">John K. Doe</h1>
                <p>AH/HIM/19/0000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex">
          <form
            className="p-5 flex-grow"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <legend className="text-center font-bold text-3xl mb-5">
              PERSONAL DETAILS
            </legend>
            <div className="user-details grid sm:grid-cols-2 sm:gap-3">
              <div className="user-detail-card">
                <label htmlFor="Title">Title:</label>
                <input type="text" id="Title" value="Mr." />
              </div>
              <div className="user-detail-card">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id="firstname" value="John" />
              </div>
              <div className="user-detail-card">
                <label htmlFor="middlename">Middle Name</label>
                <input type="text" id="middlename" value="Kofi" />
              </div>
              <div className="user-detail-card">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" value="Doe" />
              </div>
              <div className="user-detail-card">
                <label htmlFor="institutionalEmail">Institutional Email:</label>
                <input
                  type="email"
                  id="institutionalEmail"
                  value="djohn@stu.ucc.edu.gh"
                />
              </div>
              <div className="user-detail-card">
                <label htmlFor="password">Password:</label>
                <input type="password" value="passwordpassword" />
                <p className="text-blue-500 cursor-pointer">Reset password</p>
              </div>
              <div className="user-detail-card">
                <label htmlFor="indexNumber">Index Number:</label>
                <input type="text" id="indexNumber" value="AA/BBB/00/0000" />
              </div>
              <div className="user-detail-card">
                <label htmlFor="programme">Programme:</label>
                <input
                  type="text"
                  id="programme"
                  value="BSc. Interesting Programe"
                />
              </div>
              <div className="user-detail-card">
                <label htmlFor="currentMajor">Current Major:</label>
                <input type="text" id="currentMajor" value="Cryptocurrency" />
              </div>
              <div className="user-detail-card">
                <label htmlFor="gender">Gender:</label>
                <select name="gender" id="gender">
                  <option value="" disabled>
                    -- select gender --
                  </option>
                  <option value="male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="user-detail-card">
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" />
              </div>
              <div className="user-detail-card">
                <label htmlFor="level">Level:</label>
                <select name="level" id="level">
                  <option value="" disabled>
                    -- Select level --
                  </option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                </select>
              </div>
              <div className="user-detail-card">
                <label htmlFor="hall">Hall:</label>
                <select name="hall" id="level">
                  <option value="" disabled>
                    -- Select hall --
                  </option>
                  <option value="oguaah">Oguaah</option>
                  <option value="casford">Casford</option>
                  <option value="adehye">Adehye</option>
                  <option value="atl">ATL</option>
                </select>
              </div>
              <div className="user-detail-card">
                <label htmlFor="oRoomNumber">Room Number:</label>
                <input type="text" id="oRoomNumber" />
              </div>
              <div className="user-detail-card">
                <label htmlFor="gpsAddress">GPS Address:</label>
                <input type="text" id="gpsAddress" />
              </div>
              <div className="user-detail-card">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" />
              </div>
              <div className="user-detail-card">
                <label htmlFor="postAddress">Postal Address:</label>
                <input type="text" id="postAddress" />
              </div>
              <div className="user-detail-card">
                <label htmlFor="hometown">Hometown:</label>
                <input type="text" id="hometown" />
              </div>
              <div className="user-detail-card">
                <label htmlFor="placeOfBirth">Place of Birth:</label>
                <input type="text" id="placeOfBirth" />
              </div>
            </div>
            <div className="cta text-center mt-5">
              <button className="rounded-md bg-green-600 text-white px-4 py-2">
                Update details
              </button>
            </div>
          </form>
          <aside className="w-full hidden md:w-60 2xl:w-96 p-5">
            Lorem ipsum dolor sit amet.
          </aside>
        </div>
      </section>
    </App>
  );
};

export default PersonalDetails;
