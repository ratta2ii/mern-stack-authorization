import React from "react";
import { observer } from "mobx-react-lite";
import LoginForm from "../../Components/LoginForm/LoginForm";
import GoogleAuth from "../../App/Auth/GoogleAuth";
import FacebookAuth from "../../App/Auth/FacebookAuth";
import GitHubAuth from "../../App/Auth/GitHubAuth";

function Login() {
  return (
    <div
      style={{
        width: 450,
        margin: "150px auto",
        backgroundColor: "#d2d2d2",
        padding: 50,
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      }}
    >
      <div>
        {/* //! LoginForm Component */}
        <LoginForm
          formName="Login to your Account"
          formDescription="IMPORTANT: Your email is your username"
        />
      </div>

      <div>
        {/* //! GoogleAuth Component */}
        <GoogleAuth />
      </div>
      <div>
        {/* //! FacebookAuth Component */}
        <FacebookAuth />
      </div>
      <div>
        {/* //! GoogleAuth Component */}
        <GitHubAuth />
      </div>
    </div>
  );
}

export default observer(Login);
