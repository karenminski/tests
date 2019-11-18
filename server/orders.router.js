const express = require("express");
const router = express.Router();
const {Order} = require("./order.model.js");
const mongoose = require("mongoose");

/*router.get("/", async (req, res)=>{
  const xs = await Order.find({});
  res.send(xs);
});*/

router.post("/addname", (req, res) => {
  var myData = new Order(req.body);
  myData.save()
    .then(item => {
      res.send("Order saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save order to database");
    });
});

module.exports = router;