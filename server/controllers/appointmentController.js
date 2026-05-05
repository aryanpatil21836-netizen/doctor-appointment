const Appointment = require("../models/Appointment");

// BOOK APPOINTMENT
const bookAppointment = async (req, res) => {
  try {
    const { doctor, date, time } = req.body;

    const appointment = await Appointment.create({
      user: req.user._id,
      doctor,
      date,
      time,
    });

    res.status(201).json(appointment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Booking failed" });
  }
};

// GET ALL APPOINTMENTS
const getAppointments = async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments" });
  }
};

// GET ONLY MY APPOINTMENTS
const getMyAppointments = async (req, res) => {
  try {
    const data = await Appointment.find({ user: req.user._id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching my appointments" });
  }
};

// DELETE APPOINTMENT
const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    await appointment.deleteOne();

    res.json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};

module.exports = {
  bookAppointment,
  getAppointments,
  getMyAppointments,
  deleteAppointment,
};