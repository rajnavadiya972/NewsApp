const express=require('express');
require('dotenv').config();
require('./db');
const User=require('./user');
const app=express();
app.post('/create-user',async (req,res)=>{
    const user=await User({username:'vatsal',password:'vatsal71'})
    await user.save();
    res.json(user);
})
app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>');
});
app.listen(8000,()=>{
    console.log('port is listening');
});