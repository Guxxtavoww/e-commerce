const cors = require("cors");
const router = require("express").Router();

const Order = require("../models/Order");
const { verifyTokenAndAuth, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");

//criar pedido
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();

        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
});

//update pedido
router.put("/:id", cors(), verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
});

//deleta pedido
router.delete("/:id", cors(), verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);

        res.status(200).json("Pedido Deletado");
    } catch (error) {
        res.status(500).json(error);
    }
});

//pega pedido do usuário
router.get("/:userId", verifyTokenAndAuth, async (req, res) => {
    try {
        const order = await Order.find({ userId: req.params.userId });

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
});

//pega todos os pedidos
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const productId = req.query.pid;
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: previousMonth }, ...(productId && { products: { $elemMatch: { productId } } }),
                },
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                }, 
            },
            {
                $group: {
                    _id: "$month",
                    quantity: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;