const express = require('express')
const app = express()
const port = 3000

// app.get('/',(req,res)=>{
//     res.send(('Hello Duniya!'))
// })

//Request ki kahani

//get request
app.get('/', (req,res) =>{
    res.send("Got a GET request")
})

//post request
app.post('/items',(req,res)=>{
    res.send("Got a POST request")
})

//put request
app.put('/items/:id',(req,res)=>{
    res.send(`Got a PUT request for ID: ${req.params.id}`)
})

//delete request
app.delete('/items/:id',(req,res)=>{
    res.send(`Got a DELETE request for ID: ${req.params.id}`)
})

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})