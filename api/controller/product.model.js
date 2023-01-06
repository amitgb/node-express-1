const mongoose = require('mongoose')
const Product = require('../model/product')

// Get all Products
exports.getProducts = async (req,res,next) =>{
        try{
            const products = await Product.find(); // Get all documents from the database
            res.status(200).json({
                msg: "All documents fetched successfully",
                data: products
            })
        } catch (err){
            res.status(501).json({
                code: 0,
                msg: "Something went wrong",
                err: err
            })  
        }
}

// Create a Product
exports.createProduct = async (req,res,next) =>{
    try{
        // Create a product object
        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        })

        const data = await product.save(); // cal the save method and wait for it to return
        // If it reaches this line, means save() was successfull
        res.status(200).json({
            msg: "Product created successfully",
            product: data
        })

    } catch (err){ // If it reaches this line, means save() failed.
        res.status(200).json({
            code: 0,
            msg: "Something went wrong",
            err: err
        })
    }
}

// Get Single Product
exports.getProductById = async (req,res) =>{
    try{
        // Get single document from the database
        const product = await Product.findById(req.params.productId) 
        let msg = ""
        console.log(product)
        if (product === null){
            msg = "No document found"
        } else {
            msg = "Single document fetched successfully"
        }

        res.status(200).json({
            message: msg ,
            data: product
        })
    } catch (err){
        res.status(501).json({
            code: 0,
            msg: "Something went wrong",
            err: err
        })  
    }
}

// Update a Product
exports.updateProduct = async (req,res) =>{
    try{
        console.log("[Product ID] " + req.params.productId)
        console.log(req.body)
        const data = await Product.findByIdAndUpdate(req.params.productId, req.body)
        console.log(data)
        res.status(200).json({
            msg: "Product updated successfully",
            product: data
        })

    } catch (err){ 
        res.status(501).json({
            code: 0,
            msg: "Something went wrong while updating",
            err: err
        })
    }
}

// Delete a Product
exports.deleteProduct = async (req,res) =>{
    try{
        const data = await Product.findByIdAndDelete(req.params.productId)
        console.log(data)
        res.status(200).json({
            msg: "Product deleted successfully",
            product: data
        })

    } catch (err){ 
        res.status(501).json({
            code: 0,
            msg: "Something went wrong while deleting",
            err: err
        })
    }
}
