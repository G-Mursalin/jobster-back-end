import { JwtPayload } from 'jsonwebtoken';
import { IUser } from './user.interface';
import { User } from './user.model';

// User Update
const updateUser = async (payload: Partial<IUser>, user: JwtPayload) => {
    const { name, location } = payload;

    // Update user data
    const updatedUser = await User.findByIdAndUpdate(
        user.id,
        { name, location },
        {
            new: true,
            runValidators: true,
        },
    );

    return updatedUser;
};

// Get Me
const getMe = async (user: JwtPayload) => {
    const { id, email } = user;

    // Update user data
    const userData = await User.findOne({
        _id: id,
        email,
    }).select({ name: 1, email: 1, location: 1 });

    return userData;
};

export const userServices = {
    updateUser,
    getMe,
};
