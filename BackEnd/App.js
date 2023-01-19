const express=require('express');
require('dotenv').config();
require('./db');
const User=require('./user');
const app=express();
const username='vat71';
app.post('/create-user',async (req,res)=>{
    const newuser=await User.isThisEmailUse(username)
    if(!newuser) return res.json({success:false,message:'username has already taken'})
    const user=await User({username:username,password:'vatsal71'})
    await user.save();
    res.json(user);
})
app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>');
});
app.listen(8000,()=>{
    console.log('port is listening');
});