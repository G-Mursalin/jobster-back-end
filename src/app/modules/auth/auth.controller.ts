import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendSuccessResponse from '../../utils/sendSuccessResponse';
import { authServices } from './auth.service';

// User Signup
const signUp = catchAsync(async (req, res) => {
    const { accessToken } = await authServices.signUp(req.body);

    sendSuccessResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Signup successfully',
        data: { accessToken },
    });
});

// User Login
const logIn = catchAsync(async (req, res) => {
    const { accessToken } = await authServices.logIn(req.body);

    sendSuccessResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Login successfully',
        data: { accessToken },
    });
});

export const authControllers = {
    signUp,
    logIn,
};
