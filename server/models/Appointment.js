const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    doctor: String,
    date: String,
    time: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);