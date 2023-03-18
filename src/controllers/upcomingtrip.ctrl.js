const route = require("express").Router();
const Cart = require("../schema/cart.schema");
const Campground = require("../schema/campground.schema");

route.post("/successfully", async (req, res) => {
  try {
    const { cartId, userId } = req.body;
    if (!cartId || !userId)
      return res.status(400).send({ message: "Invalid cartId or userId" });

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
    const { userId } = req.body;
    if (!userId) return res.status(400).send({ message: "Invalid userId" });
    const upcomingTrips = await Cart.find({
      userId,
      paid: true,
    }).populate("campId");
    if (!upcomingTrips)
      return res.status(400).send({ message: "Invalid userId" });
    return res.status(200).send(upcomingTrips);
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.get("/upcomingTrip/:id", async (req, res) => {
  try {
    const singleUpcomingTrip = await Cart.findOne({
      _id: req.params.id,
      paid: true,
    }).populate("campId");
    if (!singleUpcomingTrip)
      return res
        .status(400)
        .send({ message: "User Not Paid or Invalid CartId" });
    return res.status(200).send(singleUpcomingTrip);
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.patch("/upcomingTrip/:id", async (req, res) => {
  try {
    const updatedUpcomingTrip = await Cart.findByIdAndUpdate(
      { _id: req.params.id },
      { paid: false },
      { new: true }
    );
    if (!updatedUpcomingTrip)
      return res
        .status(400)
        .send({ message: "User Not Paid or Invalid CartId" });
    return res.status(200).send(updatedUpcomingTrip);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = route;
