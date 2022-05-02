import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleLogin = ({ email }) => {
    console.log(email);

    const resetPassword = async () => {
      await sendPasswordResetEmail(email);
    };
    if (email) {
      resetPassword();
      toast("Sent email");
    } else {
      toast("Please enter  email");
    }
  };
  return (
    <>
      <div className="p-4 my-32 max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form
          className="space-y-4"
          action="#"
          onSubmit={handleSubmit(handleLogin)}
        >
          <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
            Reset your account password
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

          <button
            type="submit"
            className="w-full disabled:bg-gray-500 disabled:cursor-not-allowed text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
          >
            Reset Password
          </button>
          <div className="text-center">
            <Link to="/login" className=" cursor-pointer text-blue-500">
              Back to login page
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
