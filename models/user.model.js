const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowerCase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      maxLength: 1024,
      minLength: 6,
    },
    description: {
      type: String,
      maxLength: 1024,
    },
    followers: {
      type: [String],
    },
    followings: {
      type: [String],
    },
    likes: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
