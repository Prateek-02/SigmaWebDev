const express = require('express')
const router = express.Router()

//middlewares
const auth = function (req, res, next) {
    console.log("I am inside auth waala middleware");

    // tumahari sahayata ke liye dummy user add kr raha hu
    req.user = {
        userId : 1,
        role: "admin"
    }

    if(req.user){
        //if a valid user is there in req, then proceed to next middleware or route handler
        next();
    }
    else{
        res.json({
            success: false,
            message: "You are not a valid user"
        });
    }
}

const isStudent = function (req, res, next) {
    console.log("I am inside isStudent waala middleware");
    if(req.user.role === "student"){
        //if the user is a student, then proceed to next middleware or route handler
        next();
    }
    else{
        res.json({
            success: false,
            message: "You are not a student"
        });
    }

}

const isAdmin = function (req, res, next) {
    console.log("I am inside isAdmin waala middleware");    

    if(req.user.role === "admin"){
        //if the user is an admin, then proceed to next middleware or route handler
        next();
    }
    else{
        res.json({
            success: false,
            message: "You are not an admin"
        });
    }
}

//routes
router.get('/student',auth,isStudent, (req, res) => {
    console.log("I am inside student route handler");
    res.json({
        success: true,
        message: "You are a valid student",
        user: req.user
    });
})

router.get('/admin',auth,isAdmin, (req, res) => {
    console.log("I am inside admin route handler");
    res.json({
        success: true,
        message: "You are a valid admin",
        user: req.user
    });
})

module.exports = router
