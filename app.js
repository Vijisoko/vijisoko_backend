require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var bodyParser = require("body-parser");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DB'))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

const businessRouter = require('./routes/business.js')
app.use('/business', businessRouter)

const ownerRouter = require('./routes/owner.js')
app.use('/owner', ownerRouter)

const customerRouter = require('./routes/customer.js')
app.use('/customer', customerRouter)

const orderRouter = require('./routes/order.js')
app.use('/order', orderRouter)

const productRouter = require('./routes/product.js')
app.use('/product', productRouter)

app.listen(3100, () => console.log("server started"))