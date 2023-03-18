require("dotenv").config();
const mongo = require("mongoose");

const stateCitySchema = mongo.Schema(
  {
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    latitude: {
      type: String,
      default: "",
    },
    longitude: {
      type: String,
      default: "",
    },
    pincode: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongo.model("statecitys", stateCitySchema);
