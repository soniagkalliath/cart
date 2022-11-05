const db = require('./db')

//get all products from db
const getProducts = ()=>{
    return db.Product.find().then(
        (result)=>{
            return {
                status:true,
                statusCode:200,
                products:result
            }
        }
    )
}

//add cart item to db
const addtocart = (product)=>{
    const addProduct = new db.Cart({
        id:product.id,
        title:product.title,
        price:product.price,
        description:product.description,
        category:product.category,
        image:product.image,
        rating:{
            rate:product.rating['rate'],
            count:product.rating['count']
            }
    })
    addProduct.save()
    return{
        status:true,
        statusCode:200,
        message:"product added to cart"
    }
}

//get cart item from db
const getCart = ()=>{
    return db.Cart.find().then(
        (result)=>{
            return {
                status:true,
                statusCode:200,
                cart:result
            }
        }
    )
}

module.exports = {
    getProducts,
    addtocart,
    getCart
}