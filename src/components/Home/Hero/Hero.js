import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:gap-24 md:gap-10 gap-16 md:my-20 my-10">
        <div>
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-kanit mb-6 capitalize">
            Manager your headphone inventory smartly
          </h1>
          <p className="text-gray-500 lg:text-lg text-base">
            We offer you the best smart solution for inventory management with
            the advance authentication and fast response. We have focused more
            on user experience and good looking user interface.
          </p>

          <button className="inline-flex items-center px-7 py-3  mt-7 font-semibold text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Try Now
          </button>
        </div>
        <div className="sm:mx-28 mx-6 md:mx-0">
          <img
            src="https://i.ibb.co/0jw9yqz/headphones-mockup-floating-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
