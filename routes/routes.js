const Router = require('express').Router();
const validator = require('../config/validator')
const passport = require('../config/passport')

const productControllers = require('../controllers/productControllers');
const {getProducts, getOneProduct, addProduct, modifyProduct, removeProduct} = productControllers

Router.route('/products')
.get(getProducts)
.post(addProduct)

Router.route('/products/:id')
.delete(removeProduct)
.put(modifyProduct)
.get(getOneProduct)

