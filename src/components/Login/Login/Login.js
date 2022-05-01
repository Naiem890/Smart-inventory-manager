import React from "react";
import loginImage from "../../../image/login.svg";

const Login = () => {
  return (
    <div className="px-6 xl:px-0">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8  mt-12 rounded-xl">
        <div className="grid grid-cols-12 items-center">
          <div className=" p-5 max-w-lg rounded-lg col-span-6">
            <img className=" " src={loginImage} alt="" />
          </div>
          <div className="col-span-6 ">
            <div class="p-4 max-w-md ml-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form class="space-y-6" action="#">
                <h5 class="text-2xl font-bold font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h5>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required=""
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Forget Password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                >
                  Login to your account
                </button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?
                  <a
                    href="#"
                    class="text-blue-700 hover:underline ml-1 dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
                <div>
                  <div className="my-6 flex justify-center items-center">
                    <div className="border-t-2 border-slate-200 flex-shrink-0 flex-1"></div>
                    <p className="text-center bg-white mx-4 text-gray-400">
                      Or
                    </p>
                    <div className="border-t-2 border-slate-200 flex-shrink-0 flex-1"></div>
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <button
                      type="submit"
                      class="w-full text-green-500 rounded-full border-2 border-green-500 hover:text-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                    >
                      Google Log In
                    </button>
                    <button
                      type="submit"
                      class="w-full text-gray-800 rounded-full border-2 border-gray-800 hover:text-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                    >
                      Github Log In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
