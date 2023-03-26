const route = require("express").Router();
const Cart = require("../schema/cart.schema");
const Campground = require("../schema/campground.schema");

route.post("/successfully", async (req, res) => {
  try {
    const userId = req.user._id;
    const { cartId } = req.body;
    if (!cartId || !userId)
      return res.status(400).send({ message: "Invalid cartId or Token" });

    const updateCart = await Cart.findOneAndUpdate(
      { _id: cartId, userId },
      { paid: true },
      { new: true }
    );
    if (!updateCart)
      return res.status(400).send({ message: "Invalid cartId or userId" });

    const updateCampGroundCount = await Campground.findByIdAndUpdate(
      {
        _id: updateCart.campId,
      },
      { $inc: { visitCount: updateCart.details.length } }
    );
    if (!updateCampGroundCount)
      return res.status(400).send({ message: "Invalid cartId or userId" });

    return res.send(updateCart).status(200);
  } catch (error) {
    return res.send(error).status(500);
  }
});

route.get("/upcomingTrips", async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) return res.status(400).send({ message: "Invalid userId" });
    const previousTrips = await Cart.find({
      userId,
      paid: true,
      "dates.0": { $lt: new Date() },
      "dates.1": { $lt: new Date() },
    });
    const upcomingTrips = await Cart.find({
      userId,
      paid: true,
      "dates.0": { $gt: new Date() },
      "dates.1": { $gt: new Date() },
    });
    const currentTrip = await Cart.find({
      userId,
      paid: true,
      "dates.0": { $gte: new Date() },
      "dates.1": { $lte: new Date() },
    });
    if (!previousTrips || !upcomingTrips || !currentTrip)
      res.status(400).send({ message: "Invalid userId" });
    return res.status(200).send({ previousTrips, currentTrip, upcomingTrips });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = route;
