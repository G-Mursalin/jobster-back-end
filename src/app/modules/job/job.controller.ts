import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendSuccessResponse from '../../utils/sendSuccessResponse';
import { jobServices } from './job.service';

// Create Job
const createJob = catchAsync(async (req, res) => {
    const result = await jobServices.createJob(req.body);

    sendSuccessResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Job created successfully',
        data: result,
    });
});

// Get ALl Jobs
const getAllJobs = catchAsync(async (req, res) => {
    const { result, meta } = await jobServices.getAllJobs(req.query);

    sendSuccessResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Jobs are retrieved successfully',
        meta,
        data: result,
    });
});

export const jobControllers = {
    createJob,
    getAllJobs,
};
