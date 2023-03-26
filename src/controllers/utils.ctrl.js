const route = require("express").Router();
const Campground = require("../schema/campground.schema");
const Cart = require("../schema/cart.schema");

route.post("/rating/:campId", async (req, res) => {
  try {
    const userId = req.user._id;
    const campId = req.params.campId;
    const { userRating } = req.body;
    const { rate, review } = userRating;

    const checkRated = await Campground.findOne({
      _id: campId,
      ratings: { $elemMatch: { userId: userId } },
    }).select("rating ratingCount");

    if (checkRated) {
      return res.status(400).send({ message: "Already Rated By User." });
    }

    if (!userRating || !rate || !review)
      res.status(400).send({
        message:
          "userRating is object that contains rate, review of customer please provide valid data",
      });

    if (Number.isNaN(rate)) {
      return res
        .status(500)
        .send({ message: "Invalid input: rate must be a number" });
    }

    const campGround = await Campground.findOne({
      _id: campId,
    }).select("rating ratingCount");

    const newRating =
      campGround.ratingCount == 0
        ? rate
        : (rate + campGround.overallRating) / 2;

    const updateRating = await Campground.findByIdAndUpdate(
      { _id: campId },
      {
        overallRating: newRating,
        $push: { ratings: { userId, ...userRating } },
      },
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
    const userId = req.user._id;
    const { campId } = req.body;
    if (!userId || !campId)
      return res
        .status(400)
        .send({ message: "Missing campId or Invalid Token" });

    const findInCart = await Cart.findOne({
      userId,
      campId,
      paid: true,
      "dates.0": { $lt: new Date() },
      "dates.1": { $lt: new Date() },
    });

    if (Object.keys(findInCart).length === 0)
      return res.status(200).send({ shouldShow: false });

    return res.status(200).send({ shouldShow: true });
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.post("/filters", async (req, res) => {
  const { filters, query } = req.body;

  if (!filters || !query) {
    return res.status(400).send({ message: "Missing filters, query" });
  }

  const requiredFields = [
    "maxRating",
    "minRating",
    "maxPrice",
    "minPrice",
    "latitude",
    "longitude",
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
      maxPrice,
      minPrice,
      latitude,
      longitude,
      rentals,
      overallRating,
      price,
      distance,
      visitCount,
    } = filters;

    const baseFilters = {
      price: { $gte: minPrice, $lte: maxPrice },
      overallRating: { $gte: minRating, $lte: maxRating },
    };

    const matchFilters =
      query.trim().length > 0
        ? rentals.length > 0
          ? {
              rentals: { $in: rentals },
              ...baseFilters,
            }
          : {
              name: { $regex: query, $options: "i" },
              ...baseFilters,
            }
        : rentals.length > 0
        ? {
            ...baseFilters,
            rentals: { $in: rentals },
          }
        : baseFilters;

    let sortFilters = {};
    if (overallRating === 1 || overallRating === -1)
      sortFilters["overallRating"] = overallRating;
    if (price === 1 || price === -1) sortFilters["price"] = price;
    if (distance === 1 || distance === -1) sortFilters["distance"] = distance;
    if (visitCount === 1 || visitCount === -1)
      sortFilters["visitCount"] = visitCount;

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
        $match: matchFilters,
      },
      {
        $sort: sortFilters,
      },
    ]);

    return res.status(200).json(filteredData);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = route;
