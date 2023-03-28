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
    overallRating: {
      type: Number,
      default: 0,
    },
    ratings: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
        rate: { type: Number },
        review: { type: String },
      },
    ],
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
    highlight: {
      type: [String],
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    recommendation: {
      type: Boolean,
      default: false,
    },
    rentals: { type: String, enum: ["cottage", "tent"], default: "tent" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

campgroundSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("campgrounds", campgroundSchema);
