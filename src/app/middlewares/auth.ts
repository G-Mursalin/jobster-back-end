import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AppError from '../classes/errorClasses/AppError';
import config from '../config';
import { jwtHelpers } from '../helpers/jwtHelpers/jwtHelpers';
import { User } from '../modules/user/user.model';
import catchAsync from '../utils/catchAsync';

const auth = () => {
    return catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            // Get token from header
            const token = req.headers.authorization;

            // Check if the token send from client
            if (!token) {
                throw new AppError(
                    StatusCodes.UNAUTHORIZED,
                    'You are not authorize',
                );
            }

            // Check if the token is verified
            const decoded = jwtHelpers.verifyJWTToken(
                token,
                config.jwt_access_token_secret,
            );

            const { id, email } = decoded;

            // Check if user exist
            const isUserExist = await User.findOne({ email, _id: id });

            if (!isUserExist) {
                throw new AppError(
                    StatusCodes.UNAUTHORIZED,
                    'User is not found',
                );
            }

            req.user = decoded;

            next();
        },
    );
};

export default auth;
