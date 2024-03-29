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
        // filtering
        const queryObject  =  { ...req.query };
        const excludeFields = ["page", "sort", "limit", "fields"];
        excludeFields.forEach((el) => delete queryObject[el]);
        console.log(queryObject);
        
        let queryString = JSON.stringify(queryObject);
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

        let query = Product.find (JSON.parse(queryString))
        
        // sorting
        if (req.query.sort){
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }

        // limiting the fields
        if (req.query.fields){
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select('__v')
        }

        // pagination
        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page){
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error('This page does not exist!');
        }
        console.log(page, limit, skip);

        
        const product = await query;
        res.json(product);
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