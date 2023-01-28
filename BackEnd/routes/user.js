const express=require('express')

const router=express.Router();
const {createUser, userSignIn}=require('./../controllers/user')
const {validateUserSignUp,userValidation, validateUserSignIn}=require('../middlewares/validation/user');
const { isAuth } = require('../middlewares/auth');
router.post('/createUser',validateUserSignUp,userValidation,createUser)
router.post('/signIn',validateUserSignIn,userValidation,userSignIn)
router.post('/createPost',isAuth,(req,res)=>{
    res.send('Welcome you are in secret route');
})

module.exports=router;