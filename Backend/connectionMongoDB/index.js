const express = require('express');
const app = express();
const connectDB = require('./db');
const item = require('./routes/item');


const port = 3000;

//body parser
app.use(express.json());

//connect to database
connectDB();

app.use('/api', item);

app.get('/', (req,res) => {
    console.log("I am inside home page route handler");
    res.send("Hello Jee, Welcome to CodeHelp");
})

app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
})