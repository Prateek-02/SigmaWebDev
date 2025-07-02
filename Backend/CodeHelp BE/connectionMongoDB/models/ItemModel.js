const {Schema,model} = require("mongoose");

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  type:{
    type: String,
    required: true,
    maxlength: 50
  },
  price: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ItemModel = model("Item", ItemSchema)

module.exports = ItemModel;