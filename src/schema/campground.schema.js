const mongoose = require("mongoose");

const campgroundSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      // default: 0,
    },
    ratingCount: {
      type: Number,
      // default: 0,
    },
    visitCount: {
      type: Number,
      default: 0,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
        default: "Point",
      },
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      coordinates: {
        type: [Number], // latitude then longitude
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    highlight: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

campgroundSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("campgrounds", campgroundSchema);
