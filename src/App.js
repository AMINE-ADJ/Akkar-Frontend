import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomeBeforeAuth from "./pages/HomeBeforeAuth";
import HomeAfterAuth from "./pages/HomeAfterAuth";
import Details from "./pages/Details.js";
import Admin from "./pages/Admin";
import ProtectedAuthRoute from "./components/SharedComponents/ProtectedAuthRoute";
import UserProtectedRoute from "./components/SharedComponents/UserProtectedRoute";
import AdminProtectedRoute from "./components/SharedComponents/AdminProtectedRoute";
import { login } from "./feautures/user";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeBeforeAuth />} />
        <Route
          path="/authenticated"
          element={
            <ProtectedAuthRoute>
              <UserProtectedRoute>
                <HomeAfterAuth />
              </UserProtectedRoute>
            </ProtectedAuthRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedAuthRoute>
              <AdminProtectedRoute>
                <Admin />
              </AdminProtectedRoute>
            </ProtectedAuthRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
