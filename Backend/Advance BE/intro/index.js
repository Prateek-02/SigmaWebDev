const express = require('express')
const app = express()
require('dotenv').config()
// const port = 3000
const port = process.env.PORT

app.get('/',(req,res) =>{
    res.send('Hello World')
})

app.get('/twitter',(req,res) =>{
    res.send('Prateek Raj')
})

app.get('/login',(req,res) =>{
    res.send('<h1>Welcome to login Page</h1>')
})

app.get('/youtube',(req,res) =>{
    res.send('<h1>Welcome to YouTube</h1>')
})

app.listen(port,() =>{
    console.log(`Example app listening on ${port}`)
})