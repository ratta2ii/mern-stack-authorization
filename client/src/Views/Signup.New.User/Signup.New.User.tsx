import React from "react";
import { observer } from "mobx-react-lite";
import NewUserForm from "../../Components/New.User.Form/New.User.Form";
import GoogleAuth from "../../App/Auth/Google.Auth";
import FacebookAuth from "../../App/Auth/Facebook.Auth";
import GitHubAuth from "../../App/Auth/GitHub.Auth";

const SignupNewUser = () => {
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
        {/* //! NewUserForm Component */}
        <NewUserForm
          formName="Register New Account"
          formDescription="Enter your email and choose a password"
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

export default observer(SignupNewUser);