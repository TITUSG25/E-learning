import express from 'express'
import { intialReset, signIn, signUp, update } from '../contoller/Auth.js';
import { verifyToken } from '../middlewares/verifyToken.js';


const router = express.Router();

router.post('/signup',signUp);
router.post('/signin',signIn);
router.put('/reset',intialReset);
router.put('/update/:id',verifyToken,update);
export default router;