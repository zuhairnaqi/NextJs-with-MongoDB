import passport, {handler} from '../../../lib/passport';
import dbConnect from "../../../utils/dbConnection";

dbConnect();

handler.get(passport.authenticate('facebook', { scope: ['email'] }))
export default handler;