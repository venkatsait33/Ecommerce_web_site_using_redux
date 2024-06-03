import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const auth = useSelector((store) => store.authReducer.isAuth);

  // we use location hook to identify the current page route and send the route path as a state to the login page to navigate to admin page after login
  const location = useLocation();
  //console.log(location);

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoute;
