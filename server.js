require("dotenv").config();
const express = require("express");
const _ = require("lodash");
const path = require('path');
var cors = require("cors");
const app = express();
const session = require("express-session");
const passport = require("passport");
require("./authorization/passportAuth");
var routes = require(__dirname + "/routes/authRoutes");
const { User } = require("./database/db");


//? Express v4.16.0 and higher no longer use body-parser
// --------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    // allow the server to accept request from different origin
    origin: [
      "https://ratta2ii.github.io",
      "https://ratta2ii.github.io/",
      "http://localhost:3000",
      "https://localhost:3000",
      "https://cors-anywhere.herokuapp.com"
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // allow session cookie from browser to pass through
    credentials: true 
  })
);

// app.use(express.static("public"));
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

console.log(path.join(__dirname, "client/build", "index.html"));

app.get("*", (request, response) => {
	response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Cookies and Sessions (express-session)
app.use(session({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
/*
! IMPORTANT: routes must follow passport initialize() and session() in order to
! avoid the out-of-order middleware hell that express makes it so easy to enter
*/
app.use("/", routes);

// Add port to .env file at a later point
let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}

app.listen(port, function () {
    console.log(`Server is running on PORT: ${port}`);
});