// ye file saare item specific routes ko handle karega
const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', (req,res) =>{
    res.send("Got a GET request")
    // res.sendFile(__dirname + '/dummy.html')
})

//post request
router.post('/items',(req,res)=>{
    // res.send("Got a POST request")
    res.json({x:1,y:2,z:3})
})

//put request
router.put('/items/:id',(req,res)=>{
    res.send(`Got a PUT request for ID: ${req.params.id}`)
})

//delete request
router.delete('/items/:id',(req,res)=>{
    res.send(`Got a DELETE request for ID: ${req.params.id}`)
})

module.exports = router;
// ye file item ki saari routes ko handle karega