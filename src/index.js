const path = require('path')
const express = require('express')
const app = express()
const router = require('./routes')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/', router)

app.listen(process.env.PORT, process.env.HOST)
