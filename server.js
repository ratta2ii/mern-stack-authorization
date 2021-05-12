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

/*
? We can add some headers to our API server's response that tell the browser that it's OK receiving requests from the domain of our Heroku app.
*/
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://mern-stack-authentication.herokuapp.com"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var corsOptions = {
  // allow the server to accept request from different origin
  origin: [
    "https://ratta2ii.github.io",
    "http://localhost:3000",
  ],
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  // allow session cookie from browser to pass through
  credentials: true 
}

app.use(cors(corsOptions));
app.set("trust proxy", 1);

/*
! To enable hosting React app along side server, serve React build folder as static files
? Currently hosting REACT APP completely seperate on gh-pages
*/
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build", "index.html")));
}

console.log(path.join(__dirname, "client/build", "index.html"));
console.log(process.env.NODE_ENV === "production");

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
app.use("/api", routes);

app.get("/test", function (req, res) {
  res.send("Hello world");
});

// Add port to .env file at a later point
let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}

app.listen(port, function () {
    console.log(`Server is running on PORT: ${port}`);
});