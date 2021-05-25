// import FacebookAuth from "../../App/Auth/Facebook.Auth";
// import GoogleAuth from "../../App/Auth/Google.Auth";
// import GitHubAuth from "../../App/Auth/GitHub.Auth";
import React from "react";
import GoogleAuthLogin from "../../App/Auth/GoogleLogin/GoogleAuthLogin";

const OAuthButtons = () => {
  return (
    <div>
      <GoogleAuthLogin />
      {/* 
      //! GoogleAuth Component 
      <div>
        <GoogleAuth />
      </div>

      <div>
       //! FacebookAuth Component 
        <FacebookAuth />
      </div>
    
      <div>
        //! GitHubAuth Component 
        <GitHubAuth />
      </div>
      */}
    </div>
  );
};

export default OAuthButtons;
