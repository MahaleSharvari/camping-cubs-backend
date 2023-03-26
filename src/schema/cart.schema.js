const mongo = require("mongoose");
require("./user.schema");

const cartSchema = mongo.Schema(
  {
    userId: { type: mongo.Schema.Types.ObjectId, ref: "user", required: true },
    campId: {
      type: mongo.Schema.Types.ObjectId,
      ref: "campgrounds",
      required: true,
    },
    dates: [
      {
        type: Date,
        required: true,
      },
    ],
    paid: { type: Boolean, default: false },
    details: [
      {
        name: { type: String, required: true },
        phoneNumber: { type: Number, required: true },
        gender: { type: String, enum: ["male", "female"], require: true },
        age: { type: Number, required: true },
        govId: { type: String, require: true },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
cartSchema.pre("find", function (next) {
  this.populate("campId");
  next();
});
module.exports = mongo.model("carts", cartSchema);
