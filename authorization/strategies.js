const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GitHubStrategy = require("passport-github").Strategy;
const { User } = require("../database/db");

// (NOTES: @STRATEGIES 001)
//* "local" strategy is the passportAuth file

// ! "google" strategy (OAuth 2.0)
exports.googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    userProfileURL: process.env.GOOGLE_USER_PROFILE_URL,
  },
  function (accessToken, refreshToken, profile, done) {
    const newGoogleAccountObj = { accountType: "google", accessToken, uid: profile.id };
    createNewAccountHelper(profile, newGoogleAccountObj, done);
  }
);

// ! "facebook" strategy (OAuth 2.0)
exports.facebookStrategy = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ["id", "displayName", "email"],
  },
  function (accessToken, refreshToken, profile, done) {
    const newFacebookAccountObj = {
      accountType: "facebook",
      accessToken,
      uid: profile._json.id,
    };
    createNewAccountHelper(profile, newFacebookAccountObj, done);
  }
);

// ! "github" strategy (OAuth 2.0)
exports.gitHubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    scope: "user:email",
    callbackURL: process.env.GITHUB_CALLBACK_URL,
  },
  function (accessToken, refreshToken, profile, done) {
    const newGitHubAccountObj = { accountType: "github", accessToken, uid: profile.id };
    createNewAccountHelper(profile, newGitHubAccountObj, done);
  }
);

//* This helper function is invoked while instantiating new strategies (ex: facebook, google, etc.)
function createNewAccountHelper(profile, newAccountObj, done) {
  /*
  ! IMPORTANT: First npm mongoose-findorcreate package, require-in, before installing the plugin 
  ! CAUTION: Be sure to require the correct modules into correct locations in the correct order
  ? NOTE: See database/db.js to view plugin, middleware order, etc.
  */

  // The response to the GitHub strategy is stored differently than the others
  let emailAddress;
  if (profile._json.email) {
    emailAddress = profile._json.email;
  } else {
    emailAddress = profile.email;
  }

  User.findOrCreate({ username: emailAddress }, async function (err, user) {
    if (!err) {
      if (user && !user.accounts) {
        user.accounts = new Map();
        user.accounts.set(newAccountObj.accountType, newAccountObj);
        user.save();
      }
      // If the specified account does not exists in the already existing account map
      else if (!user.accounts.get(newAccountObj.accountType)) {
        user.accounts.set(newAccountObj.accountType, newAccountObj);
        user.save();
      }
      return done(err, user);
    } else {
      console.log(err);
    }
  });
}

//! REFERENCE NOTES BELOW
//? -----------------------------------------------------
/*
? Passport.js Strategies (Currently using google OAuth only with a diff method)
! Google OAuth Routes
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5000/login",
  }),
  function (req, res) {
    const myURL = `http://localhost:5000/dashboard/user/${req.user._id}`;
    res.redirect(myURL);
  }
);

! Facebook OAuth Routes
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/auth/facebook/redirect",
  passport.authenticate("facebook", {
    failureRedirect: "http://localhost:5000/login",
  }),
  function (req, res) {
    const myURL = `http://localhost:5000/dashboard/user/${req.user._id}`;
    res.redirect(myURL);
  }
);

! GitHub OAuth Routes
router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["email"] })
);

router.get(
  "/auth/github/redirect",
  passport.authenticate("github", {
    failureRedirect: "http://localhost:5000/login",
  }),
  function (req, res) {
    const myURL = `http://localhost:5000/dashboard/user/${req.user._id}`;
    res.redirect(myURL);
  }
);

? (REF: @STRATEGIES 001)
* NEW VERSION: passport.use(User.createStrategy());
An alternate way of implementing a local strategy. New version registers a single method to passport
* PREVIOUS VERSION: See below
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy; /* this should be after passport
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
));
*/