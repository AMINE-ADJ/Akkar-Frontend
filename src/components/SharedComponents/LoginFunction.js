import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginFunction = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
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
        // console.log(tokenResponse);
        console.log(res.data.name);
        console.log(res.data.email);
        navigate("/authenticated");
        //here u Maj the isAdmin State (w redux), then import it in HomeAfterAuth page.
      } catch (error) {
        console.log(error);
      }
    },
  });

  return login;
};
