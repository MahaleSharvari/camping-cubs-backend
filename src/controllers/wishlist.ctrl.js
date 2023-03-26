const express = require("express");
const router = express.Router();
const Wishlist = require("../schema/wishlist.schema");

// Add a user to the wishlist
router.get("/:campId", async (req, res) => {
  const user = req.user._id;
  const { campId } = req.params;

  try {
    // Check if the user is already in the wishlist
    const existingWishlist = await Wishlist.findOne({ user, campId });
    if (existingWishlist) {
      await Wishlist.findByIdAndDelete({ _id: existingWishlist._id });
      return res
        .status(200)
        .send({ message: "User removed from the wishlist" });
    }

    // Create a new wishlist item
    await Wishlist.create({ user, campId });

    res.status(200).send({ message: "User added to the wishlist" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server error" });
  }
});

module.exports = router;
