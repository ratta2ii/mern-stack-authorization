const mongoose = require("mongoose");

/*
If the schema is used with the Passport-Local-Mongoose plugin, it will add a username, hash and
salt fields to the schema automatically. The plugin is implemented in this case (see db.js),
however, I have hard-coded them here as well for a visual reference here in the application.
*/

exports.userSchema = new mongoose.Schema({
    // email addresses will be synonymous with username, and are stored here in the username field
    username: { type: String, require: true, index: true, unique: true, sparse: true },
    password: String,
    // (NOTES: @MODELS 001)
    secret: String,
    // (NOTES: @MODELS 002)
    localAccount: Boolean,
    accounts: Map
});

//! REFERENCE NOTES BELOW
//? -----------------------------------------------------

/*
? (REF: MODELS 001)
The secret property on the userSchema is unrelated to any security features. 
This particular app allows users to post a secret about themselves, so otherwise, unrelated.

? (REF: MODELS 002)
The accounts property is a map that stores all implementations of OAuth (google, facebook, etc.)
Map structure below
{
    accountType: "twitter",
    uid: 23984y9238470982734098
},
possible idea for future local login credentials
{ 
    accountType: "internal", // or local
    username: "bob@gmail.com",
    password: "5d41402abc4b2a76b9719d911017c592"
}

? Future schema ???
var userSchema = new mongoose.Schema({
    local: {
        name: { type: String },
        email: { type: String, require: true, index: true, unique: true, sparse: true },
        password: { type: String, require: true },
    },
    facebook: {
        id: { type: String },
        token: { type: String },
        email: { type: String },
        name: { type: String }
    }
});
*/