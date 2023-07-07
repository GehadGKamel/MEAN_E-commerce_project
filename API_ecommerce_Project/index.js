const express = require("express");
const mongoose = require("mongoose");


require('dotenv').config();
const PORT = process.env.PORT || 5000;

const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200,
};


const app = express();


const productRouter = require("./routes/product");

app.use(express.json());

app.use(cors(corsOptions));

app.use((req, res, next) => {
    console.log(`${new Date()} - ${req.method} - ${req.url}`);
    next();
});


app.use("/product", productRouter);

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
}, (err) => {
    if (!err) return console.log(`DB Connected Success`);
    console.log(err);
});

app.listen(PORT, (err) => {
    if (!err) return console.log(`Server starts at Port: ${PORT}`);
    console.log(err);
});