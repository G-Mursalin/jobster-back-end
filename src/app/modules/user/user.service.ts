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

export const userServices = {
    updateUser,
};
