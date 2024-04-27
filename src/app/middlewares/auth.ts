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
            let token;
            if (
                req.headers.authorization &&
                req.headers.authorization.startsWith('Bearer')
            ) {
                token = req.headers.authorization.split(' ')[1];
            }

            if (!token) {
                throw new AppError(
                    StatusCodes.UNAUTHORIZED,
                    'You are not authorized',
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
