import { z } from 'zod';
import { JobType, Status } from './job.constant';

// Create zod validation schema
const createJobValidation = z.object({
    body: z.object({
        position: z
            .string({
                required_error: 'Job position is required',
                invalid_type_error: 'Job position must be a string',
            })
            .refine((value) => value.trim().length > 0, {
                message: 'Job position must not be empty or whitespace only',
            }),
        company: z
            .string({
                required_error: 'Company name is required',
                invalid_type_error: 'Company name must be a string',
            })
            .refine((value) => value.trim().length > 0, {
                message: 'Company name must not be empty or whitespace only',
            }),
        jobLocation: z
            .string({
                required_error: 'Job location is required',
                invalid_type_error: 'Job location must be a string',
            })
            .refine((value) => value.trim().length > 0, {
                message: 'Job location must not be empty or whitespace only',
            }),
        status: z.enum([...(Status as [string, ...string[]])], {
            required_error: 'Status is required',
            invalid_type_error: 'Status must be a string',
        }),
        jobType: z.enum([...(JobType as [string, ...string[]])], {
            required_error: 'Job type is required',
            invalid_type_error: 'Job type must be a string',
        }),
    }),
});

// Update zod validation schema
const updateJobValidation = z.object({
    body: z.object({
        position: z
            .string({
                required_error: 'Job position is required',
                invalid_type_error: 'Job position must be a string',
            })
            .refine((value) => value.trim().length > 0, {
                message: 'Job position must not be empty or whitespace only',
            })
            .optional(),
        company: z
            .string({
                required_error: 'Company name is required',
                invalid_type_error: 'Company name must be a string',
            })
            .refine((value) => value.trim().length > 0, {
                message: 'Company name must not be empty or whitespace only',
            })
            .optional(),
        jobLocation: z
            .string({
                required_error: 'Job location is required',
                invalid_type_error: 'Job location must be a string',
            })
            .refine((value) => value.trim().length > 0, {
                message: 'Job location must not be empty or whitespace only',
            })
            .optional(),
        status: z
            .enum([...(Status as [string, ...string[]])], {
                required_error: 'Status is required',
                invalid_type_error: 'Status must be a string',
            })
            .optional(),
        jobType: z
            .enum([...(JobType as [string, ...string[]])], {
                required_error: 'Job type is required',
                invalid_type_error: 'Job type must be a string',
            })
            .optional(),
    }),
});

export const jobValidators = {
    createJobValidation,
    updateJobValidation,
};
