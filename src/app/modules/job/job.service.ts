import { StatusCodes } from 'http-status-codes';
import QueryBuilder from '../../classes/builder/QueryBuilder';
import AppError from '../../classes/errorClasses/AppError';
import { jobSearchableFields } from './job.constant';
import { IJob } from './job.interface';
import { Job } from './job.model';

// Create Job
const createJob = async (payload: IJob) => {
    const newJob = await Job.create(payload);

    return newJob;
};

// Get All Jobs
const getAllJobs = async (query: Record<string, unknown>) => {
    const jobQuery = new QueryBuilder(Job.find(), query)
        .search(jobSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();

    const result = await jobQuery.modelQuery;
    const meta = await jobQuery.countTotal();

    return { result, meta };
};

// Delete Job
const deleteJob = async (id: string) => {
    // Check if the requested job is exist
    const isJobExist = await Job.findById(id);

    if (!isJobExist) {
        throw new AppError(StatusCodes.NOT_FOUND, 'No job data found');
    }

    // Delete Job data
    await Job.findByIdAndDelete(id);

    return null;
};

// Update Job
const updateJob = async (id: string, payload: Partial<IJob>) => {
    // Check if the requested job is exist
    const isJobExist = await Job.findById(id);

    if (!isJobExist) {
        throw new AppError(StatusCodes.NOT_FOUND, 'No job data found');
    }

    // Update job data
    const updatedJob = await Job.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });

    return updatedJob;
};

export const jobServices = {
    createJob,
    getAllJobs,
    deleteJob,
    updateJob,
};
