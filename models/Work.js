const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const WorkSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  work_jobTitle: {
    type: String,
  },
  work_employer: {
    type: String,
  },
  work_start_date: {
    type: String,
  },
  work_end_date: {
    type: String,
  },
  work_desciption: {
    type: Number,
  },
});

module.exports = mongoose.model("Work", WorkSchema);
