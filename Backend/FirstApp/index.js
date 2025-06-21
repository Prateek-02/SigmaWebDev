const express = require('express');  // include express module
const app = express();   // initialize express
const port = 3000;  // set the port

app.get('/', (req,res) => {
    res.send('Get request receive hui hai');  // send a response to the client
})

//request -> get /  post / put / delete
//path -> / , /about , /contact

//start your app or server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);  // log the server status
})