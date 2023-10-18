const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const ejs = require('ejs');
const cors = require('cors');
dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
//creating a schema for users
const User = mongoose.model('User',{
    firstName:String,
    lastName:String,
    contactNumber:String,
    Email:{ type: String, unique: true },
    password:String,
    passwordAgain:String,
})


app.get('/',(req,res)=>{
    res.json({
        status:'success',
        message:"all good"
    })
})


// app.post('/api/register', (req, res) => {
    
//     const { firstName, lastName, contactNumber, email, password } = req.body;
//     res.json({
//       firstName,
//       lastName,
//       contactNumber,
//       email,
//     });
//   });

app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log(`server runnning on http://localhost:${process.env.PORT}`)
    }).catch(error =>console.log(error))
  
})

