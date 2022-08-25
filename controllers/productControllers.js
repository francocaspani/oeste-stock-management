const Product = require('../models/product')

const productControllers = {
    getProducts: async (req, res) => {
        let products
        let error = null
        try {
            products = await Product.find()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { products },
            success: error ? false : true,
            error: error
        })
    },
    getOneProduct: async (req, res) => {
        const id = req.params.id
        let product
        let error = null
        try {
            product = await Product.findOne({ _id: id })
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { product },
            success: error ? false : true,
            error: error
        })
    },
    addProduct: async (req, res) => {
        const { name, img, price, priceDistr, discount, color, type } = req.body
        let product
        let error = null
        try {
            product = await new Product({
                name,
                img,
                price,
                priceDistr,
                discount,
                color,
                type
            }).save()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { product },
            success: error ? false : true,
            error: error
        })
    },
    modifyProduct: async (req, res) => {
        const id = req.params.id
        const product = req.body
        let productdb
        let error = null
        try {
            productdb = await Product.findOneAndUpdate({ _id: id }, product, { new: true })
        } catch (err) { error = err }
        if (error) {
            res.status(404)
        }
        res.json({
            response: error ? 'ERROR' : { productdb },
            success: error ? false : true,
            error: error
        
        })
    },
    removeProduct: async (req, res) => {
        const id = req.params.id
        let product
        let error = null
        try {
            product = await Product.findOneAndDelete({ _id: id })
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { product },
            success: error ? false : true,
            error: error
        })
    },
    // readProduct: async (req, res) => {
    //     const id = req.params.id
    //     let products
    //     let error = null
    //     try {
    //         products = await Product.find({ ambient: id })
    //             .populate('ambient')
    //     } catch (err) { error = err }
    //     res.json({
    //         response: error ? 'ERROR' : { products },
    //         success: error ? false : true,
    //         error: console.log(error)
    //     })
    // }
    // }
}


module.exports = productControllers