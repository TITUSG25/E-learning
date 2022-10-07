import express from 'express'
import { signIn, signUp } from '../contoller/Auth.js';

const router = express.Router();

router.post('/signup',signUp)
router.post('/signin',signIn)
export default router;