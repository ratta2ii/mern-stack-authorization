# MERN Stack Authentication

##### Live Demo: [MERN Stack Authentication Website](https://mern-stack-authentication.herokuapp.com/) (Heroku set slow loading after 30 mins of inactivity)

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
implementation. The application includes OAuth services, Salting and
Hashing for standard login, as well as Cookies and Sessions.
Additionally, a Google OAuth strategy offers users a way to be
authorized to access the API using the OAuth 2.0 protocols; This
strategy is considered the most secure for this application (Security
level 6).

I have also added a "local" strategy as well, that allows a user to
register a new account with just a username and password -instead of
using the more secure OAuth services. The password will be hashed, with
salt (Security level 4), before being stored in a MongoDB database. In
addition to the Auth services, the application also demonstrates a
working knowledge on how to both build, and deploy, a full-stack MERN
application.
### Project Objectives:

The primary goal of this application is to use this project as a demo app, as I undertake a deeper dive on Auth services. I want to both explore, as well as better understand, the complexity of various Identity Providers (IdP) and how to properly, and most notably, securely, authenticate users with their respective Service Providers.

### Project Details:

- MongoDB, Express, React, Node.js (MERN Stack), w/ Passport.js middleware
- Database hosted on AWS S3 through MongoDB Atlas (DBaaS)
- Both the Express API and the React client are hosted side-by-side on Heroku (PaaS)
- The Express application is serving the React build/ folder as a static file
- All authentication is done server-side using passport.js to authenticate users
- The Mongoose Schema, and code logic, is configured in a way to allow all sign-in methods (OAuth and Local) to persist while always returning the same user object.

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
