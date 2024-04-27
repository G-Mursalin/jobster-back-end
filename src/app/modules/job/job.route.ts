import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { jobControllers } from './job.controller';
import { jobValidators } from './job.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router
    .post(
        '/',
        auth(),
        validateRequest(jobValidators.createJobValidation),
        jobControllers.createJob,
    )
    .get('/', jobControllers.getAllJobs)
    .delete('/:id', auth(), jobControllers.deleteJob)
    .patch(
        '/:id',
        auth(),
        validateRequest(jobValidators.updateJobValidation),
        jobControllers.updateJob,
    );

export const jobRoutes = router;
