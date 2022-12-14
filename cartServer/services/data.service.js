const db = require('./db')

//get all products from db
const getProducts = () => {
    return db.Product.find().then(
        (result) => {
            return {
                status: true,
                statusCode: 200,
                products: result
            }
        }
    )
}

//add cart item to db
const addtocart = (product) => {
    const addProduct = new db.Cart({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        rating: {
            rate: product.rating['rate'],
            count: product.rating['count']
        }
    })
    addProduct.save()
    return {
        status: true,
        statusCode: 200,
        message: "product added to cart"
    }
}

//get cart item from db
const getCart = () => {
    return db.Cart.find().then(
        (result) => {
            return {
                status: true,
                statusCode: 200,
                cart: result
            }
        }
    )
}

//addtowishlist
const addtowishlist = (product) => {
    return db.Wishlist.findOne({
        id: product.id
    }).then(result => {
        console.log(result);
        console.log(product);
        if (result) {
            return {
                status: false,
                statusCode: 404,
                message: "Item is already present inside your Wishlist"
            }
        }
        else {
            const newProduct = new db.Wishlist({
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category,
                image: product.image,
                rating: {
                    rate: product.rating.rate,
                    count: product.rating.count
                }
            })

            newProduct.save()
            return {
                status: true,
                statusCode: 200,
                message: "Item added to your wishlist"
            }
        }
    })
}

//get wishlist
const getWishList = () => {
    return db.Wishlist.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    wishlist: result
                }
            }
            else{
                return {
                    status: false,
                    statusCode: 404,
                    message: "Your wishlist is empty..."
                }
            }
        }
    )
}

//remove item from wishlist
const removeItemWlist = (id)=>{
    console.log(id);
    return db.Wishlist.deleteOne({
        id
    }).then(result=>{
        console.log(result);
        if(result){
            // return {
            //     status: true,
            //     statusCode: 200,
            //     wishlist: result
            // }
            return db.Wishlist.find().then(
                (result) => {
                    if (result) {
                        return {
                            status: true,
                            statusCode: 200,
                            wishlist: result
                        }
                    }
                    else{
                        return {
                            status: false,
                            statusCode: 404,
                            message: "Your wishlist is empty..."
                        }
                    }
                }
            )
        }
    })
}
module.exports = {
    getProducts,
    addtocart,
    getCart,
    addtowishlist,
    getWishList,
    removeItemWlist
}