const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
   type:String,
   required:true,
   unique:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    confirmpassword:{
        type:String,
        required:true,
       
    },
    token:String
})

const User = mongoose.model('user registration', userSchema);
module.exports = User;
