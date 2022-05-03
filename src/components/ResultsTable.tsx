import React, { FC } from "react";
import { semesterResultsInterface } from "../interfaces";

const ResultsTable: FC<semesterResultsInterface> = ({
  academicYear,
  semester,
  semesterCourses,
}) => {
  return (
    <div className="overflow-auto shadow-md py-2 uppercase">
      <h2 className="max-w-5xl mx-auto mb-3 font-semibold">
        <span className="academic-year">{academicYear}</span> Academic year,{" "}
        <span className="semester">{semester}</span> semester{" "}
      </h2>
      <table className="max-w-5xl mx-auto rounded-md overflow-hidden result-table">
        <thead>
          <tr></tr>
          <tr className="text-left table-header bg-gray-700 text-white">
            <th className="code w-20">Code</th>
            <th className="title w-full">Title</th>
            <th className="cr w-20">Cr</th>
            <th className="gd w-20">Gd</th>
            <th className="gp w-20">Gp</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {semesterCourses.map((course) => (
            <tr>
              <td>{course.code}</td>
              <td>{course.title}</td>
              <td>{course.cr}</td>
              <td>{course.gd}</td>
              <td>{course.gp}</td>
            </tr>
          ))}
          <tr className="total">
            <td colSpan={2}>GPA = 4.0 | CGPA = 4.0</td>
            <td>12</td>
            <td></td>
            <td>48</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
