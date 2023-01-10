import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../feautures/user";
export const LoginFunction = () => {

  // const [User, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // let res = null;
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

        // console.log({ type: "login try", user: User });
        // dispatch(login({ type: "login try", payload: User }));
          
        localStorage.setItem(
          "access-token",
          JSON.stringify(tokenResponse.access_token)
        );
        console.log({
          name: res.data.name,
          id: 0,
          email: res.data.email,
          isAdmin: true,
        });
        // dispatch(
        //   login({
        //     name: res.data.name,
        //     id: 0,
        //     email: res.data.email,
        //     isAdmin: true,
        //   })
        // );
        navigate("/authenticated");
        //here u Maj the isAdmin State (w redux), then import it in HomeAfterAuth page.
      } catch (error) {
        console.log(error);
      }
    },
  });

  return login;
};
