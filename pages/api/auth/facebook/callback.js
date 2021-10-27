import passport, {handler} from "../../../../lib/passport";
import {socialAuthentication} from '../../../../controllers/auth.controller';

handler.get(passport.authenticate('facebook', { failureRedirect: 'http://localhost:5000/Auth/Signin' }), socialAuthentication)

export default handler;