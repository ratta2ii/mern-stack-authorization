const passport = require("passport");
const { User } = require("./../database/db");
const { googleStrategy, facebookStrategy } = require("./strategies");


//! creates a "local" strategy on the User model
passport.use(User.createStrategy());

passport.use(googleStrategy);

passport.use(facebookStrategy);

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
