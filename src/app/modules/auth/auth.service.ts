import { StatusCodes } from 'http-status-codes';
import AppError from '../../classes/errorClasses/AppError';
import config from '../../config';
import { jwtHelpers } from '../../helpers/jwtHelpers/jwtHelpers';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';

// User Signup
const signUp = async (payload: IUser) => {
    // Create New User
    const newUser = await User.create(payload);

    // Creating Access Token
    const jwtPayload = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
    };

    const accessToken = jwtHelpers.createJWTToken(
        jwtPayload,
        config.jwt_access_token_secret,
        config.jwt_access_token_expired_in,
    );

    return { accessToken };
};

// User Login
const logIn = async (payload: ILoginUser) => {
    const { email, password } = payload;

    // Check if user exist
    const user = await User.findOne({ email });

    if (!user) {
        throw new AppError(
            StatusCodes.UNAUTHORIZED,
            'Invalid email or password',
        );
    }

    // Check Password is correct
    if (!(await User.isPasswordMatched(password, user.password))) {
        throw new AppError(401, 'Invalid email or password');
    }

    // Access Granted: Generate Access Token
    const jwtPayload = {
        id: user.id,
        email: user.email,
        name: user.name,
    };

    const accessToken = jwtHelpers.createJWTToken(
        jwtPayload,
        config.jwt_access_token_secret,
        config.jwt_access_token_expired_in,
    );

    return { accessToken };
};

export const authServices = {
    signUp,
    logIn,
};
