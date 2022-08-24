const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')


const usersControllers = {
    signUpUser: async (req, res) => {
        let { firstName, lastName, email, password, isAdmin } = req.body.userData
        try {
            const userExist = await User.findOne({ email })
            if (userExist) {
                res.json({
                    success: true,
                    message: 'Este usuario ya existe, por favor haga log in'
                })
            } else {
                const hashPassword = bcryptjs.hashSync(password, 10)
                const newUser = await new User({
                    firstName,
                    lastName,
                    email,
                    password: [hashPassword],
                    isAdmin
                })
                await newUser.save()
                res.json({
                    success: true,
                    message: 'Cuenta creada correctamente'
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
    logInUser: async (req, res) => {
        const { email, password } = req.body.loggedUser
        try {
            const userExist = await User.findOne({ email })
            if (!userExist) {
                res.json({
                    success: false,
                    message: 'Cuenta inexistente, por favor registrate primero'
                })
            } else {
                let matchPassword = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                if (matchPassword.length > 0) {
                    const userData = {
                        id: userExist._id,
                        firstName: userExist.firstName,
                        lastName: userExist.lastName,
                        email: userExist.email,
                        isAdmin: userExist.isAdmin
                    }
                    const token = jwt.sign({ ...userData }, process.env.SECRET_KEY)
                    res.json({
                        success: true,
                        response: { token, userData },
                        message: 'Bienvenido nuevamente ' + userData.firstName
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
    getUsers: async (req, res) => {
        let users
        let error = null
        try {
            users = await User.find()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { users },
            success: error ? false : true,
            error: error
        })
    },
    verifyToken: (req, res) => {
        if (req.user) {
            res.json({
                success: true,
                response: {
                    userData: {
                        id: req.user.id,
                        firstName: req.user.firstName,
                        lastName: req.user.lastName,
                        email: req.user.email,
                        isAdmin: req.user.isAdmin
                    }
                },
                message: 'Bienvenido nuevamente ' + req.user.firstName
            })
        } else {
            res.json({
                success: false,
                message: 'Por favor ingresa nuevamente'
            })
        }
    }
}

module.exports = usersControllers