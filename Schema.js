const {Schema, model} = require("mongoose");

const productSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Product = model("Product", productSchema);
module.exports = Product;