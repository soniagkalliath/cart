
//MONOGODB connection

//1. import mongoose
const mongoose = require('mongoose')

//2. define connection string
mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('MongoDb Connected successfully...');
})

//3. create a model to store all product
const Product = mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

//3. create a model to store all product
const Cart = mongoose.model('Cart',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

//4. To use User in other files - we have to export it
module.exports ={
    Product,
    Cart
}