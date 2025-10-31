import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth(); // ✅ use correct variable name
  return currentUser ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
