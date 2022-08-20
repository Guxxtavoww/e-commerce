const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true
    },
    username: { 
        required: true, 
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    },
    gender: String,
    adress: String,
    img: String
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);