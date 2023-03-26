const route = require("express").Router();
const Cart = require("../schema/cart.schema");

route.post("/addItem", async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) res.status(400).send({ message: "Invalid Token" });
    const newCart = await Cart.create({ userId, ...req.body });
    if (!newCart) res.status(400).send({ message: "Invalid Data Provided" });
    return res.status(200).send(newCart);
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.get("/cart", async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) return res.status(400).send({ message: "Invalid userId" });
    const allCart = await Cart.find({ userId, paid: false });
    if (!allCart) return res.status(400).send({ message: "Invalid userId" });
    return res.status(200).send(allCart);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

route.get("/cart/:campId", async (req, res) => {
  try {
    const userId = req.user._id;
    const singleCart = await Cart.findOne({
      campId: req.params.campId,
      userId,
      paid: true,
      "dates.1": { $gt: new Date() },
    }).populate("campId");
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
