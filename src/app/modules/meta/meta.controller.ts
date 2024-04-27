import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendSuccessResponse from '../../utils/sendSuccessResponse';
import { metaServices } from './meta.service';

// Count all jobs status (How many jobs are pending, interview and declined)
const countJobsStats = catchAsync(async (req, res) => {
    const result = await metaServices.countJobsStats();

    sendSuccessResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Meta data retrieved successfully',
        data: result,
    });
});

// Count last 6 month job post
const countLastSixMonthJobs = catchAsync(async (req, res) => {
    const result = await metaServices.countLastSixMonthJobs();

    sendSuccessResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Meta data retrieved successfully',
        data: result,
    });
});

export const metaControllers = { countJobsStats, countLastSixMonthJobs };
