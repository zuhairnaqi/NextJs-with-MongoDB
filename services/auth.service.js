const User = require('../models/user.model');

const socialLogin = async ({ user, token }) => {
    const { email, name, id } = await getProviderData({ user, token });
    const newUser = await User.create({
        email,
        name,
        provider_id: id,
        provider: user.provider,
    });
    return { data: newUser, statusCode: 200 };
}
const getProviderData = async ({ user, token }) => {
    if (user.provider == 'google') {
        const { emails, displayName, id } = user;
        return { email: emails[0].value, name: displayName, id };
    } else if (user.provider === 'facebook') {
        return await fetch(`https://graph.facebook.com/${user.id}?fields=id,name,email&access_token=${token}`)
            .then(res => res.json())
            .then(response => {
                return response;
            })
            .catch(err => new ApiError(401, 'Provider data not found'))
    }

    throw new ApiError(httpStatus.NOT_FOUND, 'Provider data not found');
};

module.exports = {
    socialLogin,
}
