const Store = require('../models/store')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')


const storeControllers = {
    signUpStore: async (req, res) => {
        let { name, username, password, isDistr } = req.body.storeData
        try {
            const storeExist = await Store.findOne({ username })
            if (storeExist) {
                res.json({
                    success: true,
                    message: 'Esta tienda ya existe'
                })
            } else {
                const hashPassword = bcryptjs.hashSync(password, 10)
                const newStore = await new Store({
                    name,
                    username,
                    password: [hashPassword],
                    isDistr
                })
                await newUser.save()
                res.json({
                    success: true,
                    message: 'Tienda creada correctamente'
                })
            }
        } catch (err) {
            res.json({
                success: false,
                message: 'Algo fallo, intenta de nuevo',
                error: console.log(err)
            })
        }
    },
    logInStore: async (req, res) => {
        const { username, password } = req.body.loggedStore
        try {
            const storeExist = await Store.findOne({ username }).populate('stock')
            if (!storeExist) {
                res.json({
                    success: false,
                    message: 'Tienda inexistente, por favor crea la tienda primero'
                })
            } else {
                let matchPassword = storeExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                if (matchPassword.length > 0) {
                    const storeData = {
                        id: storeExist._id,
                        name: storeExist.name,
                        username: storeExist.username,
                        stock: storeExist.stock,
                        isDistr: storeExist.isDistr
                    }
                    const token = jwt.sign({ ...storeData }, process.env.SECRET_KEY)
                    res.json({
                        success: true,
                        response: { token, storeData },
                        message: 'Ingresaste correctamente con ' + storeData.name
                    })
                } else {
                    res.json({
                        success: false,
                        message: 'Verifique su usuario o contraseña'
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                message: 'Algo fallo, intenta de nuevo'

            })
        }
    },
    getStores: async (req, res) => {
        let stores
        let error = null
        try {
            stores = await Store.find()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { stores },
            success: error ? false : true,
            error: error
        })
    },
    verifyTokenStore: (req, res) => {
        if (req.store) {
            res.json({
                success: true,
                response: {
                    storeData: {
                        id: req.store.id,
                        name: req.store.name,
                        username: req.store.username,
                        stock: req.store.stock,
                        isDistr: req.store.isDistr
                    }
                },
                message: 'Ingresaste correctamente con ' + req.store.name,
            })
        } else {
            res.json({
                success: false,
                message: 'Por favor ingresa nuevamente'
            })
        }
    },
    handleStockStore: async (req, res) => {
        const idStore = req.store.id
        const idProduct = req.params.id
        const newStock = req.body.newStock
        let store
        try {
            store = await Store.find({ _id: idStore })
            store = store[0]
            if (store.stock.length > 0) {
                const productIds = store.stock.map(e => e.productId)
                if (productIds.indexOf(idProduct) === -1) {
                    if (newStock === 0) {
                        res.json({
                            success: false,
                            message: 'Ingrese una cantidad mayor a 0'
                        })
                    } else {
                        store.stock.push({
                            productId: idProduct,
                            stock: newStock
                        })
                        await store.save()
                        res.json({
                            response: { store },
                            success: true,
                            message: 'Stock actualizado correctamente'
                        })
                    }
                } else {
                    const index = productIds.indexOf(idProduct)
                    if (newStock === 0) {
                        store.stock.splice(index, 1)
                        await store.save()
                        res.json({
                            response: { store },
                            success: true,
                            message: 'Stock actualizado correctamente'
                        })
                    } else {
                        store.stock[index].stock = newStock
                        await store.save()
                        res.json({
                            response: { store },
                            success: true,
                            message: 'Stock actualizado correctamente'
                        })
                    }
                }
            } else {
                store.stock.push({
                    productId: idProduct,
                    stock: newStock
                })
                await store.save()
                res.json({
                    response: { store },
                    success: true,
                    message: 'Stock actualizado correctamente'
                })
            }
        } catch (error) {
            console.log(error)
            res.json({
                response: 'Error',
                success: false,
                message: 'Algo fallo, por favor intenta de nuevo'
            })
        }
    }
}

module.exports = storeControllers