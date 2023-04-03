const router = require("express").Router();
const Campground = require("../schema/campground.schema");
const Wishlist = require("../schema/wishlist.schema");

router.post("/", async (req, res) => {
  try {
    const { latitude, longitude, price } = req.body;
    let allStates = [
      "Andaman and Nicobar Islands",
      "Andhra Pradesh",
      "Arunāchal Pradesh",
      "Assam",
      "Bihār",
      "Chandīgarh",
      "Chhattīsgarh",
      "Damān and Diu",
      "Delhi",
      "Dādra and Nagar Haveli",
      "Goa",
      "Gujarāt",
      "Haryāna",
      "Himāchal Pradesh",
      "Jammu and Kashmīr",
      "Jharkhand",
      "Karnātaka",
      "Kerala",
      "Lakshadweep",
      "Madhya Pradesh",
      "Mahārāshtra",
      "Manipur",
      "Meghālaya",
      "Mizoram",
      "Nāgāland",
      "Odisha",
      "Puducherry",
      "Punjab",
      "Rājasthān",
      "Sikkim",
      "Tamil Nādu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ];
    allStates.sort(() => Math.random() - 0.5);
    if (!latitude || !longitude) {
      return res.status(400).send({ message: "Missing latitude or longitude" });
    }
    let aggQuery = [
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(latitude), parseFloat(longitude)],
          },
          distanceField: "distance",
          spherical: true,
        },
      },
      { $sort: { distance: 1 } },
    ];
    let $match = {};
    if (price && price.length > 0) {
      data = [];
      price.map((e) => {
        data.push({ price: { $gte: e[0], $lte: e[1] } });
      });
      $match = {
        $or: data,
      };
    }
    let response = {};
    for (const e of allStates) {
      $match = { ...$match, "location.state": e };
      let suggestedCampground = await Campground.aggregate([
        ...aggQuery,
        { $match }
      ]);
      const top5 =
        suggestedCampground.length > 5
          ? suggestedCampground
              .slice(0, 5)
              .sort((a, b) => b.overallRating - a.overallRating)
              .concat(suggestedCampground.slice(5))
          : suggestedCampground;
      const allWishlist = await Wishlist.find({ user: req.user._id }).select(
        "campground"
      );
      const ids = allWishlist.map((e) => e._id.toString());
      if (top5.length > 0) {
        let temp = top5.map((e) => ({
          ...e,
          wishlist: ids.includes(e._id.toString()),
        }));
        response[e] = temp;
      }
    }
    return res.status(200).send(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
