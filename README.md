# MERN Stack Authentication

##### Live Demo: [MERN Stack Authentication Website](https://mern-stack-authentication.herokuapp.com/)

##### Repository: [github.com/ratta2ii/mern-stack-authorization](https://github.com/ratta2ii/mern-stack-authorization)

##### Landing Page

![ Screenshot of Project ](./client/src/Images/screenshot-home.png)

##### Dashboard

![ Screenshot of Project ](./client/src/Images/screenshot-dashboard.png)

##### Login

![ Screenshot of Project ](./client/src/Images/screenshot-login.png)

#

### Description:

The purpose of this application is to demonstrate a working knowledge of
various Auth Services, and the different security levels for each
implementation. The application includes Salting and
Hashing, Cookies and Sessions, as well as OAuth services.

A Google OAuth strategy offers users a way to be
authenticated, and then authorized, to access the backend API using OAuth 2.0 protocols; This
strategy is considered the most secure for this application (Security
level 6). I have also added a "local" strategy as well, that allows a user to
register a new account with a username and password -instead of
using the more secure OAuth services. The password will be hashed, with
salt (Security level 4), and then stored in a MongoDB database.

In addition to the Auth services, the application also demonstrates a
working knowledge on how to both build, and deploy, a full-stack MERN
application to a production environment.

### Project Details:

- MongoDB, Express, React, Node.js (MERN Stack), w/ Passport.js middleware
- Database hosted on AWS S3 through MongoDB Atlas (DBaaS)
- Both the Express API and the React client are hosted side-by-side on Heroku (PaaS)
- The Express application is serving the React build/ folder as a static file
- All authentication is done server-side using passport.js to authenticate users
- The Mongoose Schema, and code logic, is configured in a way to allow all sign-in methods (OAuth and Local) to persist while always returning the same user object. (In order to demo multiple log-in strategies in this project.)

# Security

### Register Users (TEXT)

##### _(Security: Level 1)_

### Database Encryption

##### _(Security: Level 2)_

    -npm install mongoose-encryption

### Hashing Passwords

##### _(Security: Level 3)_

    - npm install md5

### Hashing and Salting

##### _(Security: Level 4)_

    - npm install bycrypt

### Cookies and Sessions

##### _(Security: Level 5)_

    - npm install passport
    - npm install passport-local
    - npm install passport-local-mongoose
    - npm install express-session (NOT sessions)

### OAuth 2.0

##### _(Security: Level 6)_

###### (Example: Google, Facebook, GitHub, etc.)

_An "Auth Code" can be likened to an admit one ticket, whereas an "Access Token" can be likened to a year pass._
