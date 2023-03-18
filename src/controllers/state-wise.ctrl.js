const router = require("express").Router();
const State = require("../schema/statecitys.schema");

router.get("/allStates", async (req, res) => {
  try {
    const allStates = await State.distinct("state");
    return res.status(200).send({ allStates });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/city/:state_name", async (req, res) => {
  try {
    const state_name = req.params.state_name;
    const allCity = await State.find({ state: state_name })
      .sort({ city: 1 })
      .select("city state latitude longitude -_id");
    return res.status(200).send({ allCity });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
