
import LoginNotFoundPage from "../LoginNotFoundPage";

export default function ProtectedAuthRoute({ children }) {
  //get isAuth from redux.
  // const isAuth = useSelector((state)=>state.user.value.isAuth);
  // console.log(isAuth);
  const access_token = JSON.parse(localStorage.getItem("access-token"));
  if (access_token) {
    return children;
  } else {
    // <Alert severity="error">You are not logged in, Please login to continue!</Alert>
    // alert("You are not logged in, please Login to continue!");
    return <LoginNotFoundPage />;
    // return <Navigate to="/" replace />;
  }
}
