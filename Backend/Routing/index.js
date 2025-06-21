const express = require('express')
const app = express()
const port = 3000

// import item ki router file
const item = require('./routes/item')
const birds = require('./routes/birds')

//load into application
app.use('/item', item)
app.use('/birds', birds)
// ye file saari routes ko handle karega

// -> /api/ -> item home page
// ->/api/items -> item post request
// -> /api/items/:id -> item put and delete request


app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})