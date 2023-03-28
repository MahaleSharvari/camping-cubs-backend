const router = require("express").Router();
const { register, login } = require("./controllers/auth.ctrl");
const { authenticate } = require("./middlewares/authenticate.middle");
const ChatBot = require("./controllers/chatbot.ctrl");
const CampGround = require("./controllers/campground.ctrl");
const Utils = require("./controllers/utils.ctrl");
const Cart = require("./controllers/cart.ctrl");
const Upcoming = require("./controllers/upcomingtrip.ctrl");
const Otp = require("./controllers/otp.ctrl");
const Suggestions = require("./controllers/suggestion.ctrl");
const User = require("./controllers/user.ctrl");
const State = require("./controllers/state-wise.ctrl");
const Wishlist = require("./controllers/wishlist.ctrl");

router.use("/", Otp);
router.post("/login", login);
router.post("/register", register);
router.use("/chat", ChatBot);
router.use("/camps", CampGround);
router.use("/stateCity", State);
router.use("/suggestions", authenticate, Suggestions);
router.use("/utils", authenticate, Utils);
router.use("/buySlots", authenticate, Cart);
router.use("/paid", authenticate, Upcoming);
router.use("/user", authenticate, User);
router.use("/wishlist", authenticate, Wishlist);

const Campground = require("./schema/campground.schema");
const { randomBoolean } = require("./utils/common.utils");
const { ObjectId } = require("mongodb");
router.post("/add-camp", async (req, res) => {
  const userId = ObjectId("6418a4ffd447aed306f9f0f4");
  try {
    console.log(req.body);
    const newCampGround = await Campground.create({
      recommendation: randomBoolean(),
      userId,
      ...req.body,
    });
    return res.status(200).send(newCampGround);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error);
  }
});

module.exports = router;
