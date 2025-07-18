const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes')
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//load env config
dotenv.config();
const port = process.env.PORT

//connect to DB
connectDB();

//middleware to parse json
app.use(express.json());

//use routes
app.use('/students', studentRoutes);

// Sample route
app.get('/', (req, res) => {   
    res.send('Welcome to the Student Manager API!');
});

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
})
