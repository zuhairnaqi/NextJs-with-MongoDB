const User = require('../models/user.model');

const getBySocial = async (provider_id, provider) => {
    return User.findOne({ provider_id, provider });
};

module.exports = {
    getBySocial,
};