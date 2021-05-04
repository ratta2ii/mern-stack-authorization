var express = require("express");
var passport = require("passport");
const { User } = require("./../database/db.js");
var router = express.Router();

router.post("/users/register",
    function (req, res) {
        User.findOne(
            { username: req.body.username },
            async function (err, foundUser) {
                if (err) console.log(err);
                else {
                    if (!foundUser) {
                        const user = new User({ username: req.body.username });
                        await user.setPassword(req.body.password);
                        user.localAccount = true;
                        await user.save();
                        passport.authenticate("local")(req, res, function () {
                            res.send(req.user);
                        });
                    } else {
                        // if a user exists through alternate OAuth, but no local strategy or password exists on user entry
                        if (!foundUser.localAccount) {
                            await foundUser.setPassword(req.body.password);
                            // (NOTES: @AUTHROUTES 001)
                            foundUser.localAccount = true;
                            await foundUser.save();
                            passport.authenticate("local")(req, res, function () {
                                res.send(req.user);
                            });
                        } else {
                            console.log("This account already exists!");
                            res.send({ message: "This account already exists!" })
                        }
                    }
                }
            }
        );
    }
);

router.post("/login",
    function (req, res) {
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
    }
);

//! Google OAuth Routes
router.get("/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/auth/google/redirect",
    passport.authenticate("google", { failureRedirect: "http://localhost:3000/login/failed" }),
    function (req, res) {
        const myURL = new URL(`http://localhost:3000/dashboard/user/${req.user._id}`)
        res.redirect(myURL);
    }
);

//! Facebook OAuth Routes
router.get("/auth/facebook",
    passport.authenticate("facebook", { scope: ["email"] })
);


router.get("/auth/facebook/redirect",
    passport.authenticate("facebook", { failureRedirect: "http://localhost:3000/login/failed" }),
    function (req, res) {
        const myURL = new URL(`http://localhost:3000/dashboard/user/${req.user._id}`)
        res.redirect(myURL);
    }
);

//* READ ONE
router.get("/userdata/:userId/", function (req, res) {
    const id = req.params.userId;

    User.findOne({ _id: id }, function (err, foundUser) {
        if (!err) {
            if (!foundUser) {
                res.send("Sorry, NO article matching that title")
            } else {
                res.send(foundUser);
            }
        } else {
            res.send(err);
        }
    });
});

// ! Logout (end session)
router.get("/logout",
    function (req, res) {
        if (req.user) {
            req.logout();
            res.send({ message: "logging out" });
        } else {
            res.send({ message: "no user to log out" });
        }
    }
);

module.exports = router;










//! REFERENCE NOTES BELOW
//? -----------------------------------------------------

/*
? (REF: @AUTHROUTES 001)
NOTE: "localAccount" is a Boolean property on the userSchema. Because users may first gain access through alternate OAuth methods (google, fb, etc.), I needed a way to check if the user currently registering "locally", had already registered locally before. Structuring the schema with this additional Boolean allowed me greater control when writing the conditional statements. This helped to prevent someone from registering a second time on an existing account (previously created through alt OAuth), which would have resulted in overwriting any previous passwords.
That said, I was originally faced with this issue after having trouble running conditional statements on any database field values that were security related (ex: password, salt, hash). This is my reasoning behind creating an additional Boolean field-localAccount- that would keep track of whether or not a local strategy already exists on a user entry.
*/
