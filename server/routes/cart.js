const cors = require("cors");
const router = require("express").Router();

const Cart = require("../models/Cart");
const { verifyTokenAndAuth, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");

//cria carrinho
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

//update carrinho
router.put("/:id", cors(), verifyTokenAndAuth, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

//deleta carrinho
router.delete("/:id", cors(), verifyTokenAndAuth, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Carrinho foi Deletado!");
    } catch (error) {
        res.status(500).json(error);
    }
});

//get user cart
router.get("/:userId", verifyTokenAndAuth, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get all carts
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();

        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;