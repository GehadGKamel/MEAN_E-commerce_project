const express = require("express");
const router = express.Router();
const productModel = require("../models/product");

router.get("/", async (req, res) => {
    try {
        const productsList = await productModel.find();
        res.json(productsList);
    } catch (error) {
        res.json(error);
    }
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const product = await productModel.findById(id);
        res.json(product);
    } catch (error) {
        res.json(error);
    }
});

router.post("/", async (req, res) => {
    const product = new productModel(req.body);

    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        res.json(error);
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const product = await productModel.findByIdAndUpdate(id, req.body);
        res.json(product);
    } catch (error) {
        res.json(error);
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const product = await productModel.findByIdAndDelete(id);
        res.json(product);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;