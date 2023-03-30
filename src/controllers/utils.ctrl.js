const route = require("express").Router();
const Campground = require("../schema/campground.schema");
const Cart = require("../schema/cart.schema");
const Wishlist = require("../schema/wishlist.schema");
const MainUser = require("../schema/user.schema");

route.post("/rating/:campId", async (req, res) => {
  try {
    const userId = req.user._id;
    const { campId } = req.params;
    const { rate, review } = req.body;

    const checkRated = await Campground.findOne({
      _id: campId,
      ratings: { $elemMatch: { userId: userId } },
    }).select("_id");

    if (checkRated) {
      return res.status(400).send({ message: "Already Rated By User." });
    }

    if ((!rate && rate != 0) || !review)
      res.status(400).send({
        message: "rate, review is required please provide valid data.",
      });

    const campGround = await Campground.findOne({
      _id: campId,
    }).select("ratings overallRating");

    const userName = await MainUser.findById({ _id: userId }).select(
      "full_name"
    );

    const newRating =
      campGround.ratings.length === 0
        ? rate
        : (rate + campGround.overallRating) / 2;

    const updateRating = await Campground.findByIdAndUpdate(
      { _id: campId },
      {
        overallRating: newRating,
        $push: {
          ratings: {
            userId: userName._id,
            userName: userName.full_name,
            rate,
            review,
          },
        },
      },
      { new: true }
    );

    return res.status(200).send(updateRating);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error);
  }
});

route.get("/showRating/:campId", async (req, res) => {
  try {
    const userId = req.user._id;
    const { campId } = req.params;
    if (!userId || !campId)
      return res
        .status(400)
        .send({ message: "Missing campId or Invalid Token" });

    const checkRated = await Campground.findOne({
      _id: campId,
      ratings: { $elemMatch: { userId: userId } },
    }).select("_id");

    if (checkRated) {
      return res.status(200).send({ shouldShow: false });
    }

    return res.status(200).send({ shouldShow: true });
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.post("/filters", async (req, res) => {
  const { filters, query } = req.body;

  if (filters == undefined || query == undefined) {
    return res.status(400).send({ message: "Missing filters, query" });
  }

  try {
    let {
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
      recommendation,
    } = filters;

    if (!minPrice) {
      minPrice = 500;
    }
    if (!maxPrice) {
      maxPrice = 15000;
    }
    if (!minRating) {
      minRating = 0;
    }
    if (!maxRating) {
      maxRating = 5;
    }
    const baseFilters = {
      price: { $gte: minPrice, $lte: maxPrice },
      overallRating: { $gte: minRating, $lte: maxRating },
    };

    let matchFilters =
      query && query.trim().length > 0
        ? rentals && rentals.length > 0
          ? {
              name: { $regex: query, $options: "i" },
              rentals: { $in: rentals },
              ...baseFilters,
            }
          : {
              name: { $regex: query, $options: "i" },
              ...baseFilters,
            }
        : rentals && rentals.length > 0
        ? {
            ...baseFilters,
            rentals: { $in: rentals },
          }
        : baseFilters;

    recommendation != undefined
      ? (matchFilters = { ...matchFilters, recommendation })
      : (matchFilters = matchFilters);

    let sortFilters = {};
    if (overallRating === 1 || overallRating === -1)
      sortFilters["overallRating"] = overallRating;
    if (price === 1 || price === -1) sortFilters["price"] = price;
    if (distance === 1 || distance === -1) sortFilters["distance"] = distance;
    if (visitCount === 1 || visitCount === -1)
      sortFilters["visitCount"] = visitCount;

    let aggQuery = [
      {
        $match: matchFilters,
      },
    ];
    if (Object.keys(sortFilters).length > 0) {
      aggQuery = [
        ...aggQuery,
        {
          $sort: sortFilters,
        },
      ];
    }
    latitude && longitude
      ? (aggQuery = [
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
          ...aggQuery,
        ])
      : (aggQuery = aggQuery);

    const filteredData = await Campground.aggregate(aggQuery);
    const allWishlist = await Wishlist.find({ user: req.user._id }).select(
      "campground"
    );
    if (!allWishlist) res.status(400).send({ message: "Invalid Token" });
    const ids = allWishlist.map((e) => e.campground.toString());
    const response = filteredData.map((e) => ({
      ...e,
      wishlist: ids.includes(e._id.toString()),
    }));
    return res.status(200).send({ data: response });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = route;
