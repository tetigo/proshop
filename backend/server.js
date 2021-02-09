const dotenv = require('dotenv')
const express = require('express')
const connectDB = require('./config/db')
const colors = require('colors')
const routes = require('./routes/productRoute')
const { notFound, errorHandler } = require('./middleware/errorHandler')

const app = express()
dotenv.config()
connectDB()

app.use((req, res, next) => {
    console.info(req.originalUrl)
    next()
})

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.use('/api/products', routes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(5000, () => console.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))





