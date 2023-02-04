
import LoginNotFoundPage from "../LoginNotFoundPage";

export default function ProtectedAuthRoute({ children }) {
  const access_token = JSON.parse(localStorage.getItem("access-token"));
  if (access_token) {
    return children;
  } else {
    return <LoginNotFoundPage />;
  }
}
