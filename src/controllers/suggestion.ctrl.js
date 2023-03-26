const router = require("express").Router();
const Campground = require("../schema/campground.schema");

router.post("/", async (req, res) => {
  try {
    const { latitude, longitude, minPrice, maxPrice } = req.body;

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
    if (minPrice && maxPrice) {
      aggQuery = [
        ...aggQuery,
        {
          $match: {
            price: { $gte: minPrice, $lte: maxPrice },
          },
        },
      ];
    }

    let suggestedCampground = await Campground.aggregate(aggQuery);
    const result =
      suggestedCampground.length > 5
        ? suggestedCampground
            .slice(0, 5)
            .sort((a, b) => b.rating - a.rating)
            .concat(suggestedCampground.slice(5))
        : suggestedCampground;
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
