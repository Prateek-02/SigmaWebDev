const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Server is ready")
})

// get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id : 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id : 2,
            title: 'Another joke',
            content: 'This is 2nd joke'
        },
        {
            id : 3,
            title: 'Third joke',
            content: 'This is 3rd joke'
        },
        {
            id : 4,
            title: 'Fourth joke',
            content: 'This is 4th joke'
        },
        {
            id : 5,
            title: 'Fifth joke',
            content: 'This is 5th joke'
        },
    ]
    res.send(jokes)
})

app.listen(port,() =>{
    console.log(`server listening at ${port}`)
})