const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT||3000

require('dotenv').config();
let user = process.env.DB_USER
let pass = process.env.DB_PASS
const url = `mongodb+srv://${user}:${pass}@recipes.qszxh.mongodb.net/recipes?retryWrites=true&w=majority`



const app = express()
app.use(cors())


mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})

app.use(express.json())


//recipes
const recipeRouter = require('./routes/recipeRoute')
app.use('/recipes', recipeRouter)

//shopping
const shoppingRouter = require('./routes/shoppingRoute')
app.use('/shopping', shoppingRouter)



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})