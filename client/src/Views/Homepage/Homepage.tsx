import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

const HomePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/passport-js-icon.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          MERN Stack
        </Header>
        <Header as="h2" inverted content="Authentication with Passport.js" />
        {/* <Header
          as="h4"
          inverted
          content="Node.js | Express | JavaScript | React | TypeScript | MongoDB | Mongoose | Passport (OAuth 2.0)"
        /> */}
        <Button
          as={Link}
          to="/dashboard"
          size="huge"
          inverted
          style={{ marginTop: 30 }}
        >
          Show me the magic!
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
