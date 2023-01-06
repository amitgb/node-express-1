const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const Product = require('../model/product')
const productController = require('../controller/product.model') // import the controller


 

router.get('/', productController.getProducts
// (req, res, next) => {
//     res.status(200).json({
//         msg: "This is a GET request for product"
//     })
// }
)

// Code for product POST request
router.post('/', productController.createProduct 
//(req, res, next) => {

    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // }

    // res.status(200).json({
    //     msg: "This is a POST request for product",
    //     create: "Product created successfully",
    //     product: product
    // })

    // Build a const, by using the Product Model
    // const product = new Product({
    //     _id: new mongoose.Types.ObjectId(),
    //     name: req.body.name,
    //     price: req.body.price
    // })

    // // Save the const (product) to the database
    // product.save().then((res) => {
    //     console.log(res)
    //     res.status(200).json({
    //     create: "Product created successfully",
    //     product: product
    // })
    // }).catch((err) => {
    //     console.log(err)
    // })
//}
)

router.get('/:productId', productController.getProductById
// (req, res, next) => {

//     const id = req.params.productId

//     if (id == "7") {
//         res.status(200).json({
//             msg: "You have a special id with good cashback"
//         })
//     } else {

//         res.status(200).json({
//             msg: "You have a regular id with no cashback"
//         })
//     }
// }
)

router.put('/:productId', productController.updateProduct

// (req, res, next) => {
//     const id = req.params.productId

//     res.status(200).json({
//         msg: "This is a PUT request for product",
//         id: id
//     })
// }
)

router.delete('/:productId', productController.deleteProduct 
// (req, res, next) => {
//     const id = req.params.productId

//     res.status(200).json({
//         msg: "This is a DELETE request for product",
//         id: id
//     })
// }
)

module.exports = router