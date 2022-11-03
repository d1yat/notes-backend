const express = require('express')
const router = express.Router()
const Product = require('../models/Product.js')

const products = [
    new Product('A001', 'Monitor BenQ 24 Inch'),
    new Product('A002', 'Keyboard Logitech'),
    new Product('A003', 'Mouse AOC'),
    new Product('A004', 'Printer HP'),
    new Product('A005', 'CPU Dell Optiplex'),
]

router.get('/products', (req, res) => {
    res.json({
        status: 'success',
        code: 200,
        data: products
    })
})

router.get('/product/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(p => p.id == id)

    if (product === undefined) {
        return res.json({
            status: 'error',
            code: 404,
            data: 'Record not found'
        })
    }

    res.json({
        status: 'success',
        code: 200,
        data: product
    })
})

module.exports = router
