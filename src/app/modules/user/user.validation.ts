import { z } from 'zod';

// Create user zod validation schema
const createUserValidation = z.object({
    body: z.object({
        name: z
            .string({
                required_error: 'User name is required',
                invalid_type_error: 'User name must be a string',
            })
            .trim()
            .refine((value) => value.trim().length > 0, {
                message: 'User name must not be empty or whitespace only',
            }),
        email: z
            .string({
                required_error: 'User email is required',
                invalid_type_error: 'User email must be a string',
            })
            .trim()
            .email('Invalid email formate'),

        password: z
            .string({
                required_error: 'Password is required',
                invalid_type_error: 'Password must be a string',
            })
            .refine((value) => value.length >= 5, {
                message: 'Password must be at least 5 characters long',
            }),
        location: z.string().trim().optional(),
    }),
});

// Update user zod validation schema
const updateUserValidation = z.object({
    body: z.object({
        name: z
            .string({
                required_error: 'User name is required',
                invalid_type_error: 'User name must be a string',
            })
            .trim()
            .refine((value) => value.trim().length > 0, {
                message: 'User name must not be empty or whitespace only',
            })
            .optional(),
        location: z.string().trim().optional(),
    }),
});

export const userValidators = {
    createUserValidation,
    updateUserValidation,
};
