import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Container, Grid } from "semantic-ui-react";
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
        fontSize: 18,
        fontFamily: "monospace",
      }}
    >
      <p>Welcome to my MERN Stack Authentication Application</p>
      <p style={{ fontWeight: 600 }}>Description:</p>
      <p>
        The purpose of this application is to demonstrate a working knowledge of
        authentication using various OAuth Strategies. The app focuses
        specifically, on the Google, Facebook, and GitHub strategies in order to
        authenticate a user using OAuth 2.0. I have also added a "local"
        strategy so a user can sign-on using an email and password as well. The
        password will be stored as a salted hashed password in a MongoDB
        database.
      </p>
      <p style={{ fontWeight: 600 }}>Details:</p>
      <ul>
        <li>MongoDb, Express, React, Node.js (MERN) Stack</li>
        <li>Database hosted on AWS S3 through MongoDb Atlas</li>
        <li>
          Both the Express API and the React client are hosted side-by-side on
          Heroku
        </li>
        <li>
          The Express application is serving the React build/ folder as a static
          file
        </li>
        <li>
          All authentication is done server-side through routes on the Express
          server
        </li>
        <li>
          The Mongoose Schema, and code logic, is configured in a way to allow
          all sign-on methods (OAuth and Local) to persist while always returning the same user
          object
        </li>
      </ul>
      <p style={{ fontWeight: 600 }}>Important Note:</p>
      <p>
        The application is currently in maintenance with only a single test user
        for the OAuth strategies. You can however still log in through the more
        traditional way of a username and password.
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
