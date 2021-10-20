import nextConnect from 'next-connect'
import passport from "../../../../lib/passport";
import authController from '../../../../controllers/auth.controller'

const auth = nextConnect().use(passport.initialize())

const handler = nextConnect()

handler.use(auth).get(passport.authenticate("google"), authController.socialAuthentication)

export default handler
