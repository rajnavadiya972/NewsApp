const express=require('express');
require('dotenv').config();
const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log(err);
})

const app=express();

app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>');
});
app.listen(8000,()=>{
    console.log('port is listening');
});