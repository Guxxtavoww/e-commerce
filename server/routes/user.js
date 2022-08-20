const cors = require("cors");
const CryptoJs = require("crypto-js");
const router = require("express").Router();

const User = require("../models/User");
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");

//update Usuário
router.put("/:id", cors(), verifyTokenAndAuth, async (req, res) => {
    if (req.body.password) req.body.password = CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

//deletar Usuário
router.delete("/:id", cors(), verifyTokenAndAuth, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json("Usuário Deletado");
    } catch (error) {
        res.status(500).json(error);
    }
});

//pegar Usuário pelo id
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        const { password, ...outros } = user._doc;

        res.status(200).json(outros);
    } catch (error) {
        res.status(500).json(error);
    }
});

// pega todos os usuários
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;

    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get status
router.get("/users/status", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;