import React from "react";
import useStyles from "./social.icon.styles";
import FacebookIcon from "./../../Images/facebook-social-sign-on.png";

const FacebookAuth = () => {
  const classes = useStyles();
  const handleSignInClick = () => {
    // Successful logins will store a cookie session in the client
    window.open("/api/auth/facebook", "_self");
  };

  return (
    <div>
      <img
        src={FacebookIcon}
        alt="facebook social media OAuth alternate sing-on"
        width="300"
        onClick={handleSignInClick}
        className={classes.imgStyles}
      />
    </div>
  );
};

export default FacebookAuth;
