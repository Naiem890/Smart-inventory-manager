import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-24 my-20">
        <div>
          <h1 className="text-6xl font-kanit mb-6 capitalize">
            Manager your headphone inventory smartly
          </h1>
          <p className="text-gray-500 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            maiores voluptates quibusdam illum soluta vero ducimus dolorem
            quidem labore quaerat, dolore voluptas sed doloremque quisquam non
            debitis. Accusantium, laboriosam sapiente!
          </p>

          <button className="inline-flex items-center px-7 py-3  mt-7 font-semibold text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Try Now
          </button>
        </div>
        <div>
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
