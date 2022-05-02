import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import registerImage from "../../../image/register.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const [termCheck, setTermCheck] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  let regStatus;

  /* const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/login"; */

  const handleRegister = async (user) => {
    const { email, password } = user;

    console.log(email, password);
    await createUserWithEmailAndPassword(email, password);
    reset();
  };
  if (loading) {
    regStatus = <p className="text-green-700">Creating User...</p>;
  }

  if (error) {
    regStatus = <p className="text-red-700">Error: {error?.message}</p>;
  }

  /* const handleCheckbox = () => {
    setTermCheck(!termCheck);
  };
  useEffect(handleCheckbox, []); */

  if (user && !user?.user?.emailVerified) {
    signOut(auth);
    regStatus = (
      <div className="flex justify-between items-center">
        <p className="text-green-700">Please check your email and verify</p>
        <Link to="/login" className="text-blue-500">
          Go to login
        </Link>
      </div>
    );
  }
  if (user) {
    console.log(user);
    // navigate(from, { replace: true });

    // navigate("/login");
  }
  return (
    <div className="px-6 xl:px-0">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8  mt-2 rounded-xl">
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
                    {...register("name", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Full name"
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
                        checked={termCheck}
                        onChange={() => setTermCheck(!termCheck)}
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
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
                  className="w-full disabled:bg-gray-500  disabled:cursor-not-allowed text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
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
                <SocialLogin></SocialLogin>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
