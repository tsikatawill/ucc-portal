import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="grid place-content-center h-[30vh]">
      <h1 className="text-3xl text-red-600 font-bold">404 Error</h1>
      <p>Page not found</p>
      <Link
        to={"/"}
        className="btn bg-blue-500 text-white w-fit mx-auto p-2 rounded-md mt-5"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error404;
