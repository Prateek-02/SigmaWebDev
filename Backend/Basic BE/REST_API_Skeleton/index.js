const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const item = require('./routes/items');

app.use('/items',item);

app.listen(port,() => {
    console.log(`Listening at http://localhost:${port}`)
})