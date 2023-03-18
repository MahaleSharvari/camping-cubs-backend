require("dotenv").config();
const bcrypt = require("bcryptjs");
const mongo = require("mongoose");

const userSchema = mongo.Schema(
  {
    admin: { type: Boolean, default: false },
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otpDetails: { otp: { type: Number }, otpExpiration: { type: Number } },
    location: {
      city: {
        type: String,
        default:""
      },
      state: {
        type: String,
        default:""
      },
      address: {
        type: String,
        default:""
      },
      latitude: {
        type: String,
        default:""
      },
      longitude: {
        type: String,
        default:""
      },
      pincode: {
        type: Number,
        default:0
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hashSync(this.password, 6);
  return next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongo.model("user", userSchema);
