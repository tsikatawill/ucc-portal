import React from "react";
import { FaFlagCheckered } from "react-icons/fa";
import App from "../App";
import ResultsTable from "./ResultsTable";
import { SampleStudentResults } from "./SampleStudentResults";

const StatementOfResults = () => {
  console.log(SampleStudentResults);
  return (
    <App>
      <section className="statement-of-results md:flex">
        <div className="p-5 flex-grow">
          <div className="header mb-5">
            <h1 className="text-center font-bold text-3xl">
              Statement Of Results
            </h1>
          </div>
          <div className="results-per-semester flex flex-col gap-10">
            {SampleStudentResults.length > 0 &&
              SampleStudentResults.map((item) => (
                <ResultsTable
                  academicYear={item.academicYear}
                  semester={item.semester}
                  semesterCourses={item.semesterCourses}
                />
              ))}
          </div>
        </div>
        <aside className="p-5 md:w-[20rem]">
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
