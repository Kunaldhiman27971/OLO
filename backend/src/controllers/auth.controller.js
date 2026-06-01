import userModel from "../models/user.model.js"
import JWT from "jsonwebtoken"
import { sendEmail } from "../services/mail.service.js"


export async function register(req,res){
    const {username,email,password}= req.body
    const isUserExist = await userModel.findOne({$or: [{email},{username}]})

    if(isUserExist){
        return res.status(400).json({
            message:"User with this email or username already exists",
            error:"User already exists"
        })
    }

    const user = await userModel.create({username,email,password})
    await sendEmail({
        to:email,
        subject:"Welcome to Olo! Please verify your email",
        html:`
                <p>Hi ${username},</p>
                <p>Thank you for registering at Olo! Please verify your email by clicking the link below:</p><a href="http://localhost:3000/api/auth/verify-email?token=${user.emailVerificationToken}">Verify Email</a>
                <p>Best regards,<br>The Olo Team</p>
                `
    })
    res.status(201).json({
        message:"User registered successfully. Please check your email to verify your account.",
        success:true,
        user:{id:user._id,
        username:user.username,
        email:user.email}
    })
}
