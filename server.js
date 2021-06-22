require("dotenv").config();
const express = require("express");
const _ = require("lodash");
const path = require("path");
var cors = require("cors");
const app = express();
const session = require("express-session");
const passport = require("passport");
require("./authorization/passportAuth");
var routes = require(__dirname + "/routes/authRoutes");
const { User } = require("./database/db"); 
const helmet = require('helmet');

// Adds security headers
app.use(helmet());

//? Express v4.16.0 and higher no longer use body-parser
// --------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ? We can add some headers to our API server's response that tell the browser that it's OK to communicate with (req, res) the domain of our Heroku app. Note: The current Express server is serving both API and React app, but I left this here to revisit later.
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

//? CORS is enabled for either development, or when the API and client are hosted on 2 separate platforms. Note: The current Express server is serving both API and React app, but I left this here to revisit later.
var corsOptions = {
  origin: "https://mern-stack-authentication.herokuapp.com",
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow session cookie from browser to pass through
};

app.use(cors(corsOptions));
app.set("trust proxy", 1);

// Cookies and Sessions (express-session)
app.use(
  session({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//! IMPORTANT: routes must follow passport initialize() and session() in order to avoid the out-of-order middleware hell that express makes it so easy to enter. Also, serving the static files and routes could be inverse, with routes preceding the static files, but it not working in this particular case -so I left them alone here.
app.use("/api", routes);

// ! To enable hosting React app along side server, serve React build folder as static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Add port to .env file at a later point
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, function () {
  console.log(`Server is running on PORT: ${port}`);
});
