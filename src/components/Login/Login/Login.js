import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import loginImage from "../../../image/login.svg";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");

  const handleLogin = async (user) => {
    const { email, password } = user;
    await signInWithEmailAndPassword(email, password);
    reset();
  };

  let loginStatus;

  if (user && !user?.user?.emailVerified) {
    loginStatus = (
      <p className="text-red-700">First verify your email then try again</p>
    );
    signOut(auth);
    console.log(user.user.emailVerified);
  } else {
    // navigate("/");
  }
  if (loading) {
    loginStatus = <p className="text-green-700">Login...</p>;
  }

  if (error) {
    loginStatus = <p className="text-red-700">Error: {error?.message}</p>;
  }

  if (user && user?.user?.emailVerified) {
    // console.log(user.providerId);
    // console.log(user);
    navigate(from, { replace: true });
  }

  return (
    <div className="px-6 xl:px-0">
      <div className="max-w-6xl mx-auto  sm:p-6 lg:p-8  md:mt-8 rounded-xl">
        <div className="grid md:grid-cols-12  ">
          <div className=" mt-4 p-5 mx-auto md:mx-0 max-w-lg rounded-lg col-span-6">
            <img className=" " src={loginImage} alt="" />
          </div>
          <div className="col-span-6">
            <div className="p-4 mx-auto md:mx-0 max-w-md  md:ml-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
              {/* =========== */}
              {/* Register Form  */}
              {/* =========== */}

              <form
                className="space-y-4"
                action="#"
                onSubmit={handleSubmit(handleLogin)}
              >
                <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
                  Login to your account
                </h5>

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
                    {...register("email", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="example@email.com"
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
                    <Link
                      to="/reset-password"
                      className="ml-auto text-sm text-red-700 hover:underline cursor-pointer dark:text-blue-500"
                    >
                      Forget Password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    {...register("password", { required: true })}
                    placeholder="••••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms-condition"
                        type="checkbox"
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="terms-condition"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember Me?
                    </label>
                  </div>
                </div>

                {/* Error Message Show */}
                <div>{loginStatus}</div>

                <button
                  type="submit"
                  className="w-full disabled:bg-gray-500 disabled:cursor-not-allowed text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?
                  <Link
                    to="/register"
                    className="text-blue-700 hover:underline ml-1 dark:text-blue-500"
                  >
                    Create Account
                  </Link>
                </div>
                <SocialLogin></SocialLogin>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
