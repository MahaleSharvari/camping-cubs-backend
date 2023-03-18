const route = require("express").Router();
const Campground = require("../schema/campground.schema");
const {
  authenticate,
  authenticateAdmin,
} = require("../middlewares/authenticate.middle");

route.post("/newCampGround", authenticateAdmin, async (req, res) => {
  try {
    const newCampGround = await Campground.create(req.body);
    return res.status(200).send(newCampGround);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

route.get("/campground", async (req, res) => {
  try {
    const allGround = await Campground.find().select(
      "name visitCount rating price images location.city location.state"
    );
    return res.status(200).send({ data: allGround });
  } catch (error) {
    return res.status(500).send(error);
  }
});

route.get("/campground/:id", authenticate, async (req, res) => {
  try {
    const ground = await Campground.find({ _id: req.params.id });
    if (!ground)
      return res.status(400).send({ message: "Invalid Campground Id" });
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
