import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendSuccessResponse from '../../utils/sendSuccessResponse';
import { userServices } from './user.service';

// User Update
const updateUser = catchAsync(async (req, res) => {
    const result = await userServices.updateUser(req.body, req.user);

    sendSuccessResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'User updated successfully',
        data: result,
    });
});

// Get Me
const getMe = catchAsync(async (req, res) => {
    const result = await userServices.getMe(req.user);

    sendSuccessResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'User data retrieved successfully',
        data: result,
    });
});

export const userControllers = {
    updateUser,
    getMe,
};
