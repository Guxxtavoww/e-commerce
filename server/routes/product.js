const cors = require("cors");
const router = require("express").Router();

const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");

//criar produto
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
        
    try {
        const savedProduct = await newProduct.save();

        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

//atualizar produto
router.put("/:id", cors(), verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

//deleta produto
router.delete("/:id", cors(), verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Produto Deletado");
    } catch (error) {
        res.status(500).json(error);
    }
});

//produto single
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get all produtos
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const search = req.query.search;
    const qCategory = req.query.category;

    if(search) {
        try {
            const produtos = await Product.find({ title: { $regex: search, $options: "i" } });
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json(`Não Existe produtos com esse nome -> ${error}`);
        }
    } else {
        try {
            let products;
            if (qNew) {
                products = await Product.find().sort({ createdAt: -1 }).limit(1);
            } else if (qCategory) {
                products = await Product.find({
                    categories: {
                        $in: [ qCategory ],
                    },
                });
            } else {
                products = await Product.find();
            }
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }
});

module.exports = router;