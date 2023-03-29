const express = require("express");
const router = express.Router();
const Wishlist = require("../schema/wishlist.schema");
const Camp = require("../schema/campground.schema");

// Add a user to the wishlist
router.get("/:campId", async (req, res) => {
  const user = req.user._id;
  const { campId } = req.params;

  try {
    // Check if the user is already in the wishlist
    const campground = await Camp.findById(campId);
    if (!campground) return res.status(400).send({ message: "Invalid campId" });

    const existingWishlist = await Wishlist.findOne({
      user,
      campground: campId,
    });
    if (existingWishlist) {
      await Wishlist.findByIdAndDelete({ _id: existingWishlist._id });
      return res.status(200).send({
        ...campground._doc,
        wishlist: false,
      });
    }
    // Create a new wishlist item
    await Wishlist.create({ user, campground: campId });
    return res.status(200).send({
      ...campground._doc,
      wishlist: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server error" });
  }
});

router.get("/", async (req, res) => {
  const user = req.user._id;
  try {
    let response = [];
    const allWishlist = await Wishlist.find({ user })
      .populate("campground")
      .select("campground ")
      .lean()
      .exec();
    allWishlist.map((e) => response.push({ ...e.campground, wishlist: true }));
    return res.status(200).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server error" });
  }
});

module.exports = router;
