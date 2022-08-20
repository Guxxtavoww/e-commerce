require("dotenv/config");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const cartRoute = require("./routes/cart");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const paymentRoute = require("./routes/stripe");
const productRoute = require("./routes/product");

app.use(cors());
app.use(express.json());

app.use("/server/cart", cartRoute);
app.use("/server/auth", authRoute);
app.use("/server/user", userRoute);
app.use("/server/order", orderRoute);
app.use("/server/produto", productRoute);
app.use("/server/pagamento", paymentRoute);

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(app.listen(process.env.PORT, () => console.log("Servidor Rodando")))
.catch(err => console.log(err));

app.get("/", (req, res) => res.send("Olá! Heroku"));