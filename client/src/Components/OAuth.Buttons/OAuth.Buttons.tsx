import React from "react";
import FacebookAuth from "../../App/Auth/Facebook.Auth";
import GoogleAuth from "../../App/Auth/Google.Auth";

const OAuthButtons = () => {
  return (
    <div>
      <div>
        {/* //! GoogleAuth Component */}
        <GoogleAuth />
      </div>
      <div>
        {/* //! FacebookAuth Component */}
        <FacebookAuth />
      </div>
      {/* 
      <div>
        //! GitHubAuth Component 
        <GitHubAuth />
      </div>
      */}
    </div>
  );
};

export default OAuthButtons;
