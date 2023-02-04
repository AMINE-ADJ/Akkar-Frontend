import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function UserProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.value);

  if (user.isAdmin) {
    return <Navigate to="/admin" replace />;

  } else {
    return children;
  }
}
