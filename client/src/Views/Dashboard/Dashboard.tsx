import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Container } from "semantic-ui-react";
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
        fontSize: 16,
        fontFamily: "monospace",
        width: "80%",
        marginTop: 150,
      }}
    >
      <p style={{ fontWeight: 600, fontSize: 25 }}>MERN Stack Authentication</p>
      <p style={{ fontWeight: 600 }}>Description:</p>
      <p>
        The purpose of this application is to demonstrate a working knowledge of
        authentication and authorization w/ OAuth 2.0, as well as how to build
        and deploy a full-stack application. The application focuses more
        specifically, on Google and Facebook strategies with Passport.js, to
        authenticate users within the OAuth 2.0 protocols. I have also added a
        "local" strategy that allows a user to register a new account by
        entering a username (email) and password -instead of using the OAuth
        services. The password will be a salted, hashed password, that will be
        stored in a MongoDB database.
      </p>
      <p style={{ fontWeight: 600 }}>Details:</p>
      <ul style={{ lineHeight: "1.5rem" }}>
        <li>
          MongoDB, Express, React, Node.js (MERN Stack), w/ Passport.js for
          authentication
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
          all sign-in methods (OAuth and Local) to persist while always
          returning the same user object
        </li>
      </ul>
      <p style={{ fontWeight: 600 }}>Important Note:</p>
      <p>
        <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
          The application is still in the development phase concerning Facebook
          OAuth, which means there is currently only a single test user for this
          OAuth strategy.
        </span>{" "}
        You can, however, still register and log in using the Google OAuth, as
        well as the more traditional way of using a username and password.
      </p>
      {!currentUser && (
        <Button
          as={Link}
          to="/login"
          size="huge"
          // inverted
          style={{ marginTop: 30 }}
        >
          Go to Login
        </Button>
      )}
      {currentUser && (
        <Button
          as={Link}
          to={`/dashboard/user/"${currentUserId}`}
          size="huge"
          // inverted
          style={{ marginTop: 30 }}
        >
          Go to Private (Authorized) Dashboard
        </Button>
      )}
    </Container>
  );
};

export default observer(Dashboard);
