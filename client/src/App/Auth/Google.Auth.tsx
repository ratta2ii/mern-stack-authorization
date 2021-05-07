import React from "react";
import useStyles from "./social.icon.styles";
import GoogleIcon from "./../../Images/google-social-sign-on.png";

const GoogleAuth = () => {
  const classes = useStyles();
  const handleSignInClick = () => {
    // Successful logins will store a cookie session in the client
    // window.open("http://localhost:5000/auth/google", "_self");
    window.open("https://mern-stack-authentication.herokuapp.com/auth/google", "_self");
  };

  return (
    <div>
      <img
        src={GoogleIcon}
        alt="google Oauth sign-on button"
        width="300"
        onClick={handleSignInClick}
        className={classes.imgStyles}
        style={{ marginTop: 30 }}
      />
    </div>
  );
};

export default GoogleAuth;
