import {Router} from 'express'
import { loginUser, logoutUser, registerUser } from '../controllers/usercontroller.js'
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

export default router