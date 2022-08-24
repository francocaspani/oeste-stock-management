const Store = require('../models/store')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')


const storeControllers = {
    signUpStore: async (req, res) => {
        let { name, username, password, isDistr, isAdmin } = req.body.storeData
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
                    isDistr,
                    isAdmin
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
                        isAdmin: storeExist.isAdmin,
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
    verifyToken: (req, res) => {
        if (req.store) {
            res.json({
                success: true,
                response: {
                    storeData: {
                        id: req.store.id,
                        name: req.store.name,
                        username: req.store.username,
                        stock: req.store.stock,
                        isAdmin: req.store.isAdmin,
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
    }
}

module.exports = storeControllers