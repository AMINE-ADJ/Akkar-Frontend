import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../feautures/user";
export const LoginFunction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const googlelogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        axios
          .post("http://127.0.0.1:8000/api/utilisateurs/", {
            email: res.data.email,
            username: res.data.name,
          })
          .then((response) => {
            const user = response.data;
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(
              login({
                name: user.username,
                id: user.id,
                email: user.email,
                isAdmin: user.isadmin,
              })
            );
            if (user.isadmin) {
              navigate("/admin");
            } else {
              navigate("/authenticated");
            }
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });

        localStorage.setItem(
          "access-token",
          JSON.stringify(tokenResponse.access_token)
        );
      } catch (error) {
        console.log(error);
      }
    },
  });

  return googlelogin;
};
