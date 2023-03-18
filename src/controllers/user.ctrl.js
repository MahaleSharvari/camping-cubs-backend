const router = require("express").Router();
const User = require("../schema/user.schema");

router.get("/:user_id", async (req, res) => {
  try {
    const user_id = req.params.user_id;
    if (req.user._id != user_id)
      return res.status(400).send({ message: "Invalid user id" });
    if (!user_id) return res.status(400).send({ message: "User Id required!" });
    const user = await User.findById({ _id: user_id });
    if (!user) return res.status(400).send({ message: "Invalid user id!" });
    res.status(200).send({ status: true, user });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.patch("/:user_id", async (req, res) => {
  try {
    const user_id = req.params.user_id;
    if (req.user._id != user_id)
      return res.status(400).send({ message: "Invalid user id" });
    const body = req.body;
    if (!user_id || !body)
      return res.status(400).send({ message: "User Id or Body required!" });
    const user = await User.findByIdAndUpdate({ _id: user_id }, body, {
      new: true,
    });
    if (!user) return res.status(400).send({ message: "Invalid user id!" });
    res.status(200).send({ status: true, user });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
