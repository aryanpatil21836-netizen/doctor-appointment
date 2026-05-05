const express = require("express");
const router = express.Router();

const {
  getDoctors,
  addDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");

router.get("/", getDoctors);
router.post("/", addDoctor);
router.delete("/:id", deleteDoctor);

module.exports = router;