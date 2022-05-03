import React from "react";
import { FaFlagCheckered } from "react-icons/fa";
import App from "../App";

const StatementOfResults = () => {
  return (
    <App>
      <section className="statement-of-results sm:flex">
        <div className="p-5 flex-grow">
          <div className="header">
            <h1 className="text-center font-bold text-3xl">
              Statement Of Results
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              ipsum recusandae illo dolorum alias. Corrupti quae inventore quasi
              sequi quibusdam dignissimos! Voluptatibus, nemo. Quas in quos,
              accusantium magni eveniet anim!
            </p>
          </div>
        </div>
        <aside className="p-5 sm:w-[30rem]">
          <h2 className="text-center text-red-500 font-bold">Note:</h2>
          <p className="text-center">
            The status for each course is displayed below
          </p>
          <div className="statuses flex flex-col items-start mt-2 gap-3">
            <div className="inactive flex items-start gap-2">
              <div className="status-icon bg-red-500 mt-1 p-2 rounded-md">
                <FaFlagCheckered color="white" />
              </div>
              <div className="desc">
                <h3 className="font-bold p-0">Inactive</h3>
                <p>Pending to be assigned to lecturer.</p>
              </div>
            </div>
            <div className="with-lecturer flex items-start gap-2">
              <div className="status-icon bg-orange-500 mt-1 p-2 rounded-md">
                <FaFlagCheckered color="white" />
              </div>
              <div className="desc">
                <h3 className="font-bold p-0">With lecturer</h3>
                <p>Assessment sheet with lecturer.</p>
              </div>
            </div>
            <div className="with-department flex items-start gap-2">
              <div className="status-icon bg-yellow-500 mt-1 p-2 rounded-md">
                <FaFlagCheckered color="black" />
              </div>
              <div className="desc">
                <h3 className="font-bold p-0">With department</h3>
                <p>Assessment sheet with department.</p>
              </div>
            </div>
            <div className="with-faculty flex items-start gap-2">
              <div className="status-icon bg-blue-500 mt-1 p-2 rounded-md">
                <FaFlagCheckered color="white" />
              </div>
              <div className="desc">
                <h3 className="font-bold p-0">With faculty</h3>
                <p>Assessment sheet with faculty, pending approval.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </App>
  );
};

export default StatementOfResults;
