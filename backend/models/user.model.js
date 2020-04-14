const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter your full name."],
      trim: true,
    },
    userMail: {
      type: String,
      validate: {
        validator: function (v) {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: (props) => `${props.value} is not a valid E-mail ID`,
      },
      required: [true, "User E-mail is required"],
      trim: true,
    },
    userPhone: {
      type: String,
      validate: {
        validator: function (v) {
          return /^[6-9]\d{9}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number`,
      },
      required: [true, "User phone number is required"],
      trim: true,
    },
    userDOB: {
      type: Date,
      required: [true, "Date of Birth is required"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
