import express from 'express';
import { userControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidators } from './user.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router
    .get('/get-me', auth(), userControllers.getMe)
    .patch(
        '/',
        auth(),
        validateRequest(userValidators.updateUserValidation),
        userControllers.updateUser,
    );

export const userRoutes = router;
