const mongoose = require('mongoose');
console.log("Database Connection was Established");

const productSchema = mongoose.Schema({
title:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
image:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
}




})


const Product = mongoose.model('Productlist',productSchema);

module.exports = Product;
