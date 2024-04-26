import express from 'express';
import { authControllers } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidators } from '../user/user.validation';
import { authValidations } from './auth.validation';

const router = express.Router();

router
    .post(
        '/signup',
        validateRequest(userValidators.createUserValidation),
        authControllers.signUp,
    )
    .post(
        '/login',
        validateRequest(authValidations.loginValidation),
        authControllers.logIn,
    );

export const authRoutes = router;
