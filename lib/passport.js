const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const jwtStrategy = require('../config/passport');

passport.use('jwt', jwtStrategy);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: "1097104560733-qbi1lfb2aolivh4qntjuu8crnva3d48k.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: 'http://localhost:5000/api/auth/google/callback',
        },
        async function (accessToken, refreshToken, profile, done) {
            return done(null, profile, accessToken);
        }
    )
);

// passport.use(
//     new FacebookStrategy(
//         {
//             clientID: process.env.FB_CLIENT_ID, // stockbase test
//             clientSecret: process.env.FB_CONSUMER_SECRET,
//             // clientID: "134716622164932", //client's crediential
//             // clientSecret: "165c086c89b14c285ee9360e576be8ea",
//             callbackURL: 'http://localhost:5000/v1/auth/facebook/callback',
//         },
//         async function (accessToken, refreshToken, profile, done) {
//             return done(null, profile, accessToken);
//         }
//     )
// );


export default passport