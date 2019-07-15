require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const db = require('./db')

const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')

const authMiddleware = require('./middlewares/auth.middleware')

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('dwadwadawd'))
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => res.render('index',{name: 'Long'}))

app.use('/users',authMiddleware.requireAuth, userRoute)

app.use('/auth', authRoute)

app.listen(port, () => console.log(`app listen on port ${port}`))