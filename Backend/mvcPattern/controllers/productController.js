const Product = require('../models/productModel')

//business logic
const getProducts = async (req,res) => {
    try{
        const products = await Product.find();
        if(!products || products.length === 0){
            return res.status(404).json({
                success: false,
                message: "No products found",
            });
        }
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }   
}

const createProducts = async (req,res) => {
    try {
        const {name, category, description, price} = req.body;
        if(!name || !category || !description || !price){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }
        const newProduct = new Product({name, category, description, price});
        await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: newProduct,
        });
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

const updateProducts = async (req, res) => {
    try{
        const {id} = req.params;
        const {name, category, description, price} = req.body;

        if(!name || !category || !description || !price){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const product = await Product.findByIdAndUpdate(id, {name, category, description, price}, {new: true});
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product,
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }

}

const deleteProducts = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

module.exports = {getProducts, createProducts, updateProducts,deleteProducts};