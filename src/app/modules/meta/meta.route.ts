import express from 'express';
import { metaControllers } from './meta.controller';

const router = express.Router();

router
    .get('/get-stats', metaControllers.countJobsStats)
    .get('/get-monthly-stats', metaControllers.countLastSixMonthJobs);

export const metaRoutes = router;
