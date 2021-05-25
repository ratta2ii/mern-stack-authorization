import React from "react";
import GoogleLogin from "react-google-login";
import GoogleButton from "react-google-button";
import { useStore } from "../../Stores/store";
import { useHistory } from "react-router";
import "./googleLogin.css";

const GoogleAuthLogin = () => {
  const { userStore } = useStore();
  const { setUserFromOAuth } = userStore;
  const history = useHistory();

  // Make sure login is before its invocation since its a variable
  const login = async (code: string) => {
    return fetch("/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    });
  };

  const responseGoogle = async (authResult: any) => {
    try {
      if (authResult["code"]) {
        login(authResult["code"]).then((res: any) => {
          setUserFromOAuth(res.user).then(() => {
            history.push(`/dashboard/user/${res.user._id}`);
          });
        });
      } else {
        throw new Error(authResult);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-page">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
        responseType="code"
        /**
         * To get access_token and refresh_token in server side, the data for redirect_uri
         * should be postmessage, to get credentials without redirect uri.
         */
        redirectUri="postmessage"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <GoogleButton
            onClick={renderProps.onClick}
            style={{ backgroundColor: "cornflowerblue" }}
          >
            Login with Google Account
          </GoogleButton>
        )}
      />
    </div>
  );
};

export default GoogleAuthLogin;
