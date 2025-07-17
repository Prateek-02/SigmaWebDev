const express = require('express');
const app = express();
const port = 3000;
const studentRoutes = require('./routes/studentRoutes')

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
