import React from "react";

const FacebookAuth = () => {
  const handleSignInClick = () => {
    // Successful logins will store a cookie session in the client
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div>
      <img
        src="/assets/facebook-social-sign-on.png"
        alt="facebook social media OAuth alternate sing-on"
        width="300"
        onClick={handleSignInClick}
        style={{
          height: 38,    
          marginTop: 10,
          marginLeft: 25,
          cursor: "pointer",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      />
    </div>
  );
};

export default FacebookAuth;
