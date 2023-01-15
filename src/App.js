import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomeBeforeAuth from "./pages/HomeBeforeAuth";
import HomeAfterAuth from "./pages/HomeAfterAuth";
import Details from "./components/HomeAfterAuth/MesAnnonces/Details";
import Admin from "./pages/Admin";
import PostForm from "./components/HomeAfterAuth/PostForm";
import ProtectedAuthRoute from "./components/SharedComponents/ProtectionRoutes/ProtectedAuthRoute";
import UserProtectedRoute from "./components/SharedComponents/ProtectionRoutes/UserProtectedRoute";
import AdminProtectedRoute from "./components/SharedComponents/ProtectionRoutes/AdminProtectedRoute";
import { login } from "./feautures/user";
import { useDispatch } from "react-redux";
import MesAnnonces from "./components/HomeAfterAuth/MesAnnonces/MesAnnonces";
import MainAfterAuth from "./components/HomeAfterAuth/MainAfterAuth/MainAfterAuth";
import SearchPage from "./components/HomeAfterAuth/SearchPage/SearchPage";
import MessagePage from "./components/HomeAfterAuth/Messages/MessagePage";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      user = { id: 0, email: "", isadmin: false, username: "" };
    } else {
      if (user.isadmin) {
        navigate("/admin");
      } else {
        navigate("/authenticated");
      }
    }
    console.log(user);
    dispatch(
      login({
        name: user.username,
        id: user.id,
        email: user.email,
        isAdmin: user.isadmin,
      })
    );
  }, []);

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
        >
          <Route path="" element={<MainAfterAuth />} />
          <Route path="mesannonces" element={<MesAnnonces />} />
          <Route path="mesmessages" element={<MessagePage />} />
          <Route path="detailes/:id" element={<Details />} />
          <Route path="posterannonce" element={<PostForm />} />
          <Route path="search/:params" element={<SearchPage/>}/>
        </Route>

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
