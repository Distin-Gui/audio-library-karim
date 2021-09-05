const express = require('express')

const app = express()

// load dotenv npm library
require('dotenv').config()

const databaseConnection = require('./src/config/database.config')

databaseConnection()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// end points

app.use('/api', require('./src/album/album.route'))
app.use('/api', require('./src/category/category.route'))
app.use('/api', require('./src/track/track.route'))

app.use('*', (_, res) => { res.status(404).json({ msg: 'API End Point doesn\'t exist' }) })

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})