import UserLog from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import  Jwt  from "jsonwebtoken";
import {createError} from '../middlewares/error.js'

export const signUp =(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt)
        const userSignUP = new UserLog({
            ...req.body,password:hash
        })
        userSignUP.save();
        res.status(200).send("User has been created")
    }catch(err){
        next(err);
    }
}

export const signIn =async(req,res,next)=>{
        try{
                const userSignIn = await UserLog.findOne({userId:req.body.userId})
                if(!userSignIn) return next(createError("Pls enter valid UserId"));
                const isCorrect = await bcrypt.compare(req.body.password,userSignIn.password)
                if(!isCorrect) return next(createError(400,"Wrong creadentials"));

                const token = Jwt.sign({id: userSignIn._id},process.env.JWT);
                const {password,userId,email, ...others} = userSignIn._doc;
                res.cookie("access_token",token,{
                    httpOnly:true,
                }).status(200).json(others);

        }catch(err){
            next(err)
        }
}