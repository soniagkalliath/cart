//server creation

 //1. import express
 const express= require('express')

 const dataService = require('./services/data.service')


//import cors
const cors = require('cors')

 //2. create server app
 const app = express()

 //to define origin using cors
app.use(cors({
  origin: ['http://localhost:4200','http://192.168.1.8:8080','https://majestic-parfait-142a84.netlify.app']
}))
  //to parse JSON 
  app.use(express.json())

   //4. set up port number
 app.listen(3000,()=>{
    console.log('Sever started at port 3000');
})

//api to get all products
app.get('/all-products',(req,res)=>{
     dataService.getProducts()
     .then(result=>{
       res.status(result.statusCode).json(result)
     })
    
    })


//api to get all products from cart
app.get('/get-cart',(req,res)=>{
  dataService.getCart()
  .then(result=>{
    res.status(result.statusCode).json(result)
  })
 
 })

 //api to add  product to cart
app.post('/add-to-cart',(req,res)=>{
  dataService.addtocart(req.body)
  .then(result=>{
    res.status(result.statusCode).json(result)
  })
 
 })

  //api to add  product to wishlist
app.post('/add-to-wlist',(req,res)=>{
  dataService.addtowishlist(req.body)
  .then(result=>{
    res.status(result.statusCode).json(result)
  })
 
 })

 //api to get wishlist
app.get('/get-wishlist',(req,res)=>{
  dataService.getWishList()
  .then(result=>{
    res.status(result.statusCode).json(result)
  })
 
 })
 //removeItemWlist 

 app.delete('/remove-item-wishlist/:id',(req,res)=>{
  console.log(req.params.id);
  dataService.removeItemWlist(req.params.id)
  .then(result=>{
    res.status(result.statusCode).json(result)
  })
 
 })