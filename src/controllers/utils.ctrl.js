const route = require("express").Router();
const Campground = require("../schema/campground.schema");
const Cart = require("../schema/cart.schema");

route.post("/rating/:id", async (req, res) => {
  try {
    const campId = req.params.id;
    const { userRating } = req.body;

    if (Number.isNaN(userRating)) {
      return res
        .status(500)
        .send({ message: "Invalid input: rating must be a number" });
    }

    const campGroud = await Campground.findOne({ _id: campId }).select(
      "rating ratingCount"
    );

    if (campGroud.length === 0) {
      return res.status(400).send({ message: "Campground not found" });
    }

    const newRating =
      campGroud.ratingCount == 0
        ? userRating
        : (userRating + campGroud.rating) / 2;
    const newRatingCount = campGroud.ratingCount + 1;

    const updateRating = await Campground.findByIdAndUpdate(
      { _id: campId },
      { rating: newRating, ratingCount: newRatingCount },
      { new: true }
    );
    return res.status(200).send(updateRating);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error);
  }
});

route.post("/showRating", async (req, res) => {
  try {
    const { userId, campId } = req.body;
    if (!userId || !campId)
      return res.status(400).send({ message: "Missing campId, userId" });

    const findInCart = await Cart.findOne({ userId, campId });
    if (!findInCart) return res.status(200).send({ shouldShow: false });
    return res.status(200).send({ shouldShow: true });
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.post("/filters", async (req, res) => {
  const {
    body: { filters, query },
  } = req;

  if (!filters || !query) {
    return res.status(400).send({ message: "Missing filters, query" });
  }

  const requiredFields = [
    "maxRating",
    "minRating",
    "rating",
    "maxPrice",
    "minPrice",
    "price",
    "latitude",
    "longitude",
    "distance",
  ];

  const missingFields = requiredFields.filter((field) => !filters[field]);

  if (missingFields.length > 0) {
    return res.status(400).send({
      message: `Missing ${missingFields.join(", ")}`,
    });
  }

  try {
    const {
      maxRating,
      minRating,
      rating,
      maxPrice,
      minPrice,
      price,
      latitude,
      longitude,
      distance,
    } = filters;

    const filteredData = await Campground.aggregate([
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
      {
        $match: {
          name: { $regex: query, $options: "i" },
          price: { $gte: minPrice, $lte: maxPrice },
          rating: { $gte: minRating, $lte: maxRating },
        },
      },
      {
        $sort: {
          distance,
          price,
          rating,
        },
      },
    ]);

    return res.status(200).json(filteredData);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = route;
