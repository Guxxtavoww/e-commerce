const jwt = require("jsonwebtoken");
const CryptoJs = require("crypto-js");
const router = require("express").Router();

const User = require("../models/User");

// cadastro
router.post("/cadastro", async (req, res) => {
    if(req.body.username === "" || req.body.email === "" || req.body.password  === "") {
        res.status(500).json("Por Favor, não deixe campos vazios");
    } else {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
            gender: req.body.gender,
            adress: req.body.adress,
            img: ""
        });

        try {
            const savedUser = await newUser.save();

            res.status(200).json(savedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    }
});

//login
router.post("/login", async (req, res) => {
    if(req.body.username === "" || req.body.password  === "") {
        res.status(500).json("Por Favor, não deixe campos vazios");
    } else {
        try {
            const user = await User.findOne({ username: req.body.username });

            !user && res.status(401).json("Não existe um úsuario com essas credenciais");

            const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS_SEC).toString(CryptoJs.enc.Utf8);

            hashedPassword !== req.body.password && res.status(401).json("Não existe um úsuario com essas credenciais");

            const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            }, process.env.JWT_SEC_KEY, { expiresIn: "3d" });

            const { password, ...outros } = user._doc;

            res.status(200).json({ ...outros, accessToken });
        } catch (error) {
            res.status(500).json(error);
        }
    }
});

module.exports = router;