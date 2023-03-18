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
const State = require("./controllers/state-wise.ctrl")

router.use("/", Otp);
router.post("/login", login);
router.post("/register", register);
router.use("/chat", ChatBot);
router.use("/camps", CampGround);
router.use("/suggestions", authenticate, Suggestions);
router.use("/utils", authenticate, Utils);
router.use("/cartDetails", authenticate, Cart);
router.use("/paid", authenticate, Upcoming);
router.use("/user", authenticate, User);
router.use("/stateCity", State);

module.exports = router;
