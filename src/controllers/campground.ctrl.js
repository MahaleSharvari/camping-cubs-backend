const route = require("express").Router();
const Campground = require("../schema/campground.schema");
const Wishlist = require("../schema/wishlist.schema");
const { randomBoolean } = require("../utils/common.utils");
const {
  authenticate,
  authenticateAdmin,
} = require("../middlewares/authenticate.middle");
const e = require("express");

route.post("/newCampGround", authenticateAdmin, async (req, res) => {
  try {
    const newCampGround = await Campground.create({
      recommendation: randomBoolean(),
      userId: req.user._id,
      ...req.body,
    });
    if (!newCampGround)
      return res.status(400).send({ message: "Invalid Token" });
    return res.status(200).send(newCampGround);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

route.get("/publicCampground", async (req, res) => {
  try {
    const allGround = await Campground.find().select(
      "name visitCount overallRating price images location.city location.state visitCount recommendation"
    );
    return res.status(200).send({ data: allGround });
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.get("/campground", authenticate, async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) res.status(400).send({ message: "Invalid Token" });
    const allWishlist = await Wishlist.find({ user: userId }).select(
      "campground"
    );

    let allGround = await Campground.find().select(
      "name visitCount overallRating price images location.city location.state visitCount recommendation"
    );
    if (allWishlist.length > 0) {
      const ids = allWishlist.map((e) => e.campground);
      allGround = allGround.map((e) => {
        if (ids.includes(e._id)) {
          return { ...e, wishlist: true };
        } else {
          return { ...e, wishlist: false };
        }
      });
    }
    return res.status(200).send({ data: allGround });
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.get("/campground/:id", authenticate, async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) res.status(400).send({ message: "Invalid Token" });
    let ground = await Campground.findById({ _id: req.params.id }).populate({
      path: "ratings.userId",
      select: "full_name",
    });
    if (!ground)
      return res.status(400).send({ message: "Invalid Campground Id" });
    const allWishlist = await Wishlist.find({
      user: userId,
      campground: req.params.id,
    }).select("campground");
    if (allWishlist.length > 0) {
      ground = { ...ground, wishlist: true };
    } else {
      ground = { ...ground, wishlist: false };
    }

    return res.status(200).send(ground);
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.get("/admin-campground/", authenticateAdmin, async (req, res) => {
  try {
    const ground = await Campground.find({ userId: req.user._id }).select(
      "name visitCount overallRating price images location.city location.state visitCount recommendation"
    );
    if (!ground) return res.status(400).send({ message: "Invalid Token" });
    return res.status(200).send(ground);
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.patch("/campground/:id", authenticateAdmin, async (req, res) => {
  try {
    const updatedGround = await Campground.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedGround)
      return res.status(400).send({ message: "Invalid Campground Id" });
    return res.status(200).send(updatedGround);
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.delete("/campground/:id", authenticateAdmin, async (req, res) => {
  try {
    const deletedGround = await Campground.deleteOne({ _id: req.params.id });
    return res.status(200).send(deletedGround);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = route;
