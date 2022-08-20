const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    products: {
        productId: {
            type: String,
            required: true
        },
        qtd: {
            type: Number,
            default: 1
        }
    },
    quantity: {
        type: Number,
        default: 1
    },
    adress: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: "Pendente"
    },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);