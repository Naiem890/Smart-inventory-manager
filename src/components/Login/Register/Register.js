import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import registerImage from "../../../image/register.svg";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [termCheck, setTermCheck] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  let regStatus;

  const navigate = useNavigate();
  const handleRegister = (user) => {
    const { email, password } = user;

    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
  };
  if (loading) {
    regStatus = <p className="text-green-700">Creating User...</p>;
  }

  if (error) {
    regStatus = <p className="text-red-700">Error: {error?.message}</p>;
  }
  const handleCheckbox = () => {
    setTermCheck(!termCheck);
  };

  if (user) {
    navigate("/");
  }
  return (
    <div className="px-6 xl:px-0">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8  mt-8 rounded-xl">
        <div className="grid grid-cols-12 ">
          <div className=" mt-4 p-5 max-w-lg rounded-lg col-span-6">
            <img className=" " src={registerImage} alt="" />
          </div>
          <div className="col-span-6 ">
            <div className="p-4 max-w-md ml-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
              {/* =========== */}
              {/* Register Form  */}
              {/* =========== */}

              <form
                className="space-y-4"
                action="#"
                onSubmit={handleSubmit(handleRegister)}
              >
                <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
                  Create a new account
                </h5>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    {...register("name")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Full name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="example@email.com"
                    required=""
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your password
                    </label>
                    {/* <a
                      href="/"
                      className="ml-auto text-sm text-red-700 hover:underline dark:text-blue-500"
                    >
                      Forget Password?
                    </a> */}
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    {...register("password")}
                    placeholder="••••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required=""
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms-condition"
                        type="checkbox"
                        checked={termCheck}
                        onChange={handleCheckbox}
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <label
                      htmlFor="terms-condition"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Agree to our
                      <a href="/" className="text-blue-500 ml-1 ">
                        Terms and Condition
                      </a>
                    </label>
                  </div>
                </div>

                {/* Error Message Show */}
                <div>{regStatus}</div>

                <button
                  disabled={!termCheck}
                  type="submit"
                  className="w-full disabled:bg-gray-500 disabled:cursor-not-allowed text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                >
                  Create your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Already registered?
                  <Link
                    to="/login"
                    className="text-blue-700 hover:underline ml-1 dark:text-blue-500"
                  >
                    Login Here
                  </Link>
                </div>
                <div>
                  <div className="my-4 flex justify-center items-center">
                    <div className="border-t-2 border-slate-200 flex-shrink-0 flex-1"></div>
                    <p className="text-center bg-white mx-4 text-gray-400">
                      Or
                    </p>
                    <div className="border-t-2 border-slate-200 flex-shrink-0 flex-1"></div>
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <button
                      type="submit"
                      className="w-full text-green-500 rounded-full border-2 border-green-500 hover:text-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium   px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                    >
                      Google Sign Up
                    </button>
                    <button
                      type="submit"
                      className="w-full text-gray-800 rounded-full border-2 border-gray-800 hover:text-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium   px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                    >
                      Github Sign Up
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

export default Register;
