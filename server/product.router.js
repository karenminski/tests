const express = require("express");
const router = express.Router();
const {Product} = require("./product.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Product.find({});
  res.send(xs);
});

router.get("/random", async (req, res)=>{
  const xs = await Product.find({});
  const r = getRandomInt(0, xs.length - 1);
  res.status(200).send(xs[r]);
});

router.get("/similar/:productId", async (req, res)=>{
  //const xs = await Product.find({});
  // Need to get a part of the title from xs[productId]
  //const specific = await Product.find({title: {"Samsung Galaxy S9 G960U 64GB"});
  
  //const original = await Product.find({_id: {productId}}) // must conv string id to obj id
  //const original = await Product.find({_id: ObjectId(productId)})
  //const original = await Product.find({_id: ObjectId(req.params.productId)})
  //const original = xs[req.params.productId];
  
  //const similar = await Product.find({title: {"/Samsung/"});
  //const similar = await Product.find({$title: {"Samsung"}});
  const original = await Product.findById(req.params.productId);

  const brand = original.title.split(" ")[0];
  
  const products = await Product.find({"title": { $regex: brand, $options: "i"}});

  res.send(products);

});

module.exports = router;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}