const express = require('express');
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct } = require('../controller/product.controller');
const { isAdmin, authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', isAdmin, authMiddleware, createProduct);
router.get('/:id', getProduct);
router.put('/:id', isAdmin, authMiddleware, updateProduct);
router.delete('/:id', isAdmin, authMiddleware, deleteProduct);
router.get('/', getAllProducts);

module.exports = router;