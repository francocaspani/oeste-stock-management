const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    priceDistr: { type: Number },
    massStock: { type: Number },
    color: { type: String },
    discount: { type: Number },
    type: { type: String }
})

const Product = mongoose.model('product', productSchema)
module.exports = Product