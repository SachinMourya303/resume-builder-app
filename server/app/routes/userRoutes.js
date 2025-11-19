import express from 'express';
import { signinValidation, signupValidation } from '../middleware/authValidation.js';
import { signin, signup } from '../controllers/authControllers.js';

const userRouter = express.Router();

userRouter.post('/signup' , signupValidation , signup);
userRouter.post('/signin' , signinValidation , signin);

export default userRouter;