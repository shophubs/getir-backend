const express = require('express')
require('./db/mongoose')
const recordRouter = require('./routers/record')

const app = express()
console.log("vishwas");
app.use(express.json())
app.use(recordRouter)
module.exports = app
