import { Router } from 'express';
import { jobRoutes } from '../modules/job/job.route';

const globalRoute = Router();

const routes = [{ path: '/job', route: jobRoutes }];

routes.forEach((route) => globalRoute.use(route.path, route.route));

export default globalRoute;
