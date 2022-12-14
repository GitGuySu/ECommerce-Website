const { addListener } = require("../models/productModel");
const Product = require("../models/productModel");

//Create Product -- ADMIN
exports.createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}

//get all products
exports.getAllProducts = async(req,res)=>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
}

//update product -- ADMIN
exports.updateProduct = async(req,res,next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    product = Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true, 
        runValidators:true,
        useFindAndModify:false        
    })
    res.status(200).json({
        success:true,
        product
    })
}