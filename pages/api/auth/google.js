import passport, {handler} from '../../../lib/passport';
import dbConnect from '../../../utils/dbConnection';

dbConnect()


handler.get(passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'] }))

export default handler