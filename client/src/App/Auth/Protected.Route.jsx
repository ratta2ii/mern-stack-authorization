// ! Component is a good model, however, it does fit my situation
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useStore } from "../Stores/store";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { userStore } = useStore();
  const { isAuthenticated, currentUser } = userStore;

  useEffect(() => {
  }, [isAuthenticated, currentUser])
  
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated || currentUser) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default observer(ProtectedRoute);

/*
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