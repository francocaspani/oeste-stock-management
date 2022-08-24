require('dotenv').config()
require('./config/database')
const express = require('express')
const Router = require('./routes/routes')
const cors = require('cors')
const passport = require('passport')
const app = express()
const PORT = process.env.PORT || 4000
app.set('port', PORT)


app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api', Router)


app.listen(PORT, ()=>{
    console.log('Servidor corriendo en puerto' + PORT)
})

module.exports = app