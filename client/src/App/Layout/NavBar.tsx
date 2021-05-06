import React, { useEffect, useState } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useStore } from "../Stores/store";
import { observer } from "mobx-react-lite";
import PassportIcon from "./../../Images/passport-js-icon.png";

const NavBar = () => {
  const { userStore } = useStore();
  const { logUserOut, currentUser } = userStore;
  const [currentUserName, setCurrentUserName] = useState<string>();

  useEffect(() => {
    if (currentUser) setCurrentUserName(currentUser.username);
    return () => {};
  }, [currentUser]);

  const handleLogUserOut = () => {
    setCurrentUserName("");
    logUserOut();
  };

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          <img
            src={PassportIcon}
            alt="logo"
            style={{ marginRight: 10 }}
          />
          MERN Stack Authentication
        </Menu.Item>
        {!currentUser && (
            <Menu.Item>
            <Button as={NavLink} to="/login" positive content="Login" />
            {/* Register Button (currrently just anchor text to create new account) */}
            {/* <Button
              as={NavLink}
              to="/signup"
              content="Register"
              style={{ marginLeft: 7 }}
            /> */}
          </Menu.Item>
        )}
        {currentUser && (
          <Menu.Item>
            <Button
              as={NavLink}
              to="/login"
              positive
              content="Logout"
              onClick={handleLogUserOut}
            />
          </Menu.Item>
        )}
      </Container>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {currentUser && (
          <h4
            style={{
              color: "white",
              fontWeight: 100,
              marginRight: 20,
            }}
          >
            {currentUserName}
          </h4>
        )}
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
