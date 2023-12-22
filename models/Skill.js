const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const SkillSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  skill_name: {
    type: String,
  },
  skill_grade: {
    type: Number,
  },
  skill_image: {
    type: String,
  },
  skill_category: {
    type: String,
  },
});

module.exports = mongoose.model("Skill", SkillSchema);
