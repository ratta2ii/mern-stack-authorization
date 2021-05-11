const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const { userSchema } = require("./models");


const mongoUri = process.env.MONGODB_CONNECTION_STRING;
// Connect to database, create schema, and encrypt password
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    //useFindAndModify: false, 
}).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );

/**
1. Passport-Local Mongoose will add a username, hash and salt field to the schema (userSchema here)
2. The plugin must be used with a mongoose schema instance (not just a js object)
*/
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

exports.User = new mongoose.model("User", userSchema);