import { Router } from "express"
import { register, verifyEmail, loginUser, logoutUser, forgotPassword, getResetPasswordPage, resetPassword,getMe } from "../controllers/auth.controller.js"
import { registerValidator, loginValidator, forgotPasswordValidator, resetPasswordValidator } from "../validators/auth.vaidate.js"
import { requireAuth } from "../middleware/auth.middleware.js"


const authRouter = Router()

/*
    @route POST /api/auth/register
    @desc Register a new user
    @access Public  
    @body {username,email,password}
*/

authRouter.post("/register", registerValidator, register)


/*
    @route GET /api/auth/verify-email
    @desc Verify user's email using the token sent in the verification email
    @access Public  
    @query {token}
*/

authRouter.get("/verify-email", verifyEmail)


/*
    @route POST /api/auth/login
    @desc Login user and return JWT token
    @access Public  
    @body {email,password}
*/

authRouter.post("/login", loginValidator, loginUser)


/* 
    @route POST /api/auth/logout
    @desc Logout user by clearing the JWT cookie
    @access Private  
    @body No body required
*/

authRouter.post("/logout", requireAuth, logoutUser)

/*
    @route get /api/auth/get-user
    @desc Get the currently logged in user's details
    @access Private  
    @body No body required
*/

authRouter.get("/get-user", requireAuth, getMe)


/*
    @route POST /api/auth/forgot-password
    @desc Send password reset email to user
    @access Public  
    @body {email}
*/

authRouter.post("/forgot-password", forgotPasswordValidator, forgotPassword)

authRouter.get("/reset-password", getResetPasswordPage)

authRouter.post("/reset-password", resetPasswordValidator, resetPassword)


export default authRouter