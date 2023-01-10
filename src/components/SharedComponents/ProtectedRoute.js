import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute() {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  if (user.isAdmin) {
    return <Navigate to="/admin" replace />;
  } else {
    alert("you are not authorized to get in here! it's for admins.");
    return <Navigate to="/authenticated" />;
  }
}
