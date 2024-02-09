const Product = require('../models/product.model');
const asyncHandler = require("express-async-handler");
const slugify = require('slugify'); // human readable unique identifier

// create new product
const createProduct =  asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
});

// update product
const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (req.body.title){
            req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findOneAndUpdate({ id }, req.body, {new: true,});
        res.json(updateProduct); 
    } catch (error){
        throw new Error(error);
    }
});


// delete product
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await Product.findOneAndDelete(id);
        res.json(deleteProduct); 
    } catch (error){
        throw new Error(error);
    }
});

// get single product by ID
const getProduct = asyncHandler (async (req, res) => {
    const { id } = req.params;
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error (error);
    }
 
});

// get all products
const getAllProducts = asyncHandler(async (req, res) => {
    try{
        const getallproducts = await Product.find();
        res.json(getallproducts);
    } catch {
        throw new Error (error);
    }
});


module.exports = {
    createProduct, 
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
};