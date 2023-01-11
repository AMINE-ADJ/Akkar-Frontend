import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function UserProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.value);

  console.log(user);
  // console.log(user.isAdmin);
  if (user.isAdmin) {
    // alert("you are not authorized to get in here! it's for normal users.");
    return <Navigate to="/admin" replace />;

    // return;
  } else {
    console.log("Im in User now!");
    return children;
  }
}
