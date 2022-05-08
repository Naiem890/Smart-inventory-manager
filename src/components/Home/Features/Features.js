import React from "react";

const Features = () => {
  return (
    <div>
      <div className="max-w-7xl md:mt-20 mt-10  mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-semibold text-center mb-12">
          Our Features
        </h3>

        <div className="grid  gap-12 grid-cols-1 md:grid-cols-3">
          <div className="bg-white hover:shadow-lg delay-100 ease-in   text-center rounded-xl px-4 py-8">
            <h4 className="text-xl mt-2 mb-4 font-semibold ">Fast Response</h4>
            <p className="text-gray-400 px-5 mx-auto">
              We believe time is money. So we don't want our user to wait
              anymore. That's why we made this system very time efficient
            </p>
          </div>

          <div className="bg-white hover:shadow-lg delay-100 ease-in   text-center rounded-xl px-4 py-8">
            <h4 className="text-xl mt-2 mb-4 font-semibold ">
              Customize management
            </h4>
            <p className="text-gray-400 px-5 mx-auto">
              We developed feature keeping the user need in mind. That's why we
              added Customized Management so that user can manage their own
              products in one place.
            </p>
          </div>

          <div className="bg-white  hover:shadow-lg delay-100 ease-in text-center rounded-xl px-4 py-8">
            <h4 className="text-xl mt-2 mb-4 font-semibold ">Low Charge</h4>
            <p className="text-gray-400 px-5 mx-auto">
              We provide great solution with a affordable price. You need to pay
              a very less amount of money in compare to other compare
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
