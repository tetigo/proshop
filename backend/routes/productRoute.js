const products = require('../data/products')
const router = require('express').Router()
const db = require('../models')
const asyncHandler = require('express-async-handler') //com isso não preciso usar trycatch

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await db.Product.find({})
    res.json(products)
}))

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await db.Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
}))


module.exports = router
