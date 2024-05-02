const mongoose = require("mongoose");
const BannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    photo: {
      type: [],
      required: true,
    },
    status: {
      type: Boolean,
      enum: ["true", "false"],
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Banner", BannerSchema);
