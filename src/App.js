import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomeBeforeAuth from "./pages/HomeBeforeAuth";
import HomeAfterAuth from "./pages/HomeAfterAuth";
import Details from "./pages/Details.js";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/SharedComponents/ProtectedRoute";
import ProtectedAuthRoute from "./components/SharedComponents/ProtectedAuthRoute";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeBeforeAuth />} />
        <Route
          path="authenticated"
          element={
            <ProtectedAuthRoute>
              <HomeAfterAuth />
            </ProtectedAuthRoute>
          }
        />
        {/* <Route path="/authenticated" element={<HomeAfterAuth />} /> */}

        <Route
          path="/admin"
          element={
            <ProtectedAuthRoute>
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            </ProtectedAuthRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
