import express from "express";
import {
  intialReset,
  signIn,
  signUp,
  update,
  userVerify,
} from "../contoller/Auth.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.put("/update/:id", verifyToken, update);
router.post("/userId", userVerify);
router.put("/reset/:id", intialReset);
export default router;
