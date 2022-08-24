const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: [{ type: String, required: true }],
    stock: [{
        productId: { type: mongoose.Types.ObjectId, ref: 'product' },
        stock: { type: Number }
    }],
    isDistr: { type: Boolean, required: true }
})

const Store = mongoose.model('store', storeSchema)
module.exports = Store