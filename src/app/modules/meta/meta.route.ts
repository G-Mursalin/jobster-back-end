import express from 'express';
import { metaControllers } from './meta.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router
    .get('/get-stats', auth(), metaControllers.countJobsStats)
    .get('/get-monthly-stats', auth(), metaControllers.countLastSixMonthJobs);

export const metaRoutes = router;
