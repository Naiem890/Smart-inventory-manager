import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="py-36 mt-10 text-center bg-white">
        <h1 className="  text-8xl">
          4<span className="text-red-500">0</span>4
        </h1>
        <p className="mt-4 text-gray-400 text-xl mb-10">
          The page you requested could not found
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-7 py-3 font-semibold text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
