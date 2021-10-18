import nextConnect from 'next-connect'
import passport from '../../../lib/passport';
import dbConnect from '../../../utils/dbConnection';

dbConnect()

const auth = nextConnect().use(passport.initialize())

const handler = nextConnect()

handler.use(auth).get(passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'] }))

export default handler