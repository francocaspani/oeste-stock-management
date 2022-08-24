const Router = require('express').Router();
const validator = require('../config/validator')
const passportStore = require('../config/passport')
const passportUser = require('../config/passportUser')

const productControllers = require('../controllers/productControllers');
const {getProducts, getOneProduct, addProduct, modifyProduct, removeProduct} = productControllers

Router.route('/products')
.get(getProducts)
.post(addProduct)

Router.route('/products/:id')
.delete(removeProduct)
.put(modifyProduct)
.get(getOneProduct)

module.exports = Router