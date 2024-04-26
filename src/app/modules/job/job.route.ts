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
    .get('/', jobControllers.getAllJobs);

export const jobRoutes = router;
