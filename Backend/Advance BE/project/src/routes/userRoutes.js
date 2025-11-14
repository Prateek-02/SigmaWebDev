import {Router} from 'express'
import { loginUser, logoutUser, refreshAccessToken, registerUser } from '../controllers/usercontroller.js'
import { upload } from '../middlewares/multermiddleware.js'
import { verifyJWT } from '../middlewares/authmiddleware.js'

const router = Router()

router.post("/register",
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
) 

router.post("/login",loginUser)

// secured routes
router.post("/logout",verifyJWT, logoutUser)
router.post("/refresh-token",refreshAccessToken)

export default router