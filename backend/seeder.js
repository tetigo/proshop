// const mongoose = require('mongoose')
require('dotenv').config()
require('colors')
const users = require('./data/users')
const products = require('./data/products')
const db = require('./models')
const connectDB = require('./config/db')


// dotenv.config()
connectDB()

const importData = async () => {
    try {
        await db.Order.deleteMany()
        await db.Product.deleteMany()
        await db.User.deleteMany()

        const createdUsers = await db.User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(prod => ({ ...prod, user: adminUser }))

        await db.Product.insertMany(sampleProducts)

        console.info('Data Imported'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await db.Order.deleteMany()
        await db.Product.deleteMany()
        await db.User.deleteMany()
        console.info(`Data Destroyed!`.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
