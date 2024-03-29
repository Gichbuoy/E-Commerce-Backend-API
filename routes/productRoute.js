const express = require('express');
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct } = require('../controller/product.controller');
const { isAdmin, authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, isAdmin, createProduct);
router.get('/:id', getProduct);
router.put('/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/:id', authMiddleware, isAdmin, deleteProduct);
router.get('/', getAllProducts);

module.exports = router;