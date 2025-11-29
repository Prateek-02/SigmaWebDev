import {Router} from 'express'
import {changeCurrentPassword, getCurrentUser,
        getUserChannelProfile, getWatchHistory,
        loginUser, logoutUser, refreshAccessToken,
        registerUser, updateAccountDetails,
        updateUserAvatar, updateUserCoverImage
    } from '../controllers/usercontroller.js'
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
router.post("/change-password",verifyJWT,changeCurrentPassword)
router.get("/current-user",verifyJWT,getCurrentUser)
router.patch("/update-account",updateAccountDetails)
router.patch("/avatar",verifyJWT,upload.single("avatar"),updateUserAvatar)
router.patch("/cover-image",verifyJWT,upload.single("coverImage"),updateUserCoverImage)
router.get("/c/:username",verifyJWT,getUserChannelProfile)
router.get("/history",verifyJWT,getWatchHistory)

export default router