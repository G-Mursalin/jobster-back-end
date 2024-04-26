import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { jobControllers } from './job.controller';
import { jobValidators } from './job.validation';

const router = express.Router();

router
    .post(
        '/',
        validateRequest(jobValidators.createJobValidation),
        jobControllers.createJob,
    )
    .get('/', jobControllers.getAllJobs)
    .delete('/:id', jobControllers.deleteJob)
    .patch(
        '/:id',
        validateRequest(jobValidators.updateJobValidation),
        jobControllers.updateJob,
    );

export const jobRoutes = router;
