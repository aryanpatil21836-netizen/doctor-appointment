const express = require("express");
const router = express.Router();

const {
  bookAppointment,
  getAppointments,
  getMyAppointments,
  deleteAppointment,
} = require("../controllers/appointmentController");

const { protect } = require("../middleware/authMiddleware");


router.get("/", getAppointments);


router.get("/my", protect, getMyAppointments);


router.post("/book", protect, bookAppointment);


router.delete("/:id", deleteAppointment);

module.exports = router;