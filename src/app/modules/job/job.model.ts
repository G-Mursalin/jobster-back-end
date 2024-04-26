import { Schema, model } from 'mongoose';
import { IJob } from './job.interface';
import { JobType, Status } from './job.constant';

const jobSchema = new Schema<IJob>(
    {
        position: {
            type: String,
            required: [true, 'Job position is required'],
            trim: true,
            lowercase: true,
            validate: {
                validator: (value: string) => value.trim().length !== 0,
                message: 'Position must not be empty or whitespace only',
            },
        },
        company: {
            type: String,
            trim: true,
            lowercase: true,
            validate: {
                validator: (value: string) => value.trim().length !== 0,
                message: 'Company name must not be empty or whitespace only',
            },
            required: [true, 'Company name is required'],
        },
        jobLocation: {
            type: String,
            trim: true,
            lowercase: true,
            validate: {
                validator: (value: string) => value.trim().length !== 0,
                message: 'Job location must not be empty or whitespace only',
            },
            required: [true, 'Job location is required'],
        },
        status: {
            type: String,
            trim: true,
            lowercase: true,
            enum: {
                values: Status,
                message: '{VALUE} is not valid',
            },
            validate: {
                validator: (value: string) => value.trim().length !== 0,
                message: 'Status must not be empty or whitespace only',
            },
            required: [true, 'Job status is required'],
        },
        jobType: {
            type: String,
            trim: true,
            lowercase: true,
            enum: {
                values: JobType,
                message: '{VALUE} is not valid',
            },
            validate: {
                validator: (value: string) => value.trim().length !== 0,
                message: 'Job type must not be empty or whitespace only',
            },
            required: [true, 'Job status is required'],
        },
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

// Create a Model
export const Job = model<IJob>('Job', jobSchema);
