import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const location = useLocation();

  const [user, loading] = useAuthState(auth);
  console.log(user);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    console.log("req");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
