import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.value);
  if (user.isAdmin) {
    return children;
  } else {
    // alert("you are not authorized to get in here! it's for admins.");
    return <Navigate to="/authenticated" replace />;

  }
}
