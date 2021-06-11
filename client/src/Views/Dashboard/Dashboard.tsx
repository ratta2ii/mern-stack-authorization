import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Container } from "semantic-ui-react";
import TestAuthButton from "./../../Components/Test.Auth.Button/TestAuthButton";
import { Link } from "react-router-dom";
import { useStore } from "../../App/Stores/store";

const Dashboard = (props: any) => {
  const { userStore } = useStore();
  const { currentUser } = userStore;
  const [currentUserId, setCurrentUserId] = useState<string>();

  useEffect(() => {
    if (currentUser) setCurrentUserId(currentUser._id);
    return () => {};
  }, [currentUser]);

  return (
    <Container
      style={{
        fontSize: 14,
        fontFamily: "monospace",
        width: "80%",
        marginTop: 130,
      }}
    >
      <p style={{ fontWeight: 600, fontSize: 25 }}>MERN Stack Authentication</p>
      <p style={{ fontWeight: 600 }}>Description:</p>
      <p>
        The purpose of this application is to demonstrate a working knowledge of
        various Auth Services, and the different security levels for each
        implementation. The application includes OAuth services, Salting and
        Hashing for standard login, as well as Cookies and Sessions.
        Additionally, a Google OAuth strategy offers users a way to be
        authorized to access the API using the OAuth 2.0 protocols; This
        strategy is considered the most secure for this application (Security
        level 6).
      </p>
      <p>
        I have also added a "local" strategy as well, that allows a user to
        register a new account with just a username and password -instead of
        using the more secure OAuth services. The password will be hashed, with
        salt (Security level 4), before being stored in a MongoDB database. In
        addition to the Auth services, the application also demonstrates a
        working knowledge on how to both build, and deploy, a full-stack MERN
        application.
      </p>
      <p style={{ fontStyle: "italic" }}>** Disclaimer **</p>
      <p>
        When Google authorizes a user for the first time, a user is prompted to
        enter a password after already receiving authorization to the
        API. I understand that this removes some of the purpose for this OAuth
        strategy, but for the sake of this app, and with trying to demonstrate a
        variety Auth Services, this prompt actually enables local sign-in
        capabilities for all subsequent visits to the app.
      </p>
      <p style={{ fontWeight: 600 }}>Details:</p>
      <ul style={{ lineHeight: "1.5rem" }}>
        <li>
          MongoDB, Express, React, Node.js (MERN Stack), w/ Passport.js
          middleware
        </li>
        <li>Database hosted on AWS S3 through MongoDB Atlas (DBaaS)</li>
        <li>
          Both the Express API and the React client are hosted side-by-side on
          Heroku (PaaS)
        </li>
        <li>
          The Express application is serving the React build/ folder as a static
          file
        </li>
        <li>
          All authentication is done server-side using passport.js to
          authenticate users
        </li>
        <li>
          The Mongoose Schema, and code logic, is configured in a way to allow
          both sign-in methods (OAuth and Local) to persist while always
          returning the same user object
        </li>
      </ul>
      <p style={{ fontWeight: 600 }}>Important Note:</p>
      <p>
        <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
          The application is still in the development phase. Please note that
          proper error handling, as well as the implementation of additional
          OAuth strategies, will still be added before fully reaching my project
          goals.
        </span>{" "}
        You can, however, still register and log in using the Google OAuth
        services, as well as the more traditional way of entering a username and
        password.
      </p>
      <TestAuthButton />
      {!currentUser && (
        <Button
          as={Link}
          to="/login"
          size="huge"
          style={{ marginTop: 15, marginBottom: 100 }}
        >
          Go to Login
        </Button>
      )}
      {currentUser && (
        <Button
          as={Link}
          to={`/dashboard/user/"${currentUserId}`}
          size="huge"
          style={{ marginTop: 15, marginBottom: 100 }}
        >
          Go to "Authorized" Dashboard
        </Button>
      )}
    </Container>
  );
};

export default observer(Dashboard);
