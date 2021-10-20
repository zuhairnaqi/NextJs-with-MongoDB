const {authService, userService} = require('../services');

const socialAuthentication = async (req, res) => {
    const {user, authInfo: token} = req;
    const oldUser = await userService.getBySocial(user.id, user.provider);
    if (!oldUser) {
        const response = await authService.socialLogin({user, token});
        if (response.statusCode !== 200) {
            return res.status(response.statusCode).json(response);
        }
    }
    res.redirect(`http://localhost:5000/Dashboard`);
};

module.exports = {
    socialAuthentication
}