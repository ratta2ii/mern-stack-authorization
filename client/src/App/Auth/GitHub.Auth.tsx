import React from "react";
import useStyles from "./social.icon.styles";
import GitHubIcon from "./../../Images/github-social-sign-on.png";

const GitHubAuth = () => {
  const classes = useStyles();  
  const handleSignInClick = () => {
    // Successful logins will store a cookie session in the client
    window.open("/api/auth/google", "_self");
  };

  return (
    <div>
      <img
        src={GitHubIcon}
        alt="google Oauth sign-on button"
        width="300"
        onClick={handleSignInClick}
        className={classes.imgStyles}
      />
    </div>
  );
};

export default GitHubAuth;
