var express = require("express");
var passport = require("passport");
const { User } = require("./../database/db.js");
var router = express.Router();

const chalk = require("chalk");
const log = console.log;
// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

router.post("/users/register", function (req, res) {
  User.findOne(
    { username: req.body.username },
    async function (err, foundUser) {
      if (err) console.log(err);
      //* If there is no user, create a new user
      if (!foundUser) {
        console.log(chalk.blue.bold("!foundUser"));
        const user = new User({ username: req.body.username });
        await user.setPassword(req.body.password);
        user.localAccount = true;
        await user.save();
        passport.authenticate("local")(req, res, function () {
          res.send(req.user);
        });
      }
      //? (REF: @AUTHROUTES 001)
      //* If there is a user through OAUTH, but no local account and password, set one
      else if (foundUser && !foundUser.localAccount) {
        console.log(chalk.red.bold("foundUser && !foundUser.localAccount"));
        await foundUser.setPassword(req.body.password);
        foundUser.localAccount = true;
        await foundUser.save();
        passport.authenticate("local")(req, res, function () {
          res.send(req.user);
        });
      } else {
        console.log(chalk.blue("This account already exist"));
        res.send({ error: "This account already exists!" });
      }
    }
  );
});

router.post("/login", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.send(req.user);
      });
    }
  });
});

//! Google OAuth Routes
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "https://mern-stack-authentication.herokuapp.com/login",
  }),
  function (req, res) {
    const myURL = `https://mern-stack-authentication.herokuapp.com/dashboard/user/${req.user._id}`;
    res.redirect(myURL);
  }
);

//! Facebook OAuth Routes
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/auth/facebook/redirect",
  passport.authenticate("facebook", {
    failureRedirect: "https://mern-stack-authentication.herokuapp.com/login",
  }),
  function (req, res) {
    const myURL = `https://mern-stack-authentication.herokuapp.com/dashboard/user/${req.user._id}`;
    res.redirect(myURL);
  }
);

//! GitHub OAuth Routes
router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["email"] })
);

router.get(
  "/auth/github/redirect",
  passport.authenticate("github", {
    failureRedirect: "https://mern-stack-authentication.herokuapp.com/login",
  }),
  function (req, res) {
    const myURL = `https://mern-stack-authentication.herokuapp.com/dashboard/user/${req.user._id}`;
    res.redirect(myURL);
  }
);

//* READ ONE
router.get("/userdata/:userId/", function (req, res) {
  const id = req.params.userId;

  User.findOne({ _id: id }, function (err, foundUser) {
    if (!err) {
      if (!foundUser) {
        res.send("Sorry, NO article matching that title");
      } else {
        res.send(foundUser);
      }
    } else {
      res.send(err);
    }
  });
});

//* UPDATE (update any combination of fields in an entry. Use PUT for updating all fields.)
router.put("/users/edit/:id", function (req, res) {
  console.log(req.body);
  console.log("In put");
  User.updateOne(
    { _id: req.body._id },
    // {_id: req.params.id},
    //! This "$set" will automatically update only the fields that have values from req.body
    { $set: req.body },
    function (err) {
      if (!err) {
        res.send("Successfully updated the user!");
      } else {
        res.send(err);
      }
    }
  );
});

// ! Logout (end session)
router.get("/logout", function (req, res) {
  if (req.user) {
    req.logout();
    res.send({ message: "logging out" });
  } else {
    res.send({ message: "no user to log out" });
  }
});

module.exports = router;

// ! REFERENCE NOTES BELOW
// ? --------------------------------------------------

/*
* (REF: @AUTHROUTES 001)
NOTE: "localAccount" is a Boolean property on the userSchema. Because users may first gain access through alternate OAuth methods (google, fb, etc.), I needed a way to check if the user currently registering "locally", had already registered locally before signing in through alternate means. Structuring the schema with this additional Boolean allowed me greater control when writing the conditional statements. This helped to prevent someone from registering a second time on an existing account (previously created through alt OAuth), which would have resulted in overwriting any previous passwords.
That said, I was originally faced with this issue after having trouble running conditional statements on any database field values that were security related (ex: password, salt, hash). This is my reasoning behind creating an additional Boolean field-localAccount- that would keep track of whether or not a local strategy already exists on a user entry.
To avoid someone stealing the account at a later login, this route is called and checked immediately upon a person first registering an account. If a user registers an account through Oauth, the client side will demand a password and route to here at that moment, adding a password to the existing user under that username(email).
*/
