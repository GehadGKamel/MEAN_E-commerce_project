const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_id: String,
  name: String,
  price: Number,
  image_url: String,
  description: String,
});

const productModel = mongoose.model("post", productSchema);

module.exports = productModel;

/*
  "product_id": "123456",
  "name": "Apple iPhone 11",
  "price": 699.99,
  "image_url": "https://example.com/images/iphone11.jpg",
  "description": "The latest iPhone model from Apple with a dual-camera system and A13 Bionic chip."
*/