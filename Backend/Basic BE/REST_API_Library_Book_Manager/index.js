const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const books = require('./routes/books');
app.use('/books', books);

app.get('/',(req,res) => {
    res.send('Welcome to the REST API Library Book Manager!');
})

app.listen(port, () => {
    console.log((`Server is running on http://localhost:${port}`));
})