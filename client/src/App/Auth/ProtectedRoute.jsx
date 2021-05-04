/*
! Component is a good monel, however, it does fit my situation
import React from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "./Auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;

! This fallows the singleton pattern for creating a singly user instance
? Notice how the class is being instantiated before it is being exported
* Example: import authInstance from "./../Auth";
class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        this.authenticated = true;
        console.log("AM I AUTH:", this.authenticated);
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();
*/