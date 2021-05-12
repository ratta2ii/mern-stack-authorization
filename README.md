## Register Users (TEXT)
##### _(Security: Level 1)_

## Database Encryption 
##### _(Security: Level 2)_
    -npm install mongoose-encryption

## Hashing Passwords
##### _(Securtiy: Level 3)_
    - npm install md5

## Hashing and Salting 
##### _(Securtiy: Level 4)_
    - npm install bycrypt

## Cookies and Sessions
##### _(Securtiy: Level 5)_
    - npm install passport
    - npm install passport-local
    - npm install passport-local-mongoose
    - npm install express-session (NOT sessions)

### OAuth 2.0 (Ex: using google) 
##### _(Securtiy: Level 6)_
_An "Auth Code" can be likened to an admit one ticket, whereas an "Access Token" can be likened to a year pass. You can find instructions for google OAuth here:  passportjs.org/packages/passport-google-oauth20_

    - npm install passport-google-oauth20

1. Install correct packages
2. Register your application with google (see instruction link above)
3. From sidebar go to Credentials > OAuth Consent Screen to configure
4. Configure settings (Revisit after site is hosted on a Domain)
5. Select "Create Credentials" and choose OAuth client ID
6. Choose authorized URI and redirect URI (Redirect ex: https://mern-stack-authentication.herokuapp.com/api/auth/google/redirect) A redirect link is where you will send a user once the OAuth (google in our case here) has authenticated the user.
7. Save the newly generated CLIENT_ID and CLIENT_SECRET into the .env file.
8. Implement in code using passport documentation.

## Environment Variables
    - npm install dotenv

## Notes:
    _ Facebook Oauth: https://www.twilio.com/blog/facebook-oauth-login-node-js-app-passport-js

    - Server Hosting: https://git.heroku.com/mern-stack-authentication.git
