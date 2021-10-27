import passport, {handler} from "../../../../lib/passport";
import {socialAuthentication} from '../../../../controllers/auth.controller'

handler.get(passport.authenticate("google"), socialAuthentication)

export default handler
