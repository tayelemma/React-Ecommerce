const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/userRouter");
const orderRouter = require("./routers/orderRouter");
const productRouter = require("./routers/productRouter");

const { DB_URL } = require('./config.json');
const app = express();

dotenv.config();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//API
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("api/products", productRouter);


app.get("/", (req, res) => {
    res.send("API is Running...");
});

app.use(function (err, req, res, next) {
    res.status(500).json({ success: false, data: err.message })
});

mongoose.set('strictQuery', false);
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { app.listen(3000, () => console.log(`server running in port 3000....`)) })
