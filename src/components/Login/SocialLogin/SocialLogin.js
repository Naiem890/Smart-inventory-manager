import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  let buttonName;
  let errorMessage;

  const location = useLocation();
  //   console.log(location.pathname);

  if (location.pathname === "/login") {
    buttonName = "Sign In";
  } else {
    buttonName = "Sign Up";
  }

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  if (error || error1) {
    errorMessage = (
      <p className="text-red-500">{error?.message || error1?.message}</p>
    );
  }

  if (loading1 || loading) {
    errorMessage = <p className="text-green-500">Loading...</p>;
  }

  if (user || user1) {
    errorMessage = "";
  }

  return (
    <div>
      {errorMessage}
      <div>
        <div className="my-4 flex justify-center items-center">
          <div className="border-t-2 border-slate-200 flex-shrink-0 flex-1"></div>
          <p className="text-center bg-white mx-4 text-gray-400">Or</p>
          <div className="border-t-2 border-slate-200 flex-shrink-0 flex-1"></div>
        </div>
        <div className="flex gap-4 justify-between items-center">
          <button
            onClick={() => signInWithGoogle()}
            className="w-full text-green-500 rounded-full border-2 border-green-500 hover:text-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium   px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
          >
            Google {buttonName}
          </button>
          <button
            onClick={() => signInWithGithub()}
            className="w-full text-gray-800 rounded-full border-2 border-gray-800 hover:text-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium   px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
          >
            Github {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
