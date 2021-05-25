import React from "react";
import GoogleIcon from "./../../../Images/google-social-sign-on.png";
import useStyles from "./social.icon.styles";

const GoogleAuth = () => {
  const classes = useStyles();
  const handleSignInClick = () => {
    window.open("https://mern-stack-authentication.herokuapp.com/api/auth/google", "_self");
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

