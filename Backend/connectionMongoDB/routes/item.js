const express = require('express');
const router = express.Router();

const Item = require('../models/ItemModel');

//routes

//CRUD operations

//View/Read
router.get('/item',async(req,res) => {
    try{
        const items = await Item.find();
        res.status(200).json(items);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
})

//Create

router.post('/item',async(req,res)=>{
    try{
        const {name,type,price} = req.body;
        const newItem = new Item({
            name,
            type,
            price
        });
        await newItem.save();
        res.status(200).json({message: 'User created successfully', item: newItem});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
})

//Update
router.put('/item/:id', async(req,res) => {
    const {id} = req.params;
    const {name,type,price} = req.body;

    try{
        const updatedItem = await Item.findByIdAndUpdate(id, {
            name,
            type,
            price
        })
        if(!updatedItem){
            return res.status(404).json({message: 'Item not found'});
        }
        res.status(200).json({message: 'Item updated successfully', item: updatedItem});
    }
    catch{
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
})

//delete
router.delete('/item/:id', async(req,res) => {
    const {id} = req.params;

    try{
        const deletedItem = await Item.findByIdAndDelete(id);
        if(!deletedItem){
            return res.status(404).json({message: 'Item not found'});
        }
        res.status(200).json({message: 'Item deleted successfully', item: deletedItem});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
})





module.exports = router;