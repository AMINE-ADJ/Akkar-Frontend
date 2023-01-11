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
        //pass to backend useremail bach yrj3lk : id nd isAdmin
        //get user id and isAdmin from backend and pass it to ur object bach tkhdem bihom apres
        console.log(res.data.email);
        console.log(res.data.name);
        console.log(res.data);
        axios
          .post("http://127.0.0.1:8000/api/utilisateurs/", {
            email: res.data.email,
            username: res.data.name,
          })
          .then((response) => {
            const user = response.data;
            // user.isadmin=true; to test admin.
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(
              login({
                name: user.username,
                id: user.id,
                email: user.email,
                isAdmin: user.isadmin,
              })
            );
            console.log("is Admin in login : " + user.isadmin);
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
