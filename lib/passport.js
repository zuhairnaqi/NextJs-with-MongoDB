import passport from 'passport';
import nextConnect from "next-connect";
import {OAuth2Strategy as GoogleStrategy} from 'passport-google-oauth';
import {Strategy as FacebookStrategy} from 'passport-facebook';
import User from '../models/user.model';
import jwtStrategy from '../config/passport';

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
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:5000/api/auth/google/callback',
        },
        async function (accessToken, refreshToken, profile, done) {
            return done(null, profile, accessToken);
        }
    )
);

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FB_CLIENT_ID,
            clientSecret: process.env.FB_CONSUMER_SECRET,
            callbackURL: 'http://localhost:5000/api/auth/facebook/callback',
        },
        async function (accessToken, refreshToken, profile, done) {
            return done(null, profile, accessToken);
        }
    )
);

const nextConnectWithPassport = nextConnect().use(passport.initialize())

export const handler = nextConnect().use(nextConnectWithPassport);

export default passport