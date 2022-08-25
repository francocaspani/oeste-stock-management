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

const usersControllers = require('../controllers/usersControllers');
const {signUpUser, logInUser, getUsers, verifyToken} = usersControllers

Router.route('/auth/signup')
.post(validator,signUpUser)

Router.route('/auth/login')
.post(logInUser)

Router.route('/auth/users')
.get(getUsers)

Router.route('/auth/verifytoken')
.get(passportUser.authenticate('jwt',{ session: false}), verifyToken)

const storeControllers = require('../controllers/storeControllers');
const {signUpStore, logInStore, getStores, verifyTokenStore} = storeControllers

Router.route('/store/signup')
.post(signUpStore)

Router.route('/store/login')
.post(logInStore)

Router.route('/store/users')
.get(getStores)

Router.route('/store/verifytoken')
.get(passportStore.authenticate('jwt',{ session: false}), verifyTokenStore)



module.exports = Router