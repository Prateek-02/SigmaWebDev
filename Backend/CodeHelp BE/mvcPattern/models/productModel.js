const {Schema,model} = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  category:{
    type: String,
    required: true,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = model("product", ProductSchema)

module.exports = ProductModel;