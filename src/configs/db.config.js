const mongo = require("mongoose");
mongo.set("strictQuery", false);
require("dotenv").config();
module.exports = () => mongo.connect(process.env.Mongo_Url);
