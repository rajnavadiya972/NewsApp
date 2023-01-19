const express = require('express');
require('dotenv').config();
require('./models/db')

const User = require('./models/user')
const app = express();
const userRouter=require('./routes/user')

// app.use((req, res, next) => {
//     req.on('data',chunk=>{
//         const data=JSON.parse(chunk);
//         req.body=data;
//         next();
//     })
// })

//same as above
app.use(express.json())

//==============check password===========
// const test=async (email,password)=>{
//     const user=await User.findOne({email:email});
//     const result=await user.comparePassword(password);
//     console.log(result)
// }
// test('raj1@gmail.com','raj12346')

//=================================

app.get('/test', (req, res) => {
    res.send('hello world')
})

app.use(userRouter)
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});
app.listen(8000, () => {
    console.log('port is listening');
});