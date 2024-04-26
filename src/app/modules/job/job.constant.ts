import { TStatus, TJobType } from './job.interface';

export const Status: TStatus[] = ['pending', 'interview', 'declined'];

export const JobType: TJobType[] = [
    'full-time',
    'part-time',
    'remote',
    'internship',
];

export const jobSearchableFields = [
    'position',
    'company',
    'jobLocation',
    'status',
    'jobType',
];
