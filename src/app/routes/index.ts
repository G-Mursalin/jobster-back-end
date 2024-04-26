import { Router } from 'express';
import { jobRoutes } from '../modules/job/job.route';
import { authRoutes } from '../modules/auth/auth.route';
import { userRoutes } from '../modules/user/user.route';

const globalRoute = Router();

const routes = [
    { path: '/job', route: jobRoutes },
    { path: '/auth', route: authRoutes },
    { path: '/user', route: userRoutes },
];

routes.forEach((route) => globalRoute.use(route.path, route.route));

export default globalRoute;
