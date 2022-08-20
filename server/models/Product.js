const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        // required: true,
    },
    price: {
        type: Number,
        required: true
    },
    size: [ String ],
    categories: [ String ],
    inStock: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);