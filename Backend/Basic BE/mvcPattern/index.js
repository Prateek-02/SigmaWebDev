const express = require('express')
const connectDB = require('./config/db')
const app = express()
const productRoutes = require('./routes/productRoutes')
const dotenv = require('dotenv')


// load env config
dotenv.config()
const port = process.env.PORT

// connect to database
connectDB()

app.use(express.json())

// Routes
app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Product app listening on port ${port}`)
})
