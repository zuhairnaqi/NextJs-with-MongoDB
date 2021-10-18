import nextConnect from 'next-connect'
import passport from '../../../../lib/passport';
import Users from '../../../../models/user.model';

const auth = nextConnect().use(passport.initialize())

const handler = nextConnect()

handler.use(auth).get(passport.authenticate("google"), async (req, res) => {
    const {user, authInfo: token} = req;
    console.log('req, user', user)
    const {emails, displayName, id } = user;
    const newUser = await Users.create({
        email: emails[0].value,
        username: 'Zuhair',
        name: displayName,
        provider_id: id,
        provider: 'google',
    });

    console.log('newUser', newUser);
    
    res.redirect(`http://localhost:5000/Dashboard`);
})

export default handler
