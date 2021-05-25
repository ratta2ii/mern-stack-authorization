import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./../../App/Stores/store";
import LoginForm from "../../Components/Login.Form/Login.Form";
import { useHistory } from "react-router";

const Login = function () {
  const { userStore } = useStore();
  const { isAuthenticated, currentUser, loadingInitial } = userStore;
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      history.push(`/dashboard/user/${currentUser._id}`);
    }
    return () => {}
  }, [currentUser, history, isAuthenticated, loadingInitial]);
  
  return (
    <div
      style={{
        width: 450,
        margin: "150px auto",
        backgroundColor: "#d2d2d2",
        padding: 50,
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      }}
    >
      <div>
        {/* //! LoginForm Component */}
        <LoginForm
          formName="Login to your Account"
          formDescription="IMPORTANT: Your email is your username"
        />
      </div>
    </div>
  );
}

export default observer(Login);
