import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../../image/about.svg";
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2   items-center lg:gap-24 md:gap-10 gap-16 md:my-20 my-10">
        <div className="order-2 -mt-8 md:mt-0">
          <h3 className="lg:text-5xl md:text-5xl text-4xl font-kanit mb-6 capitalize">
            <div className="text-green-500">It's not just a software.</div> One
            stop solution for managing your inventory
          </h3>

          <Link
            to="/manage-inventory"
            className="inline-flex items-center px-7 py-3 mt-0  md:mt-7 font-semibold text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Try Now
          </Link>
        </div>
        <div className="sm:mx-28 mx-6 order-1 md:order-2 md:mx-0">
          <img src={aboutImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
