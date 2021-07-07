const {Schema, model} = require("mongoose")

const OrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    uid:{
        type: String,
        required: true
    }

})

const Order = model("Order", OrderSchema);
module.exports = Order;