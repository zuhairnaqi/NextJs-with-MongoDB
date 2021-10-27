import User from '../models/user.model';

export const getBySocial = async (provider_id, provider) => {
    return User.findOne({ provider_id, provider });
};
