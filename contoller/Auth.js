import UserLog from "../models/userModel.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import { createError } from "../middlewares/error.js";

export const signUp = (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const userSignUP = new UserLog({
      ...req.body,
      password: hash,
    });
    userSignUP.save();
    res.status(200).json("User has been created");
  } catch (err) {
    next(err);
  }
};
export const signIn = async (req, res, next) => {
  try {
    const userSignIn = await UserLog.findOne({ userId: req.body.userId });
    if (!userSignIn)
      return res.status(401).json(createError(401, "UserId is not valid"));
    const isCorrect = await bcrypt.compare(
      req.body.password,
      userSignIn.password
    );
    if (!isCorrect)
      return res.status(401).json(createError(401, "Wrong creadentials"));

    const token = Jwt.sign({ id: userSignIn._id }, process.env.JWT);
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(202)
      .json("User is successfully Logged In Successfully");
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res) => {
  if (req.params.id === req.user.id) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const updateUser = await UserLog.findByIdAndUpdate(
        req.params.id,
        {
          $set: { password: hash },
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      throw err;
    }
  } else {
    return res
      .status(401)
      .json(createError(403, "you can update your account only"));
  }
};

export const userVerify = async (req, res, next) => {
  try {
    const userSignIn = await UserLog.findOne({ userId: req.body.userId });
    if (!userSignIn)
      return res.status(401).json(createError(401, "UserId is not valid"));
    const token = Jwt.sign({ id: userSignIn._id }, process.env.JWT);
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(202)
      .json(userSignIn);
  } catch (err) {
    next(err);
  }
};

export const intialReset = async (req, res) => {
  if (req.params.id) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const updateUser = await UserLog.findByIdAndUpdate(
        req.params.id,
        {
          $set: { password: hash },
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      throw err;
    }
  } else {
    return res
      .status(401)
      .json(createError(403, "you can update your account only"));
  }
};
