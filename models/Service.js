const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ServiceSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  service_image: {
    type: String,
  },
  service_name: {
    type: String,
  },
  service_description: {
    type: String,
  },
});

module.exports = mongoose.model("Service", ServiceSchema);
