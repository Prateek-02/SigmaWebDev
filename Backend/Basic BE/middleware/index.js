const express = require('express')
const app = express()
const port = 3000

// Middleware to parse JSON bodies
// inbuilt middleware in Express
app.use(express.json())

//middleware - logging, auth , validation


// creating custom middleware functions
// logging middleware
const loggingMiddleware = function (req,res,next){
    console.log("LOGING kar raha hu");
    next();
}
//loading middleware into the app
app.use(loggingMiddleware)

//auth middleware
const authMiddleware = function (req, res, next) {
    console.log("AUTH kar raha hu");
    // res.send("Chalo seedha ghar")
    next();
}
app.use(authMiddleware)

//validation middleware
const validationMiddleware = function (req, res, next) {
    console.log("VALIDATION kar raha hu");
    next();
}   
app.use(validationMiddleware)


const route = require('./routes/route');

// using the route
app.use('/api', route);

app.get('/', (req, res) => {
  console.log('Mai  route handler hu')
  console.log(req.body) // This will log the request body
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
