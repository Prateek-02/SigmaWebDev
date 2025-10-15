import {Router} from 'express'
import { registerUser } from '../controllers/usercontroller.js'
import { upload } from '../middlewares/multermiddleware.js'

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

export default router