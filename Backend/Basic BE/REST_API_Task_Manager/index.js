const express = require('express');
const app = express();
const port = 3000;
const tasksRouter = require('./routes/tasks');
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use('/tasks', tasksRouter);

app.get('/',(req,res)=>{
    res.send('Welcome to the Task Manager API');
})

app.listen(port, () =>{
    console.log(`Task Manager API is running on http://localhost:${port}`);
})