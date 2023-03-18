const route = require("express").Router();
const Cart = require("../schema/cart.schema");

route.post("/addItem", async (req, res) => {
  try {
    const newCart = await Cart.create(req.body);
    return res.status(200).send(newCart);
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.get("/cart", async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).send({ message: "Invalid userId" });
    const allCart = await Cart.find({ userId });
    if (!allCart) return res.status(400).send({ message: "Invalid userId" });
    return res.status(200).send(allCart);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

route.get("/cart/:cartId", async (req, res) => {
  try {
    const singleCart = await Cart.findOne({ _id: req.params.cartId }).populate(
      "campId"
    );
    if (!singleCart) return res.status(400).send({ message: "Invalid cartId" });
    return res.status(200).send(singleCart);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

route.patch("/cart/:cartId", async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      { _id: req.params.cartId },
      req.body,
      { new: true }
    );
    if (!updatedCart)
      return res.status(400).send({ message: "Invalid cartId" });
    return res.status(200).send(updatedCart);
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.delete("/Cart/:id", async (req, res) => {
  try {
    const deletedCart = await Cart.deleteOne({ _id: req.params.id });
    return res.status(200).send(deletedCart);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = route;
