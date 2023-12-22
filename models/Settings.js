const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const SettingsSchema = new Schema({
  about_me: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  primary_color: {
    type: String,
  },
  secondary_color: {
    type: String,
  },
  cv_link: {
    type: String,
  },
  customers_number: {
    type: Number,
  },
  projects_number: {
    type: Number,
  },
  month_number: {
    type: Number,
  },
});

module.exports = mongoose.model("Skill", SettingsSchema);
