import nextConnect from "next-connect";
import passport from '../../../lib/passport';
import dbConnect from "../../../utils/dbConnection";

dbConnect();

const auth = nextConnect().use(passport.initialize())

const handler = nextConnect()

handler.use(auth).get(passport.authenticate('facebook', { scope: ['email'] }))

export default handler;