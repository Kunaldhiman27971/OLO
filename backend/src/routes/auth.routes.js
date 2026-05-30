import { Router } from "express"
import { register } from "../controllers/auth.controller.js"
import { registerValidator } from "../validators/auth.vaidate.js"


const authRouter = Router()

/*
    @route POST /api/auth/register
    @desc Register a new user
    @access Public  
    @body {username,email,password}
*/

authRouter.post("/register", registerValidator, register)

/*
    @route POST /api/auth/login
    @desc Login user and return JWT token
    @access Public  
    @body {email,password}
*/




/* 
    @route POST /api/auth/logout
    @desc Logout user by clearing the JWT cookie
    @access Private  
    @body No body required
*/




/*
    @route GET /api/auth/verify-email
    @desc Verify user's email using the token sent in the verification email
    @access Public  
    @query {token}
*/




/*
    @route get /api/auth/get-user
    @desc Get the currently logged in user's details
    @access Private  
    @body No body required
*/




/*
    @route POST /api/auth/forgot-password
    @desc Send password reset email to user
    @access Public  
    @body {email}
*/



export default authRouter