import React from "react";
import NewUserForm from "../../Components/NewUserForm/NewUserForm";
import GoogleAuth from "../../App/Auth/GoogleAuth";
import FacebookAuth from "../../App/Auth/FacebookAuth";
import GitHubAuth from "../../App/Auth/GitHubAuth";

function SignupNewUser() {
  return (
    <div
      style={{
        width: 450,
        margin: "150px auto",
        backgroundColor: "#ccd0d1",
        padding: 50,
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      }}
    >
      <div>
        {/* //! NewUserForm Component */}
        <NewUserForm
          formName="Register New Account"
          formDescription="Choose a username and password:"
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

export default SignupNewUser;