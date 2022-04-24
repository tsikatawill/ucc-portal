import { ChangeEvent, useState } from "react";
import App from "../App";
import MTNLogo from "../images/mtn-logo.jpg";

const MTNBundle = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [prenum, setPrenum] = useState("024");

  return (
    <App>
      <section className="mtn-bundle">
        <div className="p-5">
          <div className="mtn flex flex-col justify-center items-center rounded-md">
            <img
              src={MTNLogo}
              alt="mtn-logo"
              className="rounded-xl w-24 m-auto"
            />
            <h1 className="mt-5 font-bold text-3xl">MTN Data Bundle</h1>
            <p className="text-center w-full sm:max-w-md">
              The SRC in collaboration with MTN Ghana provides all UCC students
              with a monthly data bundle allowance.
            </p>

            <form
              className="mt-5 flex flex-col items-center"
              onSubmit={(e) => {
                e.preventDefault();
                phoneNumber.length < 9
                  ? alert("Your number is missing a few digits")
                  : phoneNumber.length > 9
                  ? alert("Your number has too many digits")
                  : alert(prenum + phoneNumber);
              }}
            >
              <div className="input-group flex flex-col gap-2 items-center mb-5">
                <label htmlFor="phone number">MTN Phone number</label>
                <div className="flex gap-2">
                  <select
                    name="mtn-type"
                    id="mtn-type"
                    className="p-3 bg-white border border-gray-500 rounded-md"
                    value={prenum}
                    onChange={(e) => {
                      setPrenum(e.target.value);
                    }}
                  >
                    <option value="024">024</option>
                    <option value="055">055</option>
                    <option value="059">059</option>
                  </select>
                  <input
                    type="number"
                    required
                    value={phoneNumber}
                    className="border border-gray-500 bg-white p-2 rounded-md"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-green-700 text-white rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </App>
  );
};

export default MTNBundle;
