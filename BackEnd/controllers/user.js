const jwt=require('jsonwebtoken')
const User=require('./../models/user')

exports.createUser=async (req, res) => {
    const {username,email,password,confirmPassword}=req.body;
    const isNewUser = await User.isThisEmailInUse(email)
    if (!isNewUser)
        return res.json({
            success: false,
            message: 'This email is already in use'
        })
    const user = await User({
        username,
        email,
        password,
        confirmPassword
    })
    await user.save();
    res.json(user)
}

exports.userSignIn=async(req,res)=>{
    const {username,email,password}=req.body;
    const user=await User.findOne({username});
    const userEmail=await User.findOne({email});
    if(!user || !userEmail)return res.status(425).json({success:false,message:'username / password does not match'});

    const isMatch= await user.comparePassword(password);
    if(!isMatch)return res.status(425).json({success:false,message:'username / password does not match'});
    console.log("success");
    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
    res.json({success:true,user,token});
    // res.status(200).json({success:true});
}