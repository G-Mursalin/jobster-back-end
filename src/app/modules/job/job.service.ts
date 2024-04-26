import QueryBuilder from '../../classes/builder/QueryBuilder';
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

export const jobServices = {
    createJob,
    getAllJobs,
};
