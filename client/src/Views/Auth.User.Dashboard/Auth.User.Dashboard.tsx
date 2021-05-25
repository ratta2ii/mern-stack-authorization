import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import LoadingComponent from "../../App/Layout/Loading.Component";
import { useStore } from "../../App/Stores/store";
import AddPasswordForm from "../../Components/Add.Password.Form/Add.Password.Form";
import TestAuthButton from "../../Components/Test.Auth.Button/TestAuthButton";

const AuthUserDashBoard = (props: any) => {
  const { userStore } = useStore();
  const { loadUserById, loadingInitial, currentUser, isAuthenticated } =
    userStore;
  const { id } = useParams<{ id: string }>();

  const [displayPasswordForm, setDisplayPasswordForm] = useState(true);

  useEffect(() => {
    loadUserById(id).then((res) => {
      if (res?.localAccount) {
        setDisplayPasswordForm(false);
      }
    });
  }, [id, loadUserById]);

  // //* Loading Indicator
  if (loadingInitial && !currentUser && !isAuthenticated)
    return <LoadingComponent content="Loading app" />;
  // If a user signs in through OAuth (not "locally"), they will be asked to choose a password that can then be associated with that username and account returned by a sign-in provider. This will enable them to use "local" sign-in with their username (email) and password in subsequent visits, or, any, and all of the OAuth services will always be available and connected to the same user account.
  else if (
    currentUser &&
    isAuthenticated &&
    currentUser.hasOwnProperty("accounts") &&
    !currentUser.localAccount &&
    displayPasswordForm
  ) {
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
        <AddPasswordForm
          setDisplayPasswordForm={setDisplayPasswordForm}
          formName="Choose a password for this account:"
          formDescription="IMPORTANT: Choosing a password will enable alternative authentication methods using your email and password -in addition to the 3rd party registration (authentication) you are currently using."
        />
      </div>
    );
  }

  return (
    <>
      {currentUser && isAuthenticated && (
        <div>
          <ul>
            <li>
              <h3>ID: {currentUser._id}</h3>
            </li>
            <li>
              <h3>USERNAME: {currentUser.username}</h3>
            </li>
          </ul>
          <TestAuthButton />
          <Button
            as={Link}
            to="/dashboard"
            size="huge"
            style={{ marginTop: 15 }}
          >
            Go to Public Dashboard (Home)
          </Button>
        </div>
      )}
    </>
  );
};

export default observer(AuthUserDashBoard);
