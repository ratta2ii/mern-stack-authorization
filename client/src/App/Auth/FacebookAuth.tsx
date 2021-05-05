import React from "react";
import useStyles from "./social.icon.styles";

const FacebookAuth = () => {
  const classes = useStyles();
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
        className={classes.imgStyles}
      />
    </div>
  );
};

export default FacebookAuth;
