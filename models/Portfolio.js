const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PortfolioSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  portfolio_project_name: {
    type: String,
  },
  portfolio_description: {
    type: String,
  },
  portfolio_url: {
    type: String,
  },
  portfolio_images: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
