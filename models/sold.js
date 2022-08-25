const mongoose = require('mongoose')

const SoldSchema = new mongoose.Schema({
    productId: { type: mongoose.Types.ObjectId, ref: 'product' },
    amount: { type: Number },
    storeId: { type: mongoose.Types.ObjectId, ref: 'store' },
    date: { type: Date },
    price: { type: Number },
    payMethod: { type: String },
    payDate: { type: Date },
    comments: { type: String },
    isOnline: { type: Boolean }
})

const Sold = mongoose.model('product', productSoldSchema)
module.exports = Sold